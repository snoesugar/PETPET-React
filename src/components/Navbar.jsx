import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../contents/AuthContext'

const Navbar = () => {
  const [openUser, setOpenUser] = useState(false)
  const { isAuth, user, logout } = useAuth()
  return (
    <div className="sticky-top bg-white">
      <div className="container-lg">
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
                {!isAuth
                  ? (
                    <li className="nav-item">
                      <Link className="nav-link px-5 text-primary" to="/login">
                        登入
                      </Link>
                    </li>
                  )
                  : (
                    <li className="nav-item dropdown">
                      <button
                        className="btn nav-link d-flex text-primary"
                        type="button"
                        onClick={() => setOpenUser(o => !o)}
                      >
                        Hi,
                        {user.name}
                        <span class="material-symbols-outlined">
                          arrow_drop_down
                        </span>
                      </button>
                      {openUser
                        && (
                          <ul className={`dropdown-menu ${openUser ? 'show' : ''}`}>
                            <li>
                              <Link className="dropdown-item text-primary" to="/user">
                                會員資料
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item text-primary">
                                預約查詢
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item text-primary">
                                歷史預約
                              </Link>
                            </li>
                            <hr className="my-1" />
                            <li>
                              <Link className="dropdown-item text-orange-20">
                                切換保母帳號
                              </Link>
                            </li>
                            <li>
                              <button
                                className="dropdown-item text-danger"
                                onClick={() => {
                                  logout() // 登出
                                  setOpenUser(false) // 關閉下拉
                                }}
                              >
                                登出
                              </button>
                            </li>
                          </ul>
                        )}
                    </li>
                  ) }
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
