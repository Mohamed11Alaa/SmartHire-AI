import GradientText from "../animations/textani";
import { useState , useEffect} from "react";
import constants , {
  buildPresenceChecklist, 
   METRIC_CONFIG,
} from "./constants.js"
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min?url";
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
function ResumePage() {

  //  checking if Ai is ready or not
  const [aiReady, setAiReady] = useState(false);
// loading states for the ai
  const [isLoading, setIsLoading] = useState(false);
  //the pdf file uploaded by the user
  const [uploadedFile, setUploadedFile] = useState(null);
  // analyzed data from the ai
  const [analysis, setAnalysis] = useState(null);
  // resume text extracted from the pdf
  const [resumeText, setResumeText] = useState("");
  // checklist for presence metrics
  const [presenceChecklist, setPresenceChecklist] = useState([])


  const [Datalist, setDatalist] = useState([
    {
     companyname: "",
     jobname: "",
     jobdescription: "",
    }
  ]);

// checking if ai is ready
  useEffect(() =>{
    const checkAiReady = setInterval (() => {
      if(window.puter?.ai?.chat){
        setAiReady (true);
        clearInterval (checkAiReady);
      }
    } , 300);
    return () => clearInterval (checkAiReady);
  }, []);

//extracting text from pdf
const extractTextFromPDF = async (file) => {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const texts = await Promise.all(
    Array.from({ length: pdf.numPages }, (_, i) => i + 1).map(async (pageNum) => {
      const page = await pdf.getPage(pageNum);
      const content = await page.getTextContent();
      return content.items.map((item) => item.str).join(" ");
    })
  );
  return texts.join("\n").trim();
};


const parseJSNONResponse = (reply) => {
  try {
    const match = reply.match(/\{[\s\S]*\}/);
    const parsed = match ? JSON.parse(match[0]) : {};
    if (!parsed.overallScore && !parsed.error) {
      throw new Error("Invalid AI response ");
    }
    return parsed;

  } catch (err) {
    throw new Error("Failed to parse AI response " + err.message);
  }
};

const analyzeResume = async (text) => {
  const prompt = constants.ANALYZE_RESUME_PROMPT.replace("{DOCUMENT_TEXT}", text);
  const response = await window.puter.ai.chat([
    { role: "system", content: "You are an expert assistant that analyzes resumes based on job descriptions." },
    { role: "user", content: prompt },
  ],{
    model : "gpt-4o",
  }
);
const result = parseJSNONResponse(
  typeof response === "string" ? response : response.message?.content || ""
);
if (result.error) {
  throw new Error(result.error);
}
return result;
};


const handleFileUpload = async (e) => {
  const file = e.target.files[0];
  if (!file || file.type !== "application/pdf") {
    return alert("Please upload a valid PDF file.");
  }
  setUploadedFile(file);
  setIsLoading(true);
  setAnalysis (null);
  setResumeText("");
  setPresenceChecklist([]);


  try {

    const text = await extractTextFromPDF(file);
    setResumeText(text);

    setPresenceChecklist(buildPresenceChecklist (text));
    setAnalysis(await analyzeResume (text));


  }
  
  catch (err) {
    alert ("Error analyzing resume: " + err.message);
    reset();
  }
  
  finally {
    setIsLoading (false);
  }
};


  return (
    <div>
      <div className="resume-text">
        <GradientText
          colors={["#e96c8fff", "#000000", "#586dcaff", "#000000", "#e96c8fff"]}
          animationSpeed={6}
          showBorder={false}
          className="resume-headline"
        >
          Smart feedback <br />for your dream job
        </GradientText>
        <p className="resume-description">
          Drop your resume for an ATS score and improvement tips.
        </p>
      </div>
      <div className="resume-upload-section">
        <div className="company-label">
          <label htmlFor="company-name">Company Name</label>
        <input
          type="text"
          className="company-name-input"
          placeholder="Amazon"
          onChange={(e) => {
            setDatalist({ companyname: e.target.value });
          }}
        /> 
        </div>
        <div className="job-label">
          <label htmlFor="job-name">Job Name</label>
        <input
          type="text"
          className="job-name-input"
          placeholder="Software Engineer"
          onChange={(e) => {
            setDatalist({ jobname: e.target.value });
          }}
        />
        </div>
        <div className="job-description-label">
          <label htmlFor="job-description">Job Description</label>
        <textarea
          className="jobdescription-input"
          placeholder="Write a clear & concise job description with responsibilities & expectations..."
          rows={6}
          onChange={(e) => {
            setDatalist({ jobdescription: e.target.value });
          }}
        ></textarea>
        </div>
    
        
        <button className="primary-button">Save & Analyze Resume</button>
      </div>
    </div>

        
  );
}

export default ResumePage;
