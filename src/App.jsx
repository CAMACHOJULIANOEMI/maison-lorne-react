import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import GalleryPage from './pages/GalleryPage'
import Dining from './pages/Dining'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Routes>
      {/* Todas las páginas comparten el Layout (Navbar + Footer) */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
