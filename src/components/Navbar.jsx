import '../styles/Navbar.css'
import { Link, NavLink } from 'react-router-dom'

// Barra de navegación reutilizable.
// Prop "variant": "light" (transparente sobre el hero), "solid" (fondo negro) o "dark" (fondo crema)
function Navbar({ variant = 'light' }) {
  return (
    <header>
      <nav className={variant}>
        <Link className="nav-logo" to="/">Maison Lorne</Link>
        <ul className="nav-links">
          <li>
            <NavLink to="/rooms"><i className="bi bi-door-open"></i><span>Rooms</span></NavLink>
          </li>
          <li>
            <NavLink to="/gallery"><i className="bi bi-images"></i><span>Gallery</span></NavLink>
          </li>
          <li>
            <NavLink to="/dining"><i className="bi bi-cup-hot"></i><span>Dining</span></NavLink>
          </li>
          <li>
            <NavLink to="/contact"><i className="bi bi-envelope"></i><span>Reservations</span></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar