import { useState } from 'react'

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

const Services = () => {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="container-lg mt-12">
      <div className="row">
        {/* 左側文字 */}
        <div className="col-6">
          <div className="mb-10">
            <div className="d-flex mb-4">
              <h3 className="fw-bold text-primary me-4">毛孩好家</h3>
              <div className="stars d-flex align-items-center">
                <span className="star-big"></span>
                <span className="star-big"></span>
                <span className="star-big"></span>
                <span className="star-big"></span>
                <span className="star-big"></span>
              </div>
            </div>
            <p className="fs-6 fw-bold text-primary mb-2">給予毛孩最舒適的環境是我們的職責！</p>
            <p className="fw-medium text-primary mb-0">已提供 52 筆服務、並獲得 30 個評價</p>
          </div>
          <div className="mb-8">
            <p className="fs-7 fw-bold text-primary mb-4">服務內容</p>
            <ul className="list-unstyled">
              <li className="fw-medium text-primary mb-2">寄宿 NT$ 450 /晚</li>
              <li className="fw-medium text-primary mb-0">美容洗澡 NT$ 500 （含剪指甲、剃腳底毛、清耳朵）</li>
              <li className="fw-medium fs-10 text-orange-20 mb-2">個性貓另加價</li>
              <li className="fw-medium text-primary mb-2">到府保姆 NT$ 550 /晚</li>
            </ul>
          </div>
          <div className="mb-10 d-flex">
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
              <button type="button" className="fs-7 bg-orange-20 text-white border-1 border-orange-20 py-2 w-100 rounded-1">立刻預約</button>
            </div>
          </div>
        </div>
        <div className="col-6">
          {/* 主圖 */}
          <div className="mb-3">
            <img
              src={mainImage}
              alt="main"
              className="h-440 w-100 rounded-1 object-fit-cover"
            />
          </div>
          {/* 縮圖 */}
          <div className="d-flex gap-2 mb-10">
            {images.map((img, index) => (
              <button
                key={index}
                type="button"
                className={`border-0 p-0 rounded-1 ${
                  mainImage === img ? 'opacity-100' : 'opacity-50'
                }`}
                onClick={() => setMainImage(img)}
              >
                <img
                  src={img}
                  alt={`thumb-${index}`}
                  className="h-96 w-96 object-fit-cover rounded-1"
                  style={{
                    border:
                      mainImage === img ? '2px solid #F0AD25' : '1px solid #ddd',
                  }}
                />
              </button>
            ))}
          </div>
          {/* 內文 */}
          <div className="pt-14 text-primary mb-12">
            <div className="mb-8">
              <h5 className="fw-bold mb-3">關於</h5>
              <p className="fs-7 fw-medium">家中有5隻貓寶貝，對貓咪有瘋狂的熱愛 。 目前已經照顧超過30位狗狗貓咪朋友！對於我來說，能夠與你們相遇都是緣分！</p>
            </div>
            <div className="mb-8">
              <h5 className="fw-bold mb-3">經歷</h5>
              <p className="fs-7 fw-medium">曾接手過數次奶貓，照顧後送養成功，目前都是健健康康的毛孩。</p>
            </div>
            <div className="mb-8">
              <h5 className="fw-bold mb-3">技能證照</h5>
              <p className="fs-7 fw-medium">寵物美容丙級技術證</p>
            </div>
            <div className="mb-8">
              <h5 className="fw-bold mb-3">提供</h5>
              <p className="fs-7 fw-medium">貓砂盆、罐頭、乾飼料</p>
            </div>
            <div className="mb-8">
              <h5 className="fw-bold mb-3">毛孩活動範圍</h5>
              <p className="fs-7 fw-medium">貓砂盆、罐頭、乾飼料</p>
            </div>
            <div className="mb-8">
              <h5 className="fw-bold mb-3">服務地區</h5>
              <p className="fs-7 fw-medium">高雄市</p>
            </div>
          </div>
          {/* 飼主頻論 */}
          <div className="mb-12">
            <h6 className="fs-5 fw-bold text-primary mb-6">飼主評論（30）</h6>
            <div className="row gy-5 mb-2">
              {
                commentList.map((people) => {
                  return (
                    <div className="col-6" key={people.user}>
                      <div className="border border-2 rounded-1 py-3">
                        <div className="d-flex">
                          <img className="py-3 ps-4" src={people.personImage} alt="" />
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
                })
              }
            </div>
            <div className="d-flex justify-content-end">
              <button type="button" className="fs-9 border-0 bg-white text-primary fw-medium">查看更多</button>
            </div>
          </div>
          {/* 其他高雄寄宿 */}
          <div className="mb-12">
            <h6 className="fs-5 fw-bold text-primary mb-6">
              其他
              <a href="#" className="text-orange-20 px-1">高雄市</a>
              <a href="#" className="text-orange-20 pe-1">寄宿</a>
              的寵物保姆
            </h6>
            <div className="d-flex flex-wrap gap-2">
              {
                reservationList.map((item) => {
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
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
