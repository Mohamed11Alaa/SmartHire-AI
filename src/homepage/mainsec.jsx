import headerpic from "./photos/headerpic.png";
import GradientText from "../animations/textani";

function Mainsec() {
  return (
    <div className="mainsec">
      <div className="mainsec-text">
        <GradientText
          colors={["#e96c8fff", "#000000", "#586dcaff", "#000000", "#e96c8fff"]}
          animationSpeed={6}
          showBorder={false}
          className="mainsec-headline"
        >
          Empower Your Resume With <br /> AI Resume <br /> Analyzer
        </GradientText>
      </div>
      <div className="mainsec-image">
        <img
          className="header-image"
          src={headerpic}
          alt="Sample resume preview"
          style={{ maxWidth: "100%",
             height: "auto",
              display: "block" }}
        />
      </div>
    </div>
  );
}

export default Mainsec;
