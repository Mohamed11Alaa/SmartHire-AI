import resumeSrc from './photos/resumepic.png';

function Secheros() {
  return (
    <div>
      <div className="container">
        <div className="resume-box">
          <img
            className="resume-image"
            src={resumeSrc}
            alt="Sample resume preview"
            style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        <div className="ai-tools-section">
          <h1 className="headline-text">
            Start enhancing your resume with AI — see strengths and weaknesses and get professional tips.
          </h1>

          <button
            className="primary-button"
            type="button"
            aria-label="Start reviewing your resume"
          >
            Start Reviewing Your Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default Secheros;