function UnloggedSection() {
  return (
<div className="container">


    <div className="Header">
      <h1>Track Your Applications & Resume Ratings</h1>
      <p>Review your submissions and check AI-powered feedback.</p>
    </div>
    <div className="info">
      <h1>You need to be logged in to see your latest Analyzed resumes</h1>
    </div>
    <div className="signinbuttons">
        <button className="primary-button">Log In</button>
        <button className="primary-button">Sign Up</button>

    </div>
</div>

  );
}


export default UnloggedSection;