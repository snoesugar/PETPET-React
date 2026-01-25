import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      {/* 有任何我們能幫助您的嗎？ */}
      <div className="bg-yellow-20 position-relative">
        <div className="container-lg text-primary py-7">
          <h2 className="mb-2">有任何我們能幫助您的嗎？</h2>
          <p className="fs-7 fw-medium mb-0">輸入電子信箱</p>
          <p className="fs-7 fw-medium mb-4">將有專業人員在線幫您解決所有問題</p>
          <div className="input-group w-50">
            <input type="text" className="form-control" placeholder="example@gmail.com" aria-label="example@gmail.com" aria-describedby="button-email" />
            <button className="btn btn-orange-20 py-3 px-10" type="button" id="button-email">送出</button>
          </div>
        </div>
      </div>
      <div className="bg-white py-11 position-relative"></div>
      {/* footer */}
      <div className="container-lg mb-6 bg-white position-relative">
        <div className="row">
          <div className="col-3">
            <div className="mb-7">
              <Link to="/" className="text-decoration-none fs-3 text-yellow-10">PETPET</Link>
            </div>
          </div>
          <div className="col-3 d-flex align-items-center">
            <div className="mb-7">
              <span className="text-primary fs-7 fw-bold">寵物服務</span>
            </div>
          </div>
          <div className="col-3 d-flex align-items-center">
            <div className="mb-7">
              <span className="text-primary fs-7 fw-bold">加入我們</span>
            </div>
          </div>
          <div className="col-3 d-flex align-items-center">
            <div className="mb-7">
              <span className="text-primary fs-7 fw-bold">聯繫我們 </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <ul className="list-unstyled">
              <li className="mb-6">
                <a href="#" className="text-decoration-none">關於我們</a>
              </li>
              <li className="mb-6">
                <a href="#" className="text-decoration-none">幫助中心</a>
              </li>
              <li className="mb-6">
                <a href="#" className="text-decoration-none">使用條款</a>
              </li>
              <li className="mb-6">
                <a href="#" className="text-decoration-none">隱私政策</a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="list-unstyled">
              <li className="mb-6">
                <Link to="/petsitting" className="text-decoration-none">寵物寄宿</Link>
              </li>
              <li className="mb-6">
                <a href="#" className="text-decoration-none">寵物到府保姆</a>
              </li>
              <li className="mb-6">
                <a href="#" className="text-decoration-none">寵物美容洗澡</a>
              </li>
              <li className="mb-6">
                <a href="#" className="text-decoration-none">寵物行為訓練</a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="list-unstyled">
              <li className="mb-6">
                <a href="#" className="text-decoration-none">成為寵物保姆</a>
              </li>
              <li className="mb-6">
                <a href="#" className="text-decoration-none">加入寵物計程車</a>
              </li>
              <li className="mb-6">
                <a href="#" className="text-decoration-none">專屬 APP 下載</a>
              </li>
              <li className="mb-6">
                <a href="#" className="text-decoration-none">相關合約條款</a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <p className="text-primary">petpet@petmail.com</p>
          </div>
        </div>
        <div className="d-flex align-items-center text-primary">
          <span className="material-symbols-outlined me-2">call</span>
          <p className="fs-7 mb-0">07-123-4567</p>
          <p className="fs-10  ms-auto mb-0">Copyright © 2020 PetPet. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer
