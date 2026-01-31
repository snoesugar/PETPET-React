const ServiceCard = ({ name, services, rating, orders, bgImage, personImage }) => {
  return (
    <div className="card shadow h-100">
      <img
        src={bgImage}
        className="object-fit-cover h-120 p-1 position-relative"
        alt={name}
      />
      <img
        src={personImage}
        className="card-person-img position-absolute start-50 translate-middle"
        alt={name}
      />
      <div className="card-body pb-6 pt-9 text-center text-primary">
        <h5 className="card-title fs-7 mb-1">{name}</h5>
        <p className="card-text mb-3">{services.join('、')}</p>
        <a href="#" className="btn btn-orange-20 py-3 px-10 mb-6">預約</a>
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <p className="mb-3">獲得評價</p>
            <div className="d-flex justify-content-center align-items-center">
              <span className="fs-5 fw-bold me-1">{rating}</span>
              <span className="fs-10">則</span>
            </div>
          </div>
          <div className="col-6">
            <p className="mb-3">已完成訂單</p>
            <div className="d-flex justify-content-center align-items-center">
              <span className="fs-5 fw-bold me-1">{orders}</span>
              <span className="fs-10">件</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
