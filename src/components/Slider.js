

export default function Slider(){
    return(
<div id="carouselExampleControls" className="carousel slide my-slider" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active my-item">
          <img
            className="d-block w-100 "
            src="https://www.terawork.com/blog/wp-content/uploads/2022/11/ecommerce-mcommerce-featured-image-5fd09a3a5ff2a-1-1.png"
            alt="First slide"
          />
          
        </div>
        <div className="carousel-item my-item">
          <img
            className="d-block w-100 "
            src="https://blog.shift4shop.com/hubfs/iStock-1051616786.jpg"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item my-item">
          <img
            className="d-block w-100 "
            src="https://cdn.acowebs.com/wp-content/uploads/2019/02/Impact-of-eCommerce-On-Society.png"
            alt="Third slide"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    )
}