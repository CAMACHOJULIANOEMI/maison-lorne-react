import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

// Contenedor principal: Navbar + contenido dinámico + Footer
function Layout() {
  const { pathname } = useLocation()

  // Home: barra transparente sobre la foto. Gallery: barra negra sólida.
  // El resto de las páginas usa la barra con fondo crema.
  let variant = 'dark'
  if (pathname === '/') variant = 'light'
  if (pathname === '/gallery') variant = 'solid'

  return (
    <>
      <ScrollToTop />
      <Navbar variant={variant} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout