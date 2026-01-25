import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../components/Components'

function Layout() {
  return (
    <>
      <div className="sticky-top bg-white">
        <div className="container-xl">
          <Navbar />
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
