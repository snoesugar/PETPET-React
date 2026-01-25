import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../components/Components'

function Layout() {
  return (
    <>
      <div className="container-xl bg-white sticky-top">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
