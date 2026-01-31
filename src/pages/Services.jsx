import { useEffect, useRef, useState, useMemo } from 'react'
import { Modal } from 'bootstrap'
import DatePicker from 'react-datepicker'
import { Link } from 'react-router-dom'

// 預覽圖
const images = [
  `${import.meta.env.BASE_URL}homestay-3.jpeg`,
  `${import.meta.env.BASE_URL}index-5.jpeg`,
  `${import.meta.env.BASE_URL}detail-1.jpeg`,
  `${import.meta.env.BASE_URL}detail2.jpeg`,
]
// 評論
const commentList = [
  {
    user: '葉子',
    personImage: `${import.meta.env.BASE_URL}person-4.png`,
    date: 'Oct 17 2020',
    content: '服務很秋！',
  },
  {
    user: 'Joanne',
    personImage: `${import.meta.env.BASE_URL}person-5.png`,
    date: 'Oct 17 2020',
    content: '貓完全不想回家了。',
  },
  {
    user: 'Ray',
    personImage: `${import.meta.env.BASE_URL}person-6.png`,
    date: 'Oct 17 2020',
    content: '超喜歡超棒超讚的...',
  },
  {
    user: '穎旻',
    personImage: `${import.meta.env.BASE_URL}person-7.png`,
    date: 'Oct 17 2020',
    content: '下次還會麻煩您～',
  },
  {
    user: '俊儀',
    personImage: `${import.meta.env.BASE_URL}person-8.png`,
    date: 'Oct 17 2020',
    content: '讚的！',
  },
  {
    user: '子琪',
    personImage: `${import.meta.env.BASE_URL}person-9.png`,
    date: 'Oct 17 2020',
    content: '服務很棒耶哈哈哈！',
  },
]
// 高雄寄宿寵物保姆
const reservationList = [
  {
    title: '寵屋屋',
    gImage: `${import.meta.env.BASE_URL}homestay-2.jpeg`,
    service: '寄宿、美容洗澡、到府保姆',
  },
  {
    title: '汪汪隊',
    gImage: `${import.meta.env.BASE_URL}homestay-6.jpeg`,
    service: '寄宿、到府保姆、寵物行為訓練',
  },
  {
    title: '萌寵底家',
    gImage: `${import.meta.env.BASE_URL}homestay-8.jpeg`,
    service: '寄宿、到府保姆',
  },
  {
    title: '妖貓X僕SS',
    gImage: `${import.meta.env.BASE_URL}homestay-4.jpeg`,
    service: '寄宿、美容洗澡',
  },
  {
    title: '卯咪',
    gImage: `${import.meta.env.BASE_URL}homestay-7.jpeg`,
    service: '寄宿、寵物行為訓練',
  },
  {
    title: '貓是主我是僕',
    gImage: `${import.meta.env.BASE_URL}homestay-5.jpeg`,
    service: '寄宿',
  },
]
// 服務選項
const serviceList = [
  {
    title: '寄宿',
    icon: 'house',
  },
  {
    title: '美容',
    icon: 'wash',
  },
  {
    title: '到府保姆',
    icon: 'roofing',
  },
  {
    title: '遛狗保姆',
    icon: 'directions_walk',
  },
]
const animalNum = [1, 2, 3, 4, 5, 6]
const animalList = [
  '貓',
  '狗',
]

