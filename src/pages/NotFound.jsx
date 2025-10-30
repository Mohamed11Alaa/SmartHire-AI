import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="nav-button">
        Return to Home
      </Link>
    </div>
  )
}