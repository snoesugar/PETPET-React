const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid px-0">
        <a className="navbar-brand text-yellow-10 fs-3 p-0" href="#">PETPET</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link px-5 text-primary" aria-current="page" href="#">預約服務</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-5 text-primary" href="#">成為寵物保姆</a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-5 text-primary" href="#">登入</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
