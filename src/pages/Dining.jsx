import '../styles/Dining.css'
import { Link } from 'react-router-dom'
import diningTable from '../assets/dining-table.jpg'

// Página de restaurante y servicios
function Dining() {
  return (
    <section id="restaurant">
      <div className="restaurant-text">
        <p className="section-label">Dining &amp; Amenities</p>
        <h2 className="section-title">
          One table.<br />
          <em>Twenty covers.</em>
        </h2>
        <p>Dinner is served at 8pm, once. The menu changes daily based on what arrived that morning from the market. No à la carte. No alternatives.</p>
        <ul className="amenity-list">
          <li><i className="bi bi-cup-hot-fill"></i> Breakfast served in your room or the morning room</li>
          <li><i className="bi bi-droplet-fill"></i> Private cellar — wines selected by our sommelier</li>
          <li><i className="bi bi-book-fill"></i> Evening drinks in the library from 6pm</li>
          <li><i className="bi bi-heart-pulse-fill"></i> Spa and steam room on the lower ground floor</li>
          <li><i className="bi bi-flower1"></i> Croquet on the lawn — equipment provided</li>
        </ul>
        <Link to="/contact" className="btn">Book a table</Link>
      </div>

      <div className="restaurant-visual">
        <img src={diningTable} alt="Fine dining table set for dinner" />
      </div>
    </section>
  )
}

export default Dining
