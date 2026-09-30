# Maison Lorne — Boutique Hotel

Trabajo Práctico Final (PF.A) — Módulo 3: Desarrollo con React.js y Ecosistema Moderno
Curso Inicial de Desarrollo Front-End — UTN BA

Migración del sitio Maison Lorne (HTML/CSS) a una aplicación React con componentes.

## Tecnologías

- React 19 + Vite
- React Router (v7)
- Bootstrap 5 y Bootstrap Icons
- CSS propio (un archivo por componente y por página)

## Cómo ejecutar el proyecto

Requisitos: tener instalado [Node.js](https://nodejs.org/) (versión 20.19 o superior, o 22.12 o superior).

```bash
# 1. Clonar el repositorio
git clone https://github.com/CAMACHOJULIANOEMI/maison-lorne-react.git

# 2. Entrar a la carpeta del proyecto
cd maison-lorne-react

# 3. Instalar las dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

Después abrí en el navegador la dirección que muestra la terminal (normalmente `http://localhost:5173/`).

## Estructura del proyecto

```
src/
├── components/   → Navbar, Footer, Layout, Card, Gallery, Contact, ScrollToTop
├── pages/        → Home, Rooms, GalleryPage, Dining, ContactPage
├── styles/       → Un CSS por componente/página + global.css
├── assets/       → Imágenes
└── hooks/        → useForm (custom hook para el formulario)
```

## Rutas

| Ruta | Página |
|------|--------|
| `/` | Home |
| `/rooms` | Habitaciones |
| `/gallery` | Galería |
| `/dining` | Restaurante y servicios |
| `/contact` | Reservas (formulario) |

## Funcionalidades

- Navegación entre páginas con React Router.
- `Layout` compartido con `Navbar` y `Footer`, y contenido dinámico con `<Outlet />`.
- `ScrollToTop`: lleva la página al inicio en cada cambio de ruta.
- Componente `Card` reutilizable para las habitaciones.
- Componente `Gallery` que recibe las imágenes por props.
- Formulario de reservas controlado con `useState` (a través del custom hook `useForm`):
  - Captura de los datos ingresados.
  - Envío con `event.preventDefault()`.
  - Reseteo del formulario.
  - Los eventos de los inputs y el envío se muestran en la consola del navegador.
- Diseño responsive.