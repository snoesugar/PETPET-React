import { Outlet } from 'react-router-dom'
import { Navbar, Footer, ScrollToTop } from '../components/Components'

function Layout() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
