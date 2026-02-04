import { useState, useRef, useEffect } from 'react'
import { ServiceCard } from '../components/Components'
import { Link } from 'react-router-dom'

const Home = () => {
  // 資料
  // 狗品種清單
  const dogList = [
    '米格魯（比格犬）',
    '拉布拉多尋回犬',
    '黃金獵犬',
    '柴犬',
    '法國鬥牛犬',
    '吉娃娃',
    '博美犬',
    '貴賓犬',
    '馬爾濟斯',
    '西施犬',
    '哈士奇',
    '邊境牧羊犬',
    '德國牧羊犬',
    '柯基犬',
    '巴哥犬',
    '杜賓犬',
    '羅威納犬',
    '臘腸犬',
    '大麥町犬',
    '約克夏梗',
    '比熊犬',
    '秋田犬',
    '薩摩耶犬',
    '英國鬥牛犬',
    '聖伯納犬',
  ]
  // 服務項目
  const service = [
    '寄宿',
    '美容',
    '到府保母',
    '遛狗保母',
  ]
  // 地區清單
  const cityList = [
    '臺北市',
    '新北市',
    '桃園市',
    '臺中市',
    '臺南市',
    '高雄市',
    '基隆市',
    '新竹市',
    '嘉義市',
    '新竹縣',
    '苗栗縣',
    '彰化縣',
    '南投縣',
    '雲林縣',
    '嘉義縣',
    '屏東縣',
    '宜蘭縣',
    '花蓮縣',
    '臺東縣',
    '澎湖縣',
    '金門縣',
    '連江縣',
  ]
  // 預約保母
  const babysitters = [
    {
      name: 'Jamie',
      services: ['寄宿', '美容', '寵物行為訓練'],
      rating: 198,
      orders: 580,
      bgImage: `${import.meta.env.BASE_URL}index-2.jpeg`,
      personImage: `${import.meta.env.BASE_URL}person-1.png`,
    },
    {
      name: 'Eric',
      services: ['寄宿', '美容'],
      rating: 76,
      orders: 208,
      bgImage: `${import.meta.env.BASE_URL}index-3.jpeg`,
      personImage: `${import.meta.env.BASE_URL}person-2.png`,
    },
    {
      name: 'Yvonne',
      services: ['美容', '寵物行為訓練'],
      rating: 52,
      orders: 196,
      bgImage: `${import.meta.env.BASE_URL}index-4.jpeg`,
      personImage: `${import.meta.env.BASE_URL}person-3.png`,
    },
  ]

  const [selectedDog, setSelectedDog] = useState('品種')
  const [selectedService, setSelectedService] = useState('服務')
  const [selectedCity, setSelectedCity] = useState('地區')
  const [openDog, setOpenDog] = useState(false)
  const [openService, setOpenService] = useState(false)
  const [openCity, setOpenCity] = useState(false)
  const dogRef = useRef(null)
  const serviceRef = useRef(null)
  const cityRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dogRef.current && !dogRef.current.contains(e.target)) {
        setOpenDog(false)
      }
      if (serviceRef.current && !serviceRef.current.contains(e.target)) {
        setOpenService(false)
      }
      if (cityRef.current && !cityRef.current.contains(e.target)) {
        setOpenCity(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      {/* 首頁 */}
      <div className="container-xl mb-sm-12 mb-10">
        <div className="row">
          <div className="col-md-5 text-center px-sm-3 px-0">
            <img className="img-fluid w-md-210 h-sm-352 w-sm-100 object-fit-cover my-md-0 mt-sm-8 mt-0 mb-sm-6 mb-3" src={`${import.meta.env.BASE_URL}index-1.png`} alt="index-1" />
          </div>
          <div className="col-md-7 d-flex flex-column text-center">
            <div className="flex-grow-1 d-flex flex-column justify-content-center">
              <div className="text-center text-primary">
                <div className="d-inline-block text-sm-start text-center">
                  <h2 className="fs-md-4 fs-sm-5 fw-bold mb-md-4 mb-2">
                    寵物服務，盡在 PETPET
                  </h2>

                  <p className="fs-6 fs-md-7 fw-md-bold fw-medium mb-md-9 mb-5">
                    當您的毛孩有需要時，
                    <br className="d-md-none" />
                    幫您找到最合適的服務者！
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row">
                <div className="dropdown position-relative flex-md-fill" ref={dogRef}>
                  <button
                    type="button"
                    className="btn btn-white border border-md-end-0 dropdown-toggle fs-7 text-gray-40 w-md-100 w-sm-60 w-100 text-start rounded-md-end-0 mb-sm-3 mb-4"
                    onClick={() => setOpenDog(o => !o)}
                  >
                    {selectedDog}
                  </button>
                  {openDog && (
                    <ul className="dropdown-menu show">
                      {dogList.map(dog => (
                        <li key={dog}>
                          <button
                            type="button"
                            className="dropdown-item"
                            onClick={() => {
                              setSelectedDog(dog)
                              setOpenDog(false)
                            }}
                          >
                            {dog}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="dropdown position-relative flex-md-fill" ref={serviceRef}>
                  <button
                    type="button"
                    className="btn btn-white border border-md-end-0 dropdown-toggle fs-7 text-gray-40 w-md-100 w-sm-60 w-100 text-start rounded-md-0 mb-sm-3 mb-4"
                    onClick={() => setOpenService(o => !o)}
                  >
                    {selectedService}
                  </button>
                  {openService && (
                    <ul className="dropdown-menu show">
                      {service.map(item => (
                        <li key={item}>
                          <button
                            type="button"
                            className="dropdown-item"
                            onClick={() => {
                              setSelectedService(item)
                              setOpenService(false)
                            }}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="dropdown position-relative flex-md-fill" ref={cityRef}>
                  <button
                    type="button"
                    className="btn btn-white border border-md-end-0 dropdown-toggle fs-7 text-gray-40 w-md-100 w-sm-60 w-100 text-start rounded-md-0 mb-sm-3 mb-4"
                    onClick={() => setOpenCity(o => !o)}
                  >
                    {selectedCity}
                  </button>
                  {openCity && (
                    <ul className="dropdown-menu show">
                      {cityList.map(city => (
                        <li key={city}>
                          <button
                            type="button"
                            className="dropdown-item"
                            onClick={() => {
                              setSelectedCity(city)
                              setOpenCity(false)
                            }}
                          >
                            {city}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="text-center mb-sm-12 mb-0">
                  <button type="button" className="btn btn-orange-20 btn-fit fs-7 px-6 w-md-100 w-sm-60 w-100 rounded-md-start-0 mb-sm-4 mb-0">搜尋</button>
                </div>
              </div>
            </div>
            <div className="text-end d-sm-block d-none">
              <button type="button" className="btn btn-orange-20 btn-fit rounded-circle p-2">
                <span className="material-symbols-outlined">arrow_drop_down</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 本月熱門保姆 */}
      <div className="container-lg mb-md-12 mb-sm-10 mb-8">
        <h3 className="fw-bold text-primary mb-1">本月熱門保姆</h3>
        <p className="fs-7 text-primary mb-3">即時瞭解您的需求，安排最適合毛孩的寵物保姆！</p>
        <div className="row gy-3">
          {babysitters.map(sitter => (
            <div className="col-sm-4" key={sitter.name}>
              <ServiceCard
                name={sitter.name}
                services={sitter.services}
                rating={sitter.rating}
                orders={sitter.orders}
                bgImage={sitter.bgImage}
                personImage={sitter.personImage}
              />
            </div>
          ))}
        </div>
      </div>
      {/* 線上預約 */}
      <div className="container-lg mb-md-12 mb-sm-10 mb-8">
        <h3 className="fw-bold text-primary mb-1">線上預約</h3>
        <p className="fs-7 text-primary mb-3">即時瞭解您的需求，安排最適合毛孩的寵物保姆！</p>
        {/* sm以上載具 */}
        <div className="d-sm-flex d-none gap-1 h-350">
          <Link to="/petsitting" className="position-relative w-31">
            <img
              src={`${import.meta.env.BASE_URL}index-5.jpeg`}
              alt="index-5"
              className="w-100 h-100 object-fit-cover rounded-1"
            />
            <div className="overlay d-flex justify-content-center align-items-center rounded-1">
              <span className="text-white fs-6 fw-bold">寵物寄宿</span>
            </div>
          </Link>
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
            <a href="#" className="position-relative w-100 h-50">
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
        {/* sm以下載具 */}
        <div className="d-sm-none row gap-1">
          <Link to="/petsitting" className="col-12">
            <div className="position-relative h-132">
              <img
                src={`${import.meta.env.BASE_URL}index-5.jpeg`}
                alt="index-5"
                className="w-100 h-100 object-fit-cover rounded-1"
              />
              <div className="overlay d-flex justify-content-center align-items-center rounded-1">
                <span className="text-white fs-6 fw-bold">寵物寄宿</span>
              </div>
            </div>
          </Link>
          <a href="#" className="col-12">
            <div className="position-relative h-132">
              <img
                src={`${import.meta.env.BASE_URL}index-6.jpeg`}
                alt="index-6"
                className="w-100 h-100 object-fit-cover rounded-1"
              />
              <div className="overlay d-flex justify-content-center align-items-center rounded-1">
                <span className="text-white fs-6 fw-bold">寵物美容</span>
              </div>
            </div>
          </a>
          <a href="#" className="col-12">
            <div className="position-relative h-132">
              <img
                src={`${import.meta.env.BASE_URL}index-7.jpeg`}
                alt="index-7"
                className="w-100 h-100 object-fit-cover rounded-1"
              />
              <div className="overlay d-flex justify-content-center align-items-center rounded-1">
                <span className="text-white fs-6 fw-bold">寵物美容</span>
              </div>
            </div>
          </a>
          <a href="#" className="col-12">
            <div className="position-relative h-132">
              <img
                src={`${import.meta.env.BASE_URL}index-8.jpeg`}
                alt="index-8"
                className="w-100 h-100 object-fit-cover rounded-1"
              />
              <div className="overlay d-flex justify-content-center align-items-center rounded-1">
                <span className="text-white fs-6 fw-bold">遛狗保姆</span>
              </div>
            </div>
          </a>
          <a href="#" className="col-12">
            <div className="position-relative h-132">
              <img
                src={`${import.meta.env.BASE_URL}index-3.jpeg`}
                alt="index-3"
                className="w-100 h-100 object-fit-cover rounded-1"
              />
              <div className="overlay d-flex justify-content-center align-items-center rounded-1">
                <span className="text-white fs-6 fw-bold">寵物美容</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* PETPET目前已有 */}
      <div className=" index-back-img mb-md-12 mb-10 py-sm-12 pt-10 pb-9">
        <div className="container-lg text-white">
          <h2 className="fw-bold text-sm-start text-center mb-sm-13 mb-9">PETPET目前已有</h2>
          <div className="row">
            <div className="col-sm-3 mb-sm-0 mb-12">
              <div className="text-sm-start text-center">
                <div className="d-inline-block">
                  <div className="border-start border-2 border-white ps-3 pb-sm-12 pb-3">
                    <p className="text-start fs-1 fw-bold mb-0">5278</p>
                    <p className="fs-7 fw-medium">人使用 PETPET</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mb-sm-0 mb-12">
              <div className="text-sm-start text-center">
                <div className="d-inline-block">
                  <div className="border-start border-2 border-white ps-3 pb-sm-12 pb-3">
                    <p className="text-start fs-1 fw-bold mb-0">580</p>
                    <p className="fs-7 fw-medium">人成為寵物保母</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 mb-sm-0 mb-12">
              <div className="text-sm-start text-center ms-sm-0 ms-7">
                <div className="d-inline-block">
                  <div className="border-start border-2 border-white ps-3 pb-sm-12 pb-3">
                    <p className="text-start fs-1 fw-bold mb-0">10000+</p>
                    <p className="text-start fs-7 fw-medium">已完成服務</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 預約流程 */}
      <div className="container-lg mb-md-12 mb-sm-10 mb-6">
        <h3 className="fw-bold text-primary mb-1">預約流程</h3>
        <p className="fs-7 text-primary mb-sm-5 mb-3">輕鬆三步驟，立即獲取最佳服務！</p>
        <div className="row">
          <div className="col-sm-4 mb-sm-0 mb-7">
            <p className="fs-7 text-primary mb-sm-4 mb-1">1.查詢想要的服務</p>
            <img src={`${import.meta.env.BASE_URL}index-10.png`} alt="index-10" className="w-100" />
          </div>
          <div className="col-sm-4 mb-sm-0 mb-7">
            <p className="fs-7 text-primary mb-sm-4 mb-1">2.找到合適的保姆</p>
            <img src={`${import.meta.env.BASE_URL}index-11.png`} alt="index-11" className="w-100" />
          </div>
          <div className="col-sm-4 mb-sm-0 mb-7">
            <p className="fs-7 text-primary mb-sm-4 mb-1">3.填寫資料完成預約</p>
            <img src={`${import.meta.env.BASE_URL}index-12.png`} alt="index-12" className="w-100" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
