import '../styles/Contact.css'
import { useState } from 'react'
import useForm from '../hooks/useForm'

// Valores iniciales de cada campo del formulario
const initialValues = {
  name: '',
  email: '',
  phone: '',
  reason: '',
  preferredContact: 'email',
  services: [],
  message: '',
}

// Formulario de reservas controlado con useState (a través del hook useForm)
function Contact() {
  const { values, handleChange, reset } = useForm(initialValues)
  // Controla si se muestra el formulario o el mensaje de confirmación
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault() // evita que el navegador recargue la página
    console.log('Formulario enviado:', values)
    setSubmitted(true)
  }

  const handleSendAnother = () => {
    reset()
    setSubmitted(false)
  }

  // Mensaje de confirmación después de enviar
  if (submitted) {
    return (
      <div className="form-success">
        <i className="bi bi-check-circle"></i>
        <h3>Thank you!</h3>
        <p>We've received your enquiry and will get back to you within the hour.</p>
        <button type="button" className="btn" onClick={handleSendAnother}>
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@email.com"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 555 000 0000"
            pattern="[0-9+ ]*"
            value={values.phone}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="reason">Reason for contact</label>
          <select
            id="reason"
            name="reason"
            value={values.reason}
            onChange={handleChange}
          >
            <option value="">Choose an option...</option>
            <option value="room">Room reservation</option>
            <option value="event">Private event</option>
            <option value="restaurant">Table reservation</option>
            <option value="other">Other enquiry</option>
          </select>
        </div>
      </div>

      <div className="choice-group">
        <span className="group-label">How should we contact you?</span>
        <div className="choice-options">
          <label>
            <input
              type="radio"
              name="preferredContact"
              value="email"
              checked={values.preferredContact === 'email'}
              onChange={handleChange}
            />{' '}
            Email
          </label>
          <label>
            <input
              type="radio"
              name="preferredContact"
              value="phone"
              checked={values.preferredContact === 'phone'}
              onChange={handleChange}
            />{' '}
            Phone
          </label>
          <label>
            <input
              type="radio"
              name="preferredContact"
              value="whatsapp"
              checked={values.preferredContact === 'whatsapp'}
              onChange={handleChange}
            />{' '}
            WhatsApp
          </label>
        </div>
      </div>

      <div className="choice-group">
        <span className="group-label">Services of interest</span>
        <div className="choice-options">
          <label>
            <input
              type="checkbox"
              name="services"
              value="spa"
              checked={values.services.includes('spa')}
              onChange={handleChange}
            />{' '}
            Spa
          </label>
          <label>
            <input
              type="checkbox"
              name="services"
              value="dinner"
              checked={values.services.includes('dinner')}
              onChange={handleChange}
            />{' '}
            Tasting dinner
          </label>
          <label>
            <input
              type="checkbox"
              name="services"
              value="transfer"
              checked={values.services.includes('transfer')}
              onChange={handleChange}
            />{' '}
            Airport transfer
          </label>
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Notes or special requests</label>
        <textarea
          id="message"
          name="message"
          placeholder="Dietary requirements, special occasions, preferences..."
          value={values.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn filled">Send enquiry</button>
        <button type="button" className="btn ghost" onClick={reset}>Clear form</button>
      </div>
    </form>
  )
}

export default Contact