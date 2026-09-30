import '../styles/Gallery.css'

// Galería reutilizable: recibe un array de imágenes por props
// Cada imagen: { src, alt }
function Gallery({ images }) {
  return (
    <div className="gallery-grid">
      {images.map((image) => (
        <div className="gallery-item" key={image.src}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  )
}

export default Gallery