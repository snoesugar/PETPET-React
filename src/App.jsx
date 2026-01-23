import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PetSitting from './pages/PetSitting'
import Services from './pages/Services'

function App() {
  return (
    <>
      <div className="container-xl">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/petSitting" element={<PetSitting />}></Route>
        <Route path="/Services" element={<Services />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
