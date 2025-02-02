import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="zirox-portfolio zirox-section">
      <div className="container">
        <h6 data-aos="fade-up" className="text-center zirox-text-overlay">
          OUR PORTFOLIO
        </h6>
        <h2 data-aos="fade-up" data-aos-delay="200" className="text-center">
          Our Recent Complate Work
        </h2>
        <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
  <div data-aos="fade-up" className="zirox-portfolio__item">
    <div className="zirox-portfolio__item-img zirox-img-overlay">
      <img
        src="https://i.ibb.co.com/nsryrDqw/img3.jpg"
        alt="Technology Services"
        style={{ height: '350px', width: '100%', objectFit: 'cover' }}
      />
    </div>
    <div className="zirox-portfolio__item-icon">
      <i className="flaticon-team-1"></i>
    </div>
    <div className="zirox-portfolio__item-title">
      <p>01 Portfolio</p>
      <h3>Technology Services</h3>
    </div>
    <div className="zirox-portfolio__item-detail">
      <Link to="/portfolio-details">
        More Detail <i className="flaticon-right-arrow"></i>
      </Link>
    </div>
  </div>
</div>

{/* second card */}
<div className="col-12 col-md-6 col-lg-4">
  <div data-aos="fade-up" className="zirox-portfolio__item">
    <div className="zirox-portfolio__item-img zirox-img-overlay">
      <img
        src="https://i.ibb.co.com/wNXBnrnT/img1-3.jpg"
        alt="Technology Services"
        style={{ height: '350px', width: '100%', objectFit: 'cover' }}
      />
    </div>
    <div className="zirox-portfolio__item-icon">
      <i className="flaticon-team-1"></i>
    </div>
    <div className="zirox-portfolio__item-title">
      <p>01 Portfolio</p>
      <h3>Technology Services</h3>
    </div>
    <div className="zirox-portfolio__item-detail">
      <Link to="/portfolio-details">
        More Detail <i className="flaticon-right-arrow"></i>
      </Link>
    </div>
  </div>
</div>
{/* third card */}
<div className="col-12 col-md-6 col-lg-4">
  <div data-aos="fade-up" className="zirox-portfolio__item">
    <div className="zirox-portfolio__item-img zirox-img-overlay">
      <img
        src="https://i.ibb.co.com/RTX6y4rS/img2.jpg"
        alt="Technology Services"
        style={{ height: '350px', width: '100%', objectFit: 'cover' }}
      />
    </div>
    <div className="zirox-portfolio__item-icon">
      <i className="flaticon-team-1"></i>
    </div>
    <div className="zirox-portfolio__item-title">
      <p>01 Portfolio</p>
      <h3>Technology Services</h3>
    </div>
    <div className="zirox-portfolio__item-detail">
      <Link to="/portfolio-details">
        More Detail <i className="flaticon-right-arrow"></i>
      </Link>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
