import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/scss/all.scss'
import router from './routes/index'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
