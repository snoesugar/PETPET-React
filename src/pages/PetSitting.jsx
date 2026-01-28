import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ServiceCard } from '../components/Components'
// 動物種類
const animalList = [
  '貓',
  '狗',
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
// 預約住宿
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
// 預約清單
const reservationList = [
  {
    title: '寵屋屋',
    gImage: `${import.meta.env.BASE_URL}homestay-2.jpeg`,
    service: '寄宿、美容洗澡、到府保姆',
  },
  {
    title: '毛孩好家',
    gImage: `${import.meta.env.BASE_URL}homestay-3.jpeg`,
    service: '寄宿、美容洗澡、到府保姆',
  },
  {
    title: '妖貓X僕SS',
    gImage: `${import.meta.env.BASE_URL}homestay-4.jpeg`,
    service: '寄宿、美容洗澡',
  },
  {
    title: '貓是主我是僕',
    gImage: `${import.meta.env.BASE_URL}homestay-5.jpeg`,
    service: '寄宿、美容洗澡、到府保姆',
  },
  {
    title: '汪汪隊',
    gImage: `${import.meta.env.BASE_URL}homestay-6.jpeg`,
    service: '寄宿、到府保姆、寵物行為訓練',
  },
  {
    title: '卯咪',
    gImage: `${import.meta.env.BASE_URL}homestay-7.jpeg`,
    service: '寄宿、寵物行為訓練',
  },
  {
    title: '貓狗大戰',
    gImage: `${import.meta.env.BASE_URL}index-2.jpeg`,
    service: '寄宿、美容洗澡、到府保姆',
  },
  {
    title: '萌寵底家',
    gImage: `${import.meta.env.BASE_URL}homestay-8.jpeg`,
    service: '寄宿、到府保姆',
  },
]

const PetSitting = () => {
  const [selectedAnimal, setSelectedAnimal] = useState('貓')
  const [selectedCity, setSelectedCity] = useState('地區')
  const [openAnimal, setOpenAnimal] = useState(false)
  const [openCity, setOpenCity] = useState(false)

  const today = new Date()
  const [startDate, setStartDate] = useState(today)
  const [endDate, setEndDate] = useState(today)

  return (
    <>
      {/* 寵物寄宿 */}
      <div className="container-lg my-10">
        <div className="row">
          <div className="col-4 my-auto">
            <h2 className="mb-4 text-primary">寵物寄宿</h2>
            <p className="fs-6 fw-bold text-primary">給您的毛孩最舒適的環境</p>
          </div>
          <div className="col-8">
            <img src={`${import.meta.env.BASE_URL}homestay-1.png`} alt="homestay-1" />
          </div>
        </div>
      </div>
      <div className="bg-yellow-20 mb-12">
        <div className="container-lg py-3 d-flex">
          <div className="dropdown position-relative me-2">
            <button
              type="button"
              className="btn btn-white border dropdown-toggle text-gray-40 text-start"
              onClick={() => setOpenAnimal(o => !o)}
            >
              {selectedAnimal}
            </button>
            {openAnimal && (
              <ul className="dropdown-menu show">
                {animalList.map(animal => (
                  <li key={animal}>
                    <button
                      type="button"
                      className="dropdown-item"
                      onClick={() => {
                        setSelectedAnimal(animal)
                        setOpenAnimal(false)
                      }}
                    >
                      {animal}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="dropdown position-relative me-2">
            <button
              type="button"
              className="btn btn-white border dropdown-toggle text-gray-40 w-160 text-start"
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
          <div className="d-flex gap-2">
            {/* 起始日期 */}
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date)
                if (date > endDate) setEndDate(date)
              }}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={today} // 今天以前不能選
              highlightDates={[today]} // 高亮今天
              customInput={(
                <button className="btn btn-white border dropdown-toggle w-160 text-start text-gray-40">
                  {startDate ? `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}` : '起始日期'}
                </button>
              )}
            />
            <span className="d-flex align-items-center">至</span>
            {/* 結束日期 */}
            <DatePicker
              selected={endDate}
              onChange={date => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              highlightDates={[today]}
              customInput={(
                <button className="btn btn-white border dropdown-toggle w-160 text-start text-gray-40">
                  {endDate ? `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}` : '結束日期'}
                </button>
              )}
            />
          </div>
        </div>
      </div>
      {/* 本月熱門住宿 */}
      <div className="container-lg mb-12">
        <h3 className="fw-bold text-primary mb-3">本月熱門寄宿</h3>
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

      <div className="container-lg">
        <div className="row gy-6 mb-5">
          {
            reservationList.map((item) => {
              return (
                <div className="col-3" key={item.title}>
                  <div className="card shadow">
                    <img src={item.gImage} className="card-img-top h-128 object-fit-cover" alt={item.title} />
                    <div className="card-body bg-gray-0 pt-2 pb-8">
                      <h5 className="fs-9 text-primary">{item.title}</h5>
                      <div className="stars">
                        <span className="star"></span>
                        <span className="star"></span>
                        <span className="star"></span>
                        <span className="star"></span>
                        <span className="star"></span>
                      </div>
                      <p className="fs-10 text-primary pb-0">{item.service}</p>
                    </div>
                    <div className="d-flex">
                      <button type="button" className="bg-white text-primary border-0 py-3 w-50">聯繫</button>
                      <button type="button" className="bg-white text-orange-20 border-0 py-3 w-50">預約</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        {/* 分頁 */}
        <nav aria-label="Page navigation example">
          <ul className="pagination mb-11">
            <li className="page-item ms-auto">
              <a className="page-link py-2 px-4" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link py-2 px-4" href="#">1</a></li>
            <li className="page-item"><a className="page-link py-2 px-4" href="#">2</a></li>
            <li className="page-item"><a className="page-link py-2 px-4" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link py-2 px-4" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

    </>
  )
}

export default PetSitting
