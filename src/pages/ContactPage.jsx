import '../styles/ContactPage.css'
import Contact from '../components/Contact'

// Página de reservas: datos de contacto + formulario
function ContactPage() {
  return (
    <section id="contact">
      <div className="contact-text">
        <p className="section-label">Reservations</p>
        <h2 className="section-title">
          Stay with us.<br />
          <em>We'll take care of the rest.</em>
        </h2>
        <p>Reservations are personal. We don't use an automated system — a member of our team will confirm your stay within the hour.</p>
        <ul className="contact-details">
          <li><i className="bi bi-geo-alt-fill"></i><span><strong>Address</strong>14 Moray Place, Edinburgh EH3 6DT</span></li>
          <li><i className="bi bi-telephone-fill"></i><span><strong>Phone</strong>+44 131 226 0001</span></li>
          <li><i className="bi bi-envelope-fill"></i><span><strong>Email</strong>stay@maisonlorne.co.uk</span></li>
          <li><i className="bi bi-clock-fill"></i><span><strong>Check-in / Check-out</strong>3:00 pm — 11:00 am</span></li>
        </ul>
      </div>

      <div className="contact-form-wrapper">
        <Contact />
      </div>
    </section>
  )
}

export default ContactPage
