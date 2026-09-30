import '../styles/Footer.css'
import { Link } from 'react-router-dom'

// Pie de página reutilizable
function Footer() {
  return (
    <footer>
      <span className="footer-logo">Maison Lorne</span>
      <ul className="footer-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rooms">Rooms</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Reservations</Link></li>
      </ul>
      <p className="footer-copy">© 2026 Maison Lorne. Edinburgh, Scotland.</p>
    </footer>
  )
}

export default Footer