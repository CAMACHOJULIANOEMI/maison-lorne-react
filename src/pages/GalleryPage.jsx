import '../styles/GalleryPage.css'
import Gallery from '../components/Gallery'
import img1 from '../assets/gallery-01-library.jpg'
import img2 from '../assets/gallery-02-garden.jpg'
import img3 from '../assets/gallery-03-spa.jpg'
import img4 from '../assets/gallery-04-breakfast-room.jpg'
import img5 from '../assets/gallery-05-staircase.jpg'
import img6 from '../assets/gallery-06-courtyard.jpg'
import img7 from '../assets/gallery-07-bar.jpg'
import img8 from '../assets/gallery-08-rooftop.jpg'

// Imágenes que se pasan al componente Gallery
const images = [
  { src: img1, alt: 'Hotel library with floor-to-ceiling shelves' },
  { src: img2, alt: 'Private garden with shrubs and a central fountain' },
  { src: img3, alt: 'Spa and steam room on the lower ground floor' },
  { src: img4, alt: 'Breakfast room with a round table' },
  { src: img5, alt: 'Main staircase in a classic style' },
  { src: img6, alt: 'Interior courtyard with a central fountain' },
  { src: img7, alt: 'Bar counter with hanging glasses' },
  { src: img8, alt: 'Rooftop terrace at sunset' },
]

// Página de galería
function GalleryPage() {
  return (
    <section id="gallery">
      <div className="gallery-intro">
        <p className="section-label">Gallery</p>
        <h2 className="section-title">
          A tour<br />
          <em>of the house.</em>
        </h2>
        <p>Every corner of Maison Lorne has its own character. A glimpse at the spaces that make your stay something different.</p>
      </div>

      <Gallery images={images} />
    </section>
  )
}

export default GalleryPage
