
import { Link } from 'react-router-dom'

function Header() {
    return (
  <header className="header">
    <div className="nav-container">
      <div className="logo"> SMART <span>HIRE</span></div>
      <nav className="nav-buttons">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/upload" className="nav-button">Upload Resume</Link>
        <Link to="/login" className="nav-button">Log in</Link>
      </nav>
    </div>
  </header>
    );
}
export default Header;