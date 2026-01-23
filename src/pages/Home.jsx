import { useState } from 'react'
import Navbar from '../components/Navbar'
import ServiceCard from '../components/ServiceCard'

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

  return (
    <>
      {/* 首頁 */}
      <div className="container-xl mb-12">
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
              <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <div className="dropdown">
                  <button
                    className="btn btn-white border dropdown-toggle fs-7 text-gray-40 w-210 text-start rounded-end-0"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    {selectedDog}
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {dogList.map(dog => (
                      <li key={dog}>
                        <button
                          type="button"
                          className="dropdown-item"
                          onClick={() => setSelectedDog(dog)}
                        >
                          {dog}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="dropdown">
                  <button className="btn btn-white border dropdown-toggle fs-7 text-gray-40 w-120 text-start rounded-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {selectedService}
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {service.map(item => (
                      <li key={item}>
                        <button
                          type="button"
                          className="dropdown-item"
                          onClick={() => setSelectedService(item)}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="dropdown">
                  <button className="btn btn-white border dropdown-toggle fs-7 text-gray-40 w-210 text-start rounded-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {selectedCity}
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {cityList.map(city => (
                      <li key={city}>
                        <button
                          type="button"
                          className="dropdown-item"
                          onClick={() => setSelectedCity(city)}
                        >
                          {city}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <button type="button" className="btn btn-orange-20 btn-fit fs-7 px-6">搜尋</button>
              </div>
            </div>
            <div className="text-end pe-13">
              <button type="button" className="btn btn-orange-20 btn-fit rounded-circle p-2">
                <span className="material-symbols-outlined">arrow_drop_down</span>
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
          {babysitters.map(sitter => (
            <div className="col-4" key={sitter.name}>
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
    </>
  )
}

export default Home
