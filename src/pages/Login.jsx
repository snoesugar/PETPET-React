import { Link } from 'react-router-dom'
import { useAuth } from '../contents/AuthContext'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    // 模擬登入資料
    const userData = {
      name: 'Joanne',
      email: 'cycample@gmail.com',
      avatar: '/person-5.png',
    }

    login(userData)
    navigate('/') // 登入成功跳首頁
  }
  return (
    <>
      <Navbar />
      <div className="container-xl mb-12">
        <div className="row justify-content-center mt-md-0 mt-sm-14 pt-md-0 pt-sm-9 pt-10">
          <div className="col-md-5 d-md-block d-none">
            <img className="img-fluid" src={`${import.meta.env.BASE_URL}index-1.png`} alt="index-1" />
          </div>
          <div className="col-md-7 col-sm-8 d-flex flex-column justify-content-center">
            <h3 className="text-primary fw-bold mb-sm-10 mb-6">登入</h3>
            <form className="row">
              <div className="col-12 mb-3">
                <label htmlFor="inputEmail4" className="form-label">電子信箱</label>
                <input type="email" className="form-control py-3 px-4" placeholder="example@gmail.com" id="inputEmail4" />
              </div>
              <div className="col-12 mb-1">
                <label htmlFor="inputPassword4" className="form-label">密碼</label>
                <input type="password" className="form-control py-3 px-4" placeholder="請輸入密碼" id="inputPassword4" />
              </div>
              <a href="#" className="fs-10 text-gray-40 text-decoration-none mb-4">忘記密碼</a>
              <div className="col-12 mb-6">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck" />
                  <label className="form-check-label" htmlFor="gridCheck">
                    記住我的帳號
                  </label>
                </div>
              </div>
              <div className="col-12 mb-8">
                <div className="row">
                  <div className="col-md-6 mb-md-0 mb-3">
                    <button type="button" className="d-flex align-items-center justify-content-center w-100 bg-white border border-1 rounded-1 py-1">
                      <img src={`${import.meta.env.BASE_URL}facebook.svg`} alt="facebook" />
                      <p className="mb-0">Facebook</p>
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button type="button" className="d-flex align-items-center justify-content-center w-100 bg-white border border-1 rounded-1 py-1">
                      <img src={`${import.meta.env.BASE_URL}google.svg`} alt="google" />
                      <p className="mb-0">google</p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 mb-2">
                <Link type="button" to="/user" className="btn btn-orange-20 fs-sm-9 fs-7 py-2 w-md-32 w-100" onClick={handleLogin}>登入</Link>
              </div>
              <a href="#" className="text-orange-20 text-decoration-none">還沒註冊嗎？</a>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
