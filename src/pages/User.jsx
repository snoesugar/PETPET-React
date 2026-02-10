import Navbar from '../components/Navbar'

const User = () => {
  return (
    <>
      <Navbar />
      <div className="container-lg">
        <div className="row flex-sm-row flex-column py-sm-14 py-10 my-sm-7">
          <div className="col-sm-6 mb-sm-0 mb-8">
            <h3 className="text-primary fw-bold mb-7">
              會員資料
              <span class="material-symbols-outlined ms-1">
                edit
              </span>
            </h3>
            <div className="d-flex align-items-center mb-7">
              <img src={`${import.meta.env.BASE_URL}person-5.png`} className="w-sm-96 wh-75 me-4" alt="person-5" />
              <p className="text-primary fs-7 fw-medium mb-0">Joanne</p>
            </div>
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td className="w-md-16 w-25">電子信箱</td>
                  <td class="text-primary">cycample@gmail.com</td>
                </tr>
                <tr>
                  <td>聯絡電話</td>
                  <td class="text-primary">0912-345-789</td>
                </tr>
                <tr>
                  <td>性別</td>
                  <td class="text-primary">女</td>
                </tr>
                <tr>
                  <td>聯絡地址</td>
                  <td class="text-primary">高雄市鹽埕區七賢三路123號</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-6">
            <div className="d-flex flex-column justify-content-center h-100">
              <p class="text-primary fs-md-4 fs-6 fw-bold mb-0">Hi, Joanne</p>
              <p class="text-primary fs-md-4 fs-6 fw-bold mb-0">喜歡我們提供的服務嗎？</p>
              <p class="text-primary fs-md-4 fs-6 fw-bold mb-7">現在你也可以成為寵物保姆囉！</p>
              <button type="button" class="btn btn-orange-20 fs-md-9 fs-7 py-2 w-md-50 w-100">成為寵物保姆</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default User
