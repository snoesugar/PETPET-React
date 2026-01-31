import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { useAuth } from '../contents/AuthContext'

const Navbar = () => {
  const { isAuth, user, logout } = useAuth()
  const [openUser, setOpenUser] = useState(false)
  const [openNav, setOpenNav] = useState(false)
  const userRef = useRef(null)

  // 點擊外部關閉會員下拉
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setOpenUser(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="sticky-top bg-white">
      <div className="container-lg">
        <nav className="navbar navbar-expand-sm">
          <div className="container-fluid px-0">
            <Link className="navbar-brand text-yellow-10 fs-3 p-0" to="/">
              PETPET
            </Link>
            {/* 漢堡按鈕 */}
            <button
              className="navbar-toggler"
              type="button"
              aria-expanded={openNav}
              onClick={() => setOpenNav(o => !o)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* 選單 */}
            <div className={`collapse navbar-collapse ${openNav ? 'show' : ''}`}>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link px-5 text-primary" to="/services">
                    預約服務
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-5 text-primary" to="/">
                    成為寵物保母
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
                    <li className="nav-item dropdown" ref={userRef}>
                      <button
                        className="btn nav-link d-flex align-items-center text-primary"
                        type="button"
                        onClick={() => setOpenUser(o => !o)}
                      >
                        Hi,
                        {user.name}
                        <span className="material-symbols-outlined ms-1">
                          arrow_drop_down
                        </span>
                      </button>
                      {openUser && (
                        <ul className="dropdown-menu show">
                          <li>
                            <Link className="dropdown-item text-primary" to="/user">
                              會員資料
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item text-primary" to="#">
                              預約查詢
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item text-primary" to="#">
                              歷史預約
                            </Link>
                          </li>
                          <hr className="my-1" />
                          <li>
                            <Link className="dropdown-item text-orange-20" to="#">
                              切換保母帳號
                            </Link>
                          </li>
                          <li>
                            <button
                              className="dropdown-item text-danger"
                              onClick={() => {
                                logout()
                                setOpenUser(false)
                              }}
                            >
                              登出
                            </button>
                          </li>
                        </ul>
                      )}
                    </li>
                  )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
