import '../styles/Rooms.css'
import Card from '../components/Card'
import room1 from '../assets/room-1-suite.jpg'
import room2 from '../assets/room-2-deluxe.jpg'
import room3 from '../assets/room-3-classic.jpg'

// Datos de las habitaciones: cada objeto se convierte en una Card
const rooms = [
  {
    id: 1,
    image: room1,
    alt: 'The Pentland Suite bedroom',
    detail: 'Suite · 52 m²',
    name: 'The Pentland Suite',
    description:
      'Overlooking the shared garden, original cornices, a freestanding bath, and a writing desk that once belonged to a Scottish advocate.',
    price: 485,
  },
  {
    id: 2,
    image: room2,
    alt: 'The Lorne Room with fireplace',
    detail: 'Deluxe · 34 m²',
    name: 'The Lorne Room',
    description:
      'Anchored by an original Victorian fireplace. King bed, a working hearth, and a wool throw from a mill in the Borders.',
    price: 310,
  },
  {
    id: 3,
    image: room3,
    alt: 'The Garden Room with clawfoot bath',
    detail: 'Classic · 28 m²',
    name: 'The Garden Room',
    description:
      'Ground floor, facing the private garden. Roll-top bath, limestone floor, and double-aspect windows that let in the morning light.',
    price: 260,
  },
]

// Página de habitaciones
function Rooms() {
  return (
    <section id="rooms">
      <div className="rooms-intro">
        <p className="section-label">Accommodation</p>
        <h2 className="section-title">
          Three styles,<br />
          <em>one warm feeling.</em>
        </h2>
        <p>Each room was designed around a single piece of furniture found in Edinburgh's antique markets.</p>
      </div>

      <div className="rooms-grid">
        {rooms.map((room) => (
          <Card
            key={room.id}
            image={room.image}
            alt={room.alt}
            detail={room.detail}
            name={room.name}
            description={room.description}
            price={room.price}
          />
        ))}
      </div>
    </section>
  )
}

export default Rooms