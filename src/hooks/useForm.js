import { useState } from 'react'

// Custom hook para manejar formularios controlados.
// Recibe los valores iniciales y devuelve los valores, el handler de cambios y el reset.
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues)

  // Se ejecuta cada vez que el usuario cambia un input, select o textarea
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    if (type === 'checkbox') {
      console.log(`Checkbox "${value}" (${name}):`, checked)
      // Los checkboxes se guardan en un array: se agrega o se saca el valor
      setValues((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }))
    } else {
      console.log(`Input "${name}":`, value)
      setValues((prev) => ({ ...prev, [name]: value }))
    }
  }

  // Vuelve el formulario a sus valores iniciales
  const reset = () => {
    console.log('Formulario reseteado')
    setValues(initialValues)
  }

  return { values, handleChange, reset }
}

export default useForm