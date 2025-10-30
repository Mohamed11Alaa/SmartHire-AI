import React from "react";
import GradientText from "../animations/textani";
function HeroText() {
  return (
    <div className="hero-text">
     <GradientText
              colors={["#e96c8fff", "#000000", "#586dcaff", "#000000", "#e96c8fff"]}
              animationSpeed={6}
              showBorder={false}
              className="mainsec-headline"
            >
        Start Your <br />
        Journey To Get <br />
        More Jobs
            </GradientText>
    </div>
  );
}
export default HeroText;
 