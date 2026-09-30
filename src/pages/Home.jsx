import '../styles/Home.css'
import { Link } from 'react-router-dom'
import heroFacade from '../assets/hero-facade.jpg'

// Página de inicio: sección hero
function Home() {
  return (
    <section id="hero">
      <div className="hero-text">
        <p className="hero-eyebrow">Edinburgh · Est. 1924</p>
        <h1 className="hero-title">
          Where silence<br />
          <em>is the true luxury.</em>
        </h1>
        <p className="hero-sub">
          A boutique house hotel tucked at the edge of the New Town.
          Sixteen rooms. One dining room. No itinerary required.
        </p>
        <Link to="/rooms" className="btn">Explore the rooms</Link>
      </div>

      <div className="hero-visual">
        <img src={heroFacade} alt="Maison Lorne hotel building facade at night" />
      </div>

      <Link to="/rooms" className="hero-scroll-hint">Discover the hotel</Link>
    </section>
  )
}

export default Home