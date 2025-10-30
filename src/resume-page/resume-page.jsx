import GradientText from "../animations/textani";
import { useState } from "react";
function ResumePage() {

  const [Datalist, setDatalist] = useState([
    {
     companyname: "",
     jobname: "",
     jobdescription: "",
    }
  ]);
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
        <input
          type="text"
          className="jobdescription-input"
          placeholder="Write a clear & concise job description with responsibilities & expectations..."
          onChange={(e) => {
            setDatalist({ jobdescription: e.target.value });
          }}
        />
        </div>
    
        
        <button className="primary-button">Save & Analyze Resume</button>
      </div>
    </div>

        
  );
}

export default ResumePage;
