import Slider from "react-slick";
const Brand = () => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 5,
    fade: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className="zirox-brand">
      <h4 className="zirox-bg-business">Business</h4>
      <div className="container">
        <Slider {...settings} className="zirox-brand__items">
          <a href="#" className="zirox-brand__items-item">
            <img src="https://i.ibb.co.com/b5BTzQ8k/brand1.jpg" alt="Envato" />
          </a>
          <a href="#" className="zirox-brand__items-item">
            <img src="https://i.ibb.co.com/5hG34Tw4/brand2.jpg" alt="Envato" />
          </a>
          <a href="#" className="zirox-brand__items-item">
            <img src="https://i.ibb.co.com/fVR00Z0Z/brand3.jpg" alt="Envato" />
          </a>
          <a href="#" className="zirox-brand__items-item">
            <img src="https://i.ibb.co.com/3YV6KjRF/brad5.jpg" alt="Envato" />
          </a>
          <a href="#" className="zirox-brand__items-item">
            <img src="https://i.ibb.co.com/nsqC1BqW/brand4.jpg" alt="Envato" />
          </a>
          <a href="#" className="zirox-brand__items-item">
            <img src="https://i.ibb.co.com/b5BTzQ8k/brand1.jpg" alt="Envato" />
          </a>
        </Slider>
      </div>
    </section>
  );
};

export default Brand;
