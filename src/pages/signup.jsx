
import HeroText from "../sign-up/HeroText";
import FormCard from "../sign-up/FormCard";


export default function SignupPage() {
  return (
    <div className="app-canvas">
      <div className="canvas-frame">

        <div className="signup-container">
            <FormCard />
          <HeroText />
        </div>
        
      </div>
    </div>
  );
}
