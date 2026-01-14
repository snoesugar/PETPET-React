<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=arrow_drop_down" />

function App() {

  return (
    <>
      {/* 首頁 */}
      <div className="container-xl mb-12">
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
        <div className="row">
          <div className="col-5">
            <img className="img-fluid" src={`${import.meta.env.BASE_URL}index-1.png`} alt="index-1" />
          </div>
          <div className="col-7 d-flex flex-column">
            <div className="flex-grow-1 d-flex flex-column justify-content-center">
              <div className="text-primary">
                <h2 className="mb-4 fw-bold">寵物服務，盡在 PETPET</h2>
                <p className="fs-6 fw-bold">當您的毛孩有需要時，幫您找到最合適的服務者！</p>
              </div>
              <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <div class="dropdown">
                  <button class="btn btn-white border dropdown-toggle text-gray-40 w-120 text-start rounded-end-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    品種
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
                <div class="dropdown">
                  <button class="btn btn-white border dropdown-toggle text-gray-40 w-210 text-start rounded-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    服務
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
                <div class="dropdown">
                  <button class="btn btn-white border dropdown-toggle text-gray-40 w-210 text-start rounded-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    地區
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </div>
                <button type="button" class="btn btn-orange-20 btn-fit px-6">搜尋</button>
              </div>
            </div>
            <div className="text-end pe-13">
              <button type="button" className="btn btn-orange-20 btn-fit rounded-circle p-2">
                <span class="material-symbols-outlined">arrow_drop_down</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 本月熱門保姆 */}
      <div className="container-lg mb-12">
        <h3 className="fw-bold text-primary mb-1">本月熱門保姆</h3>
        <p className="fs-7 text-primary mb-3">即時瞭解您的需求，安排最適合毛孩的寵物保姆！</p>
        <div className="row">
          <div className="col-4">
            <div className="card shadow">
              <img src={`${import.meta.env.BASE_URL}index-2.jpeg`} className="object-fit-cover h-120 p-1 position-relative" alt="index-2" />
              <img src={`${import.meta.env.BASE_URL}person-1.png`} className="card-person-img position-absolute start-50 translate-middle" alt="person-1" />
              <div className="card-body pb-6 pt-9 text-center text-primary">
                <h5 className="card-title fs-7 mb-1">Jamie</h5>
                <p className="card-text mb-3">寄宿、美容、寵物行為訓練</p>
                <a href="#" className="btn btn-orange-20 py-3 px-10 mb-6">預約</a>
                <div className="row d-flex justify-content-center">
                  <div className="col-5">
                    <p className="mb-3">獲得評價</p>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="fs-5 fw-bold me-1">198</span>
                      <span className="fs-10">則</span>
                    </div>
                  </div>
                  <div className="col-5">
                    <p className="mb-3">已完成訂單</p>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="fs-5 fw-bold me-1">580</span>
                      <span className="fs-10">件</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card shadow">
              <img src={`${import.meta.env.BASE_URL}index-3.jpeg`} className="object-fit-cover h-120 p-1 position-relative" alt="index-3" />
              <img src={`${import.meta.env.BASE_URL}person-2.png`} className="card-person-img position-absolute start-50 translate-middle" alt="person-1" />
              <div className="card-body pb-6 pt-9 text-center text-primary">
                <h5 className="card-title fs-7 mb-1">Eric</h5>
                <p className="card-text mb-3">寄宿、美容</p>
                <a href="#" className="btn btn-orange-20 py-3 px-10 mb-6">預約</a>
                <div className="row d-flex justify-content-center">
                  <div className="col-5">
                    <p className="mb-3">獲得評價</p>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="fs-5 fw-bold me-1">76</span>
                      <span className="fs-10">則</span>
                    </div>
                  </div>
                  <div className="col-5">
                    <p className="mb-3">已完成訂單</p>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="fs-5 fw-bold me-1">208</span>
                      <span className="fs-10">件</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card shadow">
              <img src={`${import.meta.env.BASE_URL}index-4.jpeg`} className="object-fit-cover h-120 p-1 position-relative" alt="index-4" />
              <img src={`${import.meta.env.BASE_URL}person-3.png`} className="card-person-img position-absolute start-50 translate-middle" alt="person-1" />
              <div className="card-body pb-6 pt-9 text-center text-primary">
                <h5 className="card-title fs-7 mb-1">Yvonne</h5>
                <p className="card-text mb-3">美容、寵物行為訓練</p>
                <a href="#" className="btn btn-orange-20 py-3 px-10 mb-6">預約</a>
                <div className="row d-flex justify-content-center">
                  <div className="col-5">
                    <p className="mb-3">獲得評價</p>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="fs-5 fw-bold me-1">52</span>
                      <span className="fs-10">則</span>
                    </div>
                  </div>
                  <div className="col-5">
                    <p className="mb-3">已完成訂單</p>
                    <div className="d-flex justify-content-center align-items-center">
                      <span className="fs-5 fw-bold me-1">196</span>
                      <span className="fs-10">件</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 線上預約 */}
      <div className="container-lg mb-12">
        <h3 className="fw-bold text-primary mb-1">線上預約</h3>
        <p className="fs-7 text-primary mb-3">即時瞭解您的需求，安排最適合毛孩的寵物保姆！</p>
        <div className="d-flex gap-1 h-350">
          <a href="#" className="position-relative w-31">
            <img
              src={`${import.meta.env.BASE_URL}index-5.jpeg`}
              alt="index-5"
              className="w-100 h-100 object-fit-cover rounded-1"
            />
            <div className="overlay d-flex justify-content-center align-items-center rounded-1">
              <span className="text-white fs-6 fw-bold">寵物寄宿</span>
            </div>
          </a>
          <a href="#" className="position-relative w-27">
            <img
              src={`${import.meta.env.BASE_URL}index-6.jpeg`}
              alt="index-6"
              className="w-100 h-100 object-fit-cover rounded-1"
            />
            <div className="overlay d-flex justify-content-center align-items-center rounded-1">
              <span className="text-white fs-6 fw-bold">寵物美容</span>
            </div>
          </a>
          <div className="d-flex flex-column gap-1 w-24">
            <a href="#" className="position-relative w-100 h-49">
              <img
                src={`${import.meta.env.BASE_URL}index-7.jpeg`}
                alt="index-7"
                className="w-100 h-100 object-fit-cover rounded-1"
              />
              <div className="overlay d-flex justify-content-center align-items-center rounded-1">
                <span className="text-white fs-6 fw-bold">寵物美容</span>
              </div>
            </a>
            <a href="#" className="position-relative w-100 h-49">
              <img
                src={`${import.meta.env.BASE_URL}index-8.jpeg`}
                alt="index-8"
                className="w-100 h-100 object-fit-cover rounded-1"
              />
              <div className="overlay d-flex justify-content-center align-items-center rounded-1">
                <span className="text-white fs-6 fw-bold">遛狗保姆</span>
              </div>
            </a>
          </div>
          <a href="#" className="position-relative w-16">
            <img
              src={`${import.meta.env.BASE_URL}index-3.jpeg`}
              alt="index-3"
              className="w-100 h-100 object-fit-cover rounded-1"
            />
            <div className="overlay d-flex justify-content-center align-items-center rounded-1">
              <span className="text-white fs-6 fw-bold">寵物美容</span>
            </div>
          </a>
        </div>
      </div>
      {/* PETPET目前已有 */}
      <div className="mb-12 index-back-img py-12">
        <div className="container-lg text-white">
          <h2 className="fw-bold mb-13">PETPET目前已有</h2>
          <div className="row">
            <div className="col-3 border-start pb-12">
              <p className="fs-1 fw-bold mb-0">5278</p>
              <p className="fs-7 fw-medium">人使用 PETPET</p>
            </div>
            <div className="col-3 border-start pb-12">
              <p className="fs-1 fw-bold mb-0">580</p>
              <p className="fs-7 fw-medium">人成為寵物保母</p>
            </div>
            <div className="col-3 border-start pb-12">
              <p className="fs-1 fw-bold mb-0">10000+</p>
              <p className="fs-7 fw-medium">已完成服務</p>
            </div>
          </div>
        </div>
      </div>
      {/* 預約流程 */}
      <div className="container-lg mb-12">
        <h3 className="fw-bold text-primary mb-1">預約流程</h3>
        <p className="fs-7 text-primary mb-5">輕鬆三步驟，立即獲取最佳服務！</p>
        <div className="row">
          <div className="col-4">
            <p className="fs-7 text-primary">1.查詢想要的服務</p>
            <img src={`${import.meta.env.BASE_URL}index-10.png`} alt="index-10" className="w-100" />
          </div>
          <div className="col-4">
            <p className="fs-7 text-primary">2.找到合適的保姆</p>
            <img src={`${import.meta.env.BASE_URL}index-11.png`} alt="index-11" className="w-100" />
          </div>
          <div className="col-4">
            <p className="fs-7 text-primary">3.填寫資料完成預約</p>
            <img src={`${import.meta.env.BASE_URL}index-12.png`} alt="index-12" className="w-100" />
          </div>
        </div>
      </div>
      {/* 有任何我們能幫助您的嗎？ */}
      <div className="bg-yellow-20 mb-11">
        <div className="container-lg text-primary py-7">
          <h2 className="mb-2">有任何我們能幫助您的嗎？</h2>
          <p className="fs-7 fw-medium mb-0">輸入電子信箱</p>
          <p className="fs-7 fw-medium mb-4">將有專業人員在線幫您解決所有問題</p>
          <div class="input-group w-50">
            <input type="text" class="form-control" placeholder="example@gmail.com" aria-label="example@gmail.com" aria-describedby="button-email" />
            <button class="btn btn-orange-20 py-3 px-10" type="button" id="button-email">送出</button>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="container-lg mb-6">
        <div className="row">
          <div className="col-3">
            <div className="mb-7">
              <a href="#" className="text-decoration-none fs-3 text-yellow-10">PETPET</a>
            </div>
          </div>
          <div className="col-3 d-flex align-items-center">
            <div className="mb-7">
              <a href="#" className="text-decoration-none fs-7 fw-bold">寵物服務</a>
            </div>
          </div>
          <div className="col-3 d-flex align-items-center">
            <div className="mb-7">
              <a href="#" className="text-decoration-none fs-7 fw-bold">加入我們</a>
            </div>
          </div>
          <div className="col-3 d-flex align-items-center">
            <div className="mb-7">
              <a href="#" className="text-decoration-none fs-7 fw-bold">聯繫我們 </a>
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
                <a href="#" className="text-decoration-none">寵物寄宿</a>
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

export default App
