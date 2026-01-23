import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid px-0">
        <Link
          className="navbar-brand text-yellow-10 fs-3 p-0"
          to="/"
        >
          PETPET
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link px-5 text-primary" to="/services">
                預約服務
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-5 text-primary" to="/">
                成為寵物保姆
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-5 text-primary" to="/">
                登入
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