const Services = () => {
  const [mainImage, setMainImage] = useState(images[0])
  const [service, setService] = useState(serviceList[0].title)
  const today = new Date()
  const [startDate, setStartDate] = useState(today)
  const [endDate, setEndDate] = useState(today)
  const [animalCount, setAnimalCount] = useState(1)
  const [selectedAnimal, setSelectedAnimal] = useState('貓')
  const [selectedAge, setSelectedAge] = useState(1)
  const [openNum, setOpenNum] = useState(false)
  const [openAnimal, setOpenAnimal] = useState(false)
  const [openAge, setOpenAge] = useState(false)
  const [errors, setErrors] = useState({})
  const [validated, setValidated] = useState(false)
  // Step3：付款資料
  const [cardErrors, setCardErrors] = useState({})
  const [cardValidated, setCardValidated] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const serviceRef = useRef(null)
  const serviceStep2Ref = useRef(null)
  const serviceStep3Ref = useRef(null)
  const serviceStep4Ref = useRef(null)
  const modalInstance = useRef(null)
  const modalStep2Instance = useRef(null)
  const modalStep3Instance = useRef(null)
  const modalStep4Instance = useRef(null)

  // 填預約資料
  const [formData, setFormData] = useState({
    petName: '',
    masterName: '',
    email: '',
    tel: '',
  })
  // 填信用卡資料
  const [card, setCard] = useState({
    account: '',
    date: '',
    password: '',
  })
  // 寵物表單驗證
  const validate = () => {
    const newErrors = {}

    if (!formData.petName.trim()) {
      newErrors.petName = '請輸入毛孩姓名'
    }

    if (!formData.masterName.trim()) {
      newErrors.masterName = '請輸入飼主姓名'
    }

    if (!formData.email) {
      newErrors.email = '請輸入 Email'
    }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email 格式不正確'
    }

    if (!formData.tel) {
      newErrors.tel = '請輸入聯絡電話'
    }
    else if (!/^09\d{2}-?\d{3}-?\d{3}$/.test(formData.tel)) {
      newErrors.tel = '電話格式不正確'
    }

    return newErrors
  }
  // 信用卡表單驗證
  const validateCard = (card) => {
    const newErrors = {}

    // 信用卡帳號驗證
    if (!card.account.trim()) {
      newErrors.account = '請輸入信用卡號'
    }
    else if (!/^\d{4}-?\d{4}-?\d{4}-?\d{4}$/.test(card.account)) {
      newErrors.account = '信用卡號格式不正確'
    }

    // 有效日期驗證 MM/YY
    if (!card.date.trim()) {
      newErrors.date = '請輸入有效日期'
    }
    else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(card.date)) {
      newErrors.date = '有效日期格式不正確'
    }
    else {
      // 過期檢查
      const [month, year] = card.date.split('/').map(Number)
      const currentDate = new Date()
      const currentYear = currentDate.getFullYear() % 100 // 取後兩位
      const currentMonth = currentDate.getMonth() + 1

      if (year < currentYear || (year === currentYear && month < currentMonth)) {
        newErrors.date = '信用卡已過期'
      }
    }

    // 安全碼驗證
    if (!card.password.trim()) {
      newErrors.password = '請輸入安全碼'
    }
    else if (!/^\d{3,4}$/.test(card.password)) {
      newErrors.password = '安全碼格式不正確'
    }

    return newErrors
  }
  // 輸入信用卡有效日期
  const cardNum = (e) => {
    // 移除非數字和已有斜線
    let digits = e.target.value.replace(/\D/g, '')

    // 只取前四位數
    if (digits.length > 4) digits = digits.slice(0, 4)

    // 根據長度加斜線
    let formatted = digits
    if (digits.length > 2) {
      formatted = digits.substring(0, 2) + '/' + digits.substring(2)
    }

    setCard({ ...card, date: formatted })
  }
  // 取得預約資料input
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }
  // 取得信用卡資料input
  const handleCardChange = (e) => {
    const { name, value } = e.target
    setCard(prev => ({
      ...prev,
      [name]: value,
    }))
  }
  // 第一個 Modal到第二個 Modal
  const handleStep2Next = () => {
    const validationErrors = validate(formData)
    setErrors(validationErrors)
    setValidated(true)

    if (Object.keys(validationErrors).length === 0) {
      // 驗證通過 → 切到下一個 Modal
      modalStep2Instance.current.hide()
      modalStep3Instance.current.show()
      resetValidation()
    }
  }
  // 第二個 Modal到第三個 Modal
  const handleStep3Next = () => {
    const validationErrors = validateCard(card)
    setCardErrors(validationErrors)
    setCardValidated(true)

    if (Object.keys(validationErrors).length === 0) {
      // 驗證通過 → 切到下一個 Modal
      modalStep3Instance.current.hide()
      modalStep4Instance.current.show()
      resetValidation()
    }
  }
  // 關掉 Modal
  const closeModal = () => {
    setShowModal(false)
    resetValidation()
  }
  // 清空驗證錯誤
  const resetValidation = () => {
    setErrors({})
    setValidated(false)
    setCardErrors({})
    setCardValidated(false)
  }

  // 計算預約多少晚
  const calcNights = (start, end) => {
    if (!start || !end) return 0

    const startDate = new Date(start)
    const endDate = new Date(end)

    // 時間歸零，避免跨日誤差
    startDate.setHours(0, 0, 0, 0)
    endDate.setHours(0, 0, 0, 0)

    const diffTime = endDate - startDate
    const diffDays = diffTime / (1000 * 60 * 60 * 24)

    return diffDays > 0 ? diffDays : 0
  }

  const nights = useMemo(() => {
    return calcNights(startDate, endDate)
  }, [startDate, endDate])

  useEffect(() => {
    modalInstance.current = new Modal(serviceRef.current)
    modalStep2Instance.current = new Modal(serviceStep2Ref.current)
    modalStep3Instance.current = new Modal(serviceStep3Ref.current)
    modalStep4Instance.current = new Modal(serviceStep4Ref.current)
  }, [])

  return (
    <>
      <div className="container-lg mt-12">
        <div className="row">
          {/* 左側文字 */}
          {/* 電腦版 */}
          <aside className="col-6 position-relative d-md-block d-none">
            <div className="position-fixed">
              <div className="mb-md-10 mb-6">
                <div className="d-flex mb-4">
                  <h3 className="fw-bold text-primary mb-0 me-4">毛孩好家</h3>
                  <div className="stars d-flex align-items-center">
                    <span className="star-big"></span>
                    <span className="star-big"></span>
                    <span className="star-big"></span>
                    <span className="star-big"></span>
                    <span className="star-big"></span>
                  </div>
                </div>
                <p className="fs-6 fs-md-7 fw-bold text-primary mb-md-2 mb-3">給予毛孩最舒適的環境是我們的職責！</p>
                <p className="fw-medium text-primary mb-0">已提供 52 筆服務、並獲得 30 個評價</p>
              </div>
              <div className="mb-md-8 mb-6">
                <p className="fs-7 fw-bold text-primary mb-md-4 mb-3">服務內容</p>
                <ul className="list-unstyled">
                  <li className="fw-medium text-primary mb-2">寄宿 NT$ 450 /晚</li>
                  <li className="fw-medium text-primary mb-0">美容洗澡 NT$ 500 （含剪指甲、剃腳底毛、清耳朵）</li>
                  <li className="fw-medium fs-10 text-orange-20 mb-2">個性貓另加價</li>
                  <li className="fw-medium text-primary mb-2">到府保姆 NT$ 550 /晚</li>
                </ul>
              </div>
              <div className="d-flex mb-md-10 mb-6">
                <div className="me-3">
                  <span className="material-icons text-orange-20">
                    room
                  </span>
                </div>
                <div className="fw-medium">
                  <p className="text-primary mb-0">高雄市鹽埕區七賢三路123號</p>
                  <p className="text-primary mb-0">服務區域：高雄市 全區</p>
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <button type="button" className="fs-7 bg-white text-orange-20 border-1 border-orange-20 py-2 w-100 rounded-1">聯繫</button>
                </div>
                <div className="col-7">
                  <button type="button" className="fs-7 bg-orange-20 text-white border-1 border-orange-20 py-2 w-100 rounded-1" onClick={() => modalInstance.current.show()}>立刻預約</button>
                </div>
              </div>
            </div>
          </aside>
          {/* 手機板 */}
          <aside className="col-6 d-md-none">
            <div className="mb-md-10 mb-6">
              <div className="d-flex mb-4">
                <h3 className="fw-bold text-primary mb-0 me-4">毛孩好家</h3>
                <div className="stars d-flex align-items-center">
                  <span className="star-big"></span>
                  <span className="star-big"></span>
                  <span className="star-big"></span>
                  <span className="star-big"></span>
                  <span className="star-big"></span>
                </div>
              </div>
              <p className="fs-6 fs-md-7 fw-bold text-primary mb-md-2 mb-3">給予毛孩最舒適的環境是我們的職責！</p>
              <p className="fw-medium text-primary mb-0">已提供 52 筆服務、並獲得 30 個評價</p>
            </div>
            <div className="mb-md-8 mb-6">
              <p className="fs-7 fw-bold text-primary mb-md-4 mb-3">服務內容</p>
              <ul className="list-unstyled">
                <li className="fw-medium text-primary mb-2">寄宿 NT$ 450 /晚</li>
                <li className="fw-medium text-primary mb-0">美容洗澡 NT$ 500 （含剪指甲、剃腳底毛、清耳朵）</li>
                <li className="fw-medium fs-10 text-orange-20 mb-2">個性貓另加價</li>
                <li className="fw-medium text-primary mb-2">到府保姆 NT$ 550 /晚</li>
              </ul>
            </div>
            <div className="d-flex mb-md-10 mb-6">
              <div className="me-3">
                <span className="material-icons text-orange-20">
                  room
                </span>
              </div>
              <div className="fw-medium">
                <p className="text-primary mb-0">高雄市鹽埕區七賢三路123號</p>
                <p className="text-primary mb-0">服務區域：高雄市 全區</p>
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <button type="button" className="fs-7 bg-white text-orange-20 border-1 border-orange-20 py-2 w-100 rounded-1">聯繫</button>
              </div>
              <div className="col-7">
                <button type="button" className="fs-7 bg-orange-20 text-white border-1 border-orange-20 py-2 w-100 rounded-1" onClick={() => modalInstance.current.show()}>立刻預約</button>
              </div>
            </div>
            {/* 內文 */}
            <div className="pt-md-14 pt-10 text-primary mb-md-12 mb-10">
              <div className="mb-md-8 mb-6">
                <h5 className="fw-bold mb-3">關於</h5>
                <p className="fs-6 fs-md-7 fw-medium">家中有5隻貓寶貝，對貓咪有瘋狂的熱愛 。 目前已經照顧超過30位狗狗貓咪朋友！對於我來說，能夠與你們相遇都是緣分！</p>
              </div>
              <div className="mb-md-8 mb-6">
                <h5 className="fw-bold mb-3">經歷</h5>
                <p className="fs-6 fs-md-7 fw-medium">曾接手過數次奶貓，照顧後送養成功，目前都是健健康康的毛孩。</p>
              </div>
              <div className="mb-md-8 mb-6">
                <h5 className="fw-bold mb-3">技能證照</h5>
                <p className="fs-6 fs-md-7 fw-medium">寵物美容丙級技術證</p>
              </div>
              <div className="mb-md-8 mb-6">
                <h5 className="fw-bold mb-3">提供</h5>
                <p className="fs-6 fs-md-7 fw-medium">貓砂盆、罐頭、乾飼料</p>
              </div>
              <div className="mb-md-8 mb-6">
                <h5 className="fw-bold mb-3">毛孩活動範圍</h5>
                <p className="fs-6 fs-md-7 fw-medium">貓砂盆、罐頭、乾飼料</p>
              </div>
              <div className="mb-md-8 mb-6">
                <h5 className="fw-bold mb-3">服務地區</h5>
                <p className="fs-6 fs-md-7 fw-medium">高雄市</p>
              </div>
            </div>
          </aside>
          <main className="col-6">
            {/* 主圖 */}
            <div className="mb-3">
              <img
                src={mainImage}
                alt="main"
                className="img-square w-100 rounded-1 object-fit-cover"
              />
            </div>
            {/* 縮圖 */}
            <div className="d-flex gap-2 mb-10">
              {images.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  className={`border-0 p-0 rounded-1 ${mainImage === img ? 'opacity-100' : 'opacity-50'}`}
                  onClick={() => setMainImage(img)}
                >
                  <img
                    src={img}
                    alt={`thumb-${index}`}
                    className="thumb-square object-fit-cover rounded-1"
                    style={{
                      border: mainImage === img ? '2px solid #F0AD25' : '1px solid #ddd',
                    }}
                  />
                </button>
              ))}
            </div>
            {/* 電腦版 */}
            <div className="d-md-block d-none">
              {/* 內文 */}
              <div className="pt-md-14 pt-10 text-primary mb-md-12 mb-10">
                <div className="mb-md-8 mb-6">
                  <h5 className="fw-bold mb-3">關於</h5>
                  <p className="fs-6 fs-md-7 fw-medium">家中有5隻貓寶貝，對貓咪有瘋狂的熱愛 。 目前已經照顧超過30位狗狗貓咪朋友！對於我來說，能夠與你們相遇都是緣分！</p>
                </div>
                <div className="mb-md-8 mb-6">
                  <h5 className="fw-bold mb-3">經歷</h5>
                  <p className="fs-6 fs-md-7 fw-medium">曾接手過數次奶貓，照顧後送養成功，目前都是健健康康的毛孩。</p>
                </div>
                <div className="mb-md-8 mb-6">
                  <h5 className="fw-bold mb-3">技能證照</h5>
                  <p className="fs-6 fs-md-7 fw-medium">寵物美容丙級技術證</p>
                </div>
                <div className="mb-md-8 mb-6">
                  <h5 className="fw-bold mb-3">提供</h5>
                  <p className="fs-6 fs-md-7 fw-medium">貓砂盆、罐頭、乾飼料</p>
                </div>
                <div className="mb-md-8 mb-6">
                  <h5 className="fw-bold mb-3">毛孩活動範圍</h5>
                  <p className="fs-6 fs-md-7 fw-medium">貓砂盆、罐頭、乾飼料</p>
                </div>
                <div className="mb-md-8 mb-6">
                  <h5 className="fw-bold mb-3">服務地區</h5>
                  <p className="fs-6 fs-md-7 fw-medium">高雄市</p>
                </div>
              </div>
              {/* 飼主頻論 */}
              <div className="mb-md-12 mb-10">
                <h6 className="fs-5 fw-bold text-primary mb-6">飼主評論（30）</h6>
                <div className="row gy-5 mb-2">
                  {commentList.map((people) => {
                    return (
                      <div className="col-6" key={people.user}>
                        <div className="border border-2 rounded-1 py-3 h-100">
                          <div className="d-flex">
                            <div className="d-flex align-items-center img-square">
                              <img className="ps-4" src={people.personImage} alt="user" />
                            </div>
                            <div className="ms-5">
                              <div className="mb-2">
                                <span className="text-primary me-2">{people.user}</span>
                                <span className="fs-10 text-gray-30">{people.date}</span>
                              </div>
                              <div className="stars d-flex align-items-center mb-2">
                                <span className="star-big"></span>
                                <span className="star-big"></span>
                                <span className="star-big"></span>
                                <span className="star-big"></span>
                                <span className="star-big"></span>
                              </div>
                              <p className="text-primary mb-0">{people.content}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="d-flex justify-content-end">
                  <button type="button" className="fs-9 border-0 bg-white text-primary fw-medium">查看更多</button>
                </div>
              </div>
              {/* 其他高雄寄宿 */}
              <div className="mb-md-12 mb-10">
                <h6 className="fs-5 fw-bold text-primary mb-6">
                  其他
                  <a href="#" className="text-orange-20 px-1">高雄市</a>
                  <a href="#" className="text-orange-20 pe-1">寄宿</a>
                  的寵物保姆
                </h6>
                <div className="d-flex flex-wrap gap-2">
                  {reservationList.map((item) => {
                    return (
                      <div className="w-32" key={item.title}>
                        <div className="card shadow h-100">
                          <img src={item.gImage} className="card-img-top h-128 object-fit-cover" alt={item.title} />
                          <div className="card-body bg-gray-0 py-2 px-3">
                            <h5 className="fs-9 text-primary">{item.title}</h5>
                            <div className="stars mb-1">
                              <span className="star"></span>
                              <span className="star"></span>
                              <span className="star"></span>
                              <span className="star"></span>
                              <span className="star"></span>
                            </div>
                            <p className="fs-10 text-primary pb-0">{item.service}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </main>
          {/* 手機板 */}
          <div className="d-md-none">
            {/* 飼主頻論 */}
            <div className="mb-md-12 mb-10">
              <h6 className="fs-5 fw-bold text-primary mb-6">飼主評論（30）</h6>
              <div className="row gy-5 mb-2">
                {commentList.map((people) => {
                  return (
                    <div className="col-6" key={people.user}>
                      <div className="border border-2 rounded-1 py-3">
                        <div className="d-flex">
                          <div className="d-flex align-items-center img-square">
                            <img className="ps-4" src={people.personImage} alt="user" />
                          </div>
                          <div className="ms-5">
                            <div className="mb-2">
                              <span className="text-primary me-2">{people.user}</span>
                              <span className="fs-10 text-gray-30">{people.date}</span>
                            </div>
                            <div className="stars d-flex align-items-center mb-2">
                              <span className="star-big"></span>
                              <span className="star-big"></span>
                              <span className="star-big"></span>
                              <span className="star-big"></span>
                              <span className="star-big"></span>
                            </div>
                            <p className="text-primary mb-0">{people.content}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="d-flex justify-content-end">
                <button type="button" className="fs-9 border-0 bg-white text-primary fw-medium">查看更多</button>
              </div>
            </div>
            {/* 其他高雄寄宿 */}
            <div className="mb-md-12 mb-10">
              <h6 className="fs-5 fw-bold text-primary mb-6">
                其他
                <a href="#" className="text-orange-20 px-1">高雄市</a>
                <a href="#" className="text-orange-20 pe-1">寄宿</a>
                的寵物保姆
              </h6>
              <div className="d-flex flex-wrap gap-2">
                {reservationList.map((item) => {
                  return (
                    <div className="w-32" key={item.title}>
                      <div className="card shadow h-100">
                        <img src={item.gImage} className="card-img-top h-128 object-fit-cover" alt={item.title} />
                        <div className="card-body bg-gray-0 py-2 px-3">
                          <h5 className="fs-9 text-primary">{item.title}</h5>
                          <div className="stars mb-1">
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                          </div>
                          <p className="fs-10 text-primary pb-0">{item.service}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 預約項目 Modal */}
      <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" ref={serviceRef}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-body px-7 pt-10 pb-9">
              <div className="row flex-row-reverse">
                <h5 className="d-md-none text-primary fw-bold mb-6">預約項目</h5>
                {/* 右邊欄位 */}
                <div className="col-md-5 d-flex flex-md-column flex-row h-100 mb-md-0 mb-5">
                  <img
                    src={`${import.meta.env.BASE_URL}homestay-3.jpeg`}
                    className="img-square h-md-150 w-md-150 rounded-1 object-fit-cover mb-md-2 mb-0"
                    alt="homestay-3"
                  />
                  <div className="d-flex flex-column justify-content-center ms-md-0 ms-6">
                    <div className="d-flex mb-2">
                      <h6 className="fw-bold text-primary me-2 mb-0">毛孩好家</h6>
                      <div className="stars d-flex align-items-center">
                        <span className="star-big"></span>
                        <span className="star-big"></span>
                        <span className="star-big"></span>
                        <span className="star-big"></span>
                        <span className="star-big"></span>
                      </div>
                    </div>
                    <div className="d-flex mb-md-11 mb-0">
                      <div className="me-3">
                        <span className="material-icons text-orange-20">room</span>
                      </div>
                      <p className="fw-medium text-primary mb-0">
                        高雄市苓雅區、新興區、前鎮區
                      </p>
                    </div>
                  </div>
                  <button
                    className="btn btn-orange-10 w-100 rounded-1 py-2 mt-auto d-md-block d-none"
                    type="button"
                    onClick={() => {
                      modalInstance.current.hide() // 關閉第一個 Modal
                      modalStep2Instance.current.show() // 打開第二個 Modal
                    }}
                  >
                    下一步
                  </button>
                </div>
                {/* 左邊欄位 */}
                <div className="col-md-7">
                  <h5 className="d-md-block d-none text-primary fw-bold mb-7">預約項目</h5>
                  <div className="mb-6">
                    <div className="row px-1 mb-6">
                      {serviceList.map(item => (
                        <div className="col-3 px-1" key={item.title}>
                          <button
                            type="button"
                            className={`img-square p-0 w-100 bg-white shadow rounded-1 ${
                              service === item.title ? 'opacity-100' : 'opacity-50'
                            }`}
                            style={{
                              border: service === item.title ? '3px solid #D5411A' : '3px solid #ddd',
                              color: service === item.title ? '#772400' : '',
                            }}
                            onClick={() => setService(item.title)}
                          >
                            <span
                              className="material-icons fs-2 mb-2"
                              style={{
                                color: service === item.title ? '#F0AD25' : '',
                              }}
                            >
                              {item.icon}
                            </span>
                            <p className="mb-0">{item.title}</p>
                          </button>
                        </div>
                      ))}
                    </div>
                    <p className="mb-1">選擇日期</p>
                    <div className="d-flex justify-content-between align-items-center gap-2 mb-5">
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
                      <span>
                        共
                        {nights}
                        晚
                      </span>
                    </div>
                    <div className="d-flex mb-10">
                      <div className="me-6">
                        <label className="form-label">毛孩數量</label>
                        <div className="position-relative">
                          <button
                            type="button"
                            className="btn btn-white border dropdown-toggle text-gray-40 text-start"
                            onClick={() => setOpenNum(prev => !prev)}
                          >
                            {animalCount}
                            隻
                          </button>
                          {openNum && (
                            <ul className="dropdown-menu show">
                              {animalNum.map(num => (
                                <li key={num}>
                                  <button
                                    type="button"
                                    className="dropdown-item"
                                    onClick={() => {
                                      setAnimalCount(num)
                                      setOpenNum(false)
                                    }}
                                  >
                                    {num}
                                    隻
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                      <div className="me-6">
                        <label className="form-label">您的毛孩是</label>
                        <div className="position-relative">
                          <button
                            type="button"
                            className="btn btn-white border dropdown-toggle text-gray-40 text-start w-120"
                            onClick={() => setOpenAnimal(prev => !prev)}
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
                      </div>
                      <div className="me-6">
                        <label className="form-label">年齡</label>
                        <div className="position-relative">
                          <button
                            type="button"
                            className="btn btn-white border dropdown-toggle text-gray-40 w-128 text-start"
                            onClick={() => setOpenAge(prev => !prev)}
                          >
                            {selectedAge}
                            歲
                          </button>
                          {openAge && (
                            <ul className="dropdown-menu show">
                              {animalNum.map(age => (
                                <li key={age}>
                                  <button
                                    type="button"
                                    className="dropdown-item"
                                    onClick={() => {
                                      setSelectedAge(age)
                                      setOpenAge(false)
                                    }}
                                  >
                                    {age}
                                    歲
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row text-center position-relative mb-md-6 mb-7">
                    <div className="step-line position-absolute w-100"></div>
                    <div className="col-4 d-flex flex-column align-items-center position-relative">
                      <span className="step-dot"></span>
                      <span className="fw-bold mt-1">預約項目</span>
                    </div>
                    <div className="col-4 d-flex flex-column align-items-center position-relative">
                      <span className="step-dot"></span>
                      <span className="mt-1">預約資料</span>
                    </div>
                    <div className="col-4 d-flex flex-column align-items-center position-relative">
                      <span className="step-dot"></span>
                      <span className="mt-1">付款資訊</span>
                    </div>
                  </div>
                  <div className="text-end">
                    <button
                      className="btn btn-orange-10 w-50 rounded-1 py-2 d-md-none"
                      type="button"
                      onClick={() => {
                        modalInstance.current.hide() // 關閉第一個 Modal
                        modalStep2Instance.current.show() // 打開第二個 Modal
                      }}
                    >
                      下一步
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 預約資料 Modal */}
      <div className="modal fade" tabIndex="-1" ref={serviceStep2Ref} onClick={closeModal}>
        <div className="modal-dialog modal-xl" onClick={e => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-body px-7 pt-10 pb-9">
              <div className="row">
                {/* 左邊欄位 */}
                <div className="col-7">
                  <h5 className="text-primary fw-bold mb-7">預約資料</h5>
                  <div className="mb-6">
                    <form className="row" noValidate>
                      {/* 毛孩姓名 */}
                      <div className="col-12">
                        <label htmlFor="petName" className="form-label mb-1">毛孩姓名</label>
                        <input
                          type="text"
                          id="petName"
                          name="petName"
                          className={`form-control w-66 ${
                            validated && (errors.petName ? 'is-invalid' : 'is-valid')
                          }`}
                          placeholder="請輸入毛孩姓名"
                          value={formData.petName}
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback mt-0 d-block" style={{ visibility: errors.petName ? 'visible' : 'hidden' }}>
                          {errors.petName || 'placeholder'}
                        </div>
                      </div>
                      {/* 飼主姓名 */}
                      <div className="col-12">
                        <label htmlFor="masterName" className="form-label mb-1">飼主姓名</label>
                        <input
                          type="text"
                          id="masterName"
                          name="masterName"
                          className={`form-control w-66 ${
                            validated && (errors.masterName ? 'is-invalid' : 'is-valid')
                          }`}
                          placeholder="請輸入飼主姓名"
                          value={formData.masterName}
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback mt-0 d-block" style={{ visibility: errors.masterName ? 'visible' : 'hidden' }}>
                          {errors.masterName || 'placeholder'}
                        </div>
                      </div>
                      {/* Email */}
                      <div className="col-12">
                        <label htmlFor="email" className="form-label mb-1">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className={`form-control w-66 ${
                            validated && (errors.email ? 'is-invalid' : 'is-valid')
                          }`}
                          placeholder="example@gmail.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback mt-0 d-block" style={{ visibility: errors.email ? 'visible' : 'hidden' }}>
                          {errors.email || 'placeholder'}
                        </div>
                      </div>
                      {/* 電話 */}
                      <div className="col-12">
                        <label htmlFor="tel" className="form-label mb-1">聯絡電話</label>
                        <input
                          type="tel"
                          id="tel"
                          name="tel"
                          className={`form-control w-66 ${
                            validated && (errors.tel ? 'is-invalid' : 'is-valid')
                          }`}
                          placeholder="0912-345-678"
                          value={formData.tel}
                          onChange={handleChange}
                        />
                        <div className="invalid-feedback mt-0 d-block" style={{ visibility: errors.tel ? 'visible' : 'hidden' }}>
                          {errors.tel || 'placeholder'}
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="row text-center position-relative mb-6">
                    <div className="step-line position-absolute w-100"></div>

                    <div className="col-4 d-flex flex-column align-items-center position-relative">
                      <span className="step-dot"></span>
                      <span className="mt-1">預約項目</span>
                    </div>
                    <div className="col-4 d-flex flex-column align-items-center position-relative">
                      <span className="step-dot"></span>
                      <span className="fw-bold mt-1">預約資料</span>
                    </div>
                    <div className="col-4 d-flex flex-column align-items-center position-relative">
                      <span className="step-dot"></span>
                      <span className="mt-1">付款資訊</span>
                    </div>
                  </div>
                </div>
                {/* 右邊欄位 */}
                <div className="col-5 d-flex flex-column h-100">
                  <img
                    src={`${import.meta.env.BASE_URL}homestay-3.jpeg`}
                    className="h-282 w-100 rounded-1 object-fit-cover mb-2"
                    alt="homestay-3"
                  />
                  <div className="d-flex mb-2">
                    <h6 className="fw-bold text-primary me-2 mb-0">毛孩好家</h6>
                    <div className="stars d-flex align-items-center">
                      <span className="star-big"></span>
                      <span className="star-big"></span>
                      <span className="star-big"></span>
                      <span className="star-big"></span>
                      <span className="star-big"></span>
                    </div>
                  </div>
                  <div className="d-flex mb-6">
                    <div className="me-3">
                      <span className="material-icons text-orange-20">room</span>
                    </div>
                    <p className="fw-medium text-primary mb-0">
                      高雄市苓雅區、新興區、前鎮區
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn text-orange-10 p-0 mb-4"
                    onClick={() => {
                      modalStep2Instance.current.hide() // 關閉第二個 Modal
                      modalInstance.current.show() // 打開第一個 Modal
                      resetValidation()
                    }}
                  >
                    返回
                  </button>
                  {/* 撐到最底 */}
                  <button
                    className="btn btn-orange-10 w-100 rounded-1 py-2 mt-auto"
                    type="button"
                    onClick={handleStep2Next}
                  >
                    下一步
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 付款資訊 Modal */}
      <div className="modal fade" tabIndex="-1" ref={serviceStep3Ref} onClick={closeModal}>
        <div className="modal-dialog modal-xl" onClick={e => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-body px-7 pt-10 pb-9">
              <div className="row">
                {/* 左邊欄位 */}
                <div className="col-7">
                  <h5 className="text-primary fw-bold mb-7">付款資訊</h5>
                  <div className="mb-6">
                    <form className="row" noValidate>
                      {/* 信用卡帳號 */}
                      <div className="col-12">
                        <label htmlFor="account" className="form-label mb-1">信用卡帳號</label>
                        <input
                          type="text"
                          id="account"
                          name="account"
                          className={`form-control w-66 ${cardValidated && (cardErrors.account ? 'is-invalid' : 'is-valid')}`}
                          placeholder="Xxxx-xxxx-xxxx-xxxx"
                          value={card.account}
                          onChange={handleCardChange}
                        />
                        <div className="invalid-feedback mt-0 d-block" style={{ visibility: cardErrors.account ? 'visible' : 'hidden' }}>
                          {cardErrors.account || 'placeholder'}
                        </div>
                      </div>
                      {/* 有效日期 */}
                      <div className="col-12">
                        <label htmlFor="date" className="form-label mb-1">有效日期</label>
                        <input
                          type="text"
                          id="date"
                          name="date"
                          className={`form-control w-66 ${cardValidated && (cardErrors.date ? 'is-invalid' : 'is-valid')}`}
                          placeholder="MM/YY"
                          maxLength={5} // 限制長度為 5
                          value={card.date}
                          onChange={cardNum}
                        />
                        <div className="invalid-feedback mt-0 d-block" style={{ visibility: cardErrors.date ? 'visible' : 'hidden' }}>
                          {cardErrors.date || '請輸入有效日期 (MM/YY)'}
                        </div>
                      </div>
                      {/* 安全碼 */}
                      <div className="col-12 mb-10 pb-6">
                        <label htmlFor="email" className="form-label mb-1">安全碼</label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          maxLength={3}
                          className={`form-control w-66 ${cardValidated && (cardErrors.password ? 'is-invalid' : 'is-valid')}`}
                          placeholder="***"
                          value={card.password}
                          onChange={handleCardChange}
                        />
                        <div className="invalid-feedback mt-0 d-block" style={{ visibility: cardErrors.password ? 'visible' : 'hidden' }}>
                          {cardErrors.password || 'placeholder'}
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="row text-center position-relative mb-6">
                    <div className="step-line position-absolute w-100"></div>

                    <div className="col-4 d-flex flex-column align-items-center position-relative">
                      <span className="step-dot"></span>
                      <span className="mt-1">預約項目</span>
                    </div>
                    <div className="col-4 d-flex flex-column align-items-center position-relative">
                      <span className="step-dot"></span>
                      <span className="mt-1">預約資料</span>
                    </div>
                    <div className="col-4 d-flex flex-column align-items-center position-relative">
                      <span className="step-dot"></span>
                      <span className="fw-bold mt-1">付款資訊</span>
                    </div>
                  </div>
                </div>
                {/* 右邊欄位 */}
                <div className="col-5 d-flex flex-column h-100">
                  <img
                    src={`${import.meta.env.BASE_URL}homestay-3.jpeg`}
                    className="h-282 w-100 rounded-1 object-fit-cover mb-2"
                    alt="homestay-3"
                  />
                  <div className="d-flex mb-2">
                    <h6 className="fw-bold text-primary me-2 mb-0">毛孩好家</h6>
                    <div className="stars d-flex align-items-center">
                      <span className="star-big"></span>
                      <span className="star-big"></span>
                      <span className="star-big"></span>
                      <span className="star-big"></span>
                      <span className="star-big"></span>
                    </div>
                  </div>
                  <div className="d-flex mb-6">
                    <div className="me-3">
                      <span className="material-icons text-orange-20">room</span>
                    </div>
                    <p className="fw-medium text-primary mb-0">
                      高雄市苓雅區、新興區、前鎮區
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn text-orange-10 p-0 mb-4"
                    onClick={() => {
                      modalStep3Instance.current.hide()
                      modalStep2Instance.current.show()
                    }}
                  >
                    返回
                  </button>
                  <button
                    className="btn btn-orange-10 w-100 rounded-1 py-2 mt-auto"
                    type="button"
                    onClick={handleStep3Next}
                  >
                    下一步
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 預約成功! Modal */}
      <div className="modal fade" tabIndex="-1" ref={serviceStep4Ref}>
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-body px-7 py-14">
              <div className="row text-center my-9">
                <span class="material-symbols-outlined display-1 text-yellow-20">
                  pets
                </span>
                <h5 className="text-primary fs-6 fw-bold mb-3">預約成功!</h5>
                <p className="text-primary mb-8">您可以在會員頁找到您的預約資料並修改或取消預約。</p>
                <Link
                  to="/"
                  type="button"
                  className="btn btn-orange-10 w-48 mx-auto py-2 rounded-1"
                  onClick={() => {
                    modalStep4Instance.current.hide() // 隱藏 Modal 及 backdrop
                  }}
                >
                  前往會員頁
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
