import '../styles/Card.css'
import { Link } from 'react-router-dom'

// Tarjeta reutilizable para mostrar una habitación
// Props: image, alt, detail, name, description, price
function Card({ image, alt, detail, name, description, price }) {
  return (
    <article className="room-card">
      <div className="room-illustration">
        <img src={image} alt={alt} />
      </div>
      <div className="room-info">
        <p className="room-detail">{detail}</p>
        <h3 className="room-name">{name}</h3>
        <p className="room-desc">{description}</p>
        <p className="room-price">£{price} <span>/ night</span></p>
        <Link to="/contact" className="btn filled">Reserve</Link>
      </div>
    </article>
  )
}

export default Card