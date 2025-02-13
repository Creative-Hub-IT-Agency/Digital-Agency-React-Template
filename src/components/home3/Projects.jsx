import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section className="zirox-projects zirox-section pt-0">
      <div className="container">
        <h6 data-aos="fade-up" className="text-center">
          Latest Projects
        </h6>
        <h2 data-aos="fade-up" data-aos-delay="300" className="text-center ">
          Lgniting Your Digital <br /> Presence
        </h2>
        <div className="row flex-wrap align-items-center justify-content-center">
          <div data-aos="fade-up" className="col-12 col-md-6">
            <Link to="/portfolio-details">
              <div className="zirox-projects-item ">
                <img src="https://i.ibb.co.com/HDP6P73J/img2.jpg" alt="Project 1" style={{ width: "570px", height: "350px" }} />

                <div className="zirox-projects-item__detail">
                  <h3>Co-Working Solutions</h3>
                  <p>Marketing, Consultant</p>
                </div>
              </div>
            </Link>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="col-12 col-md-6">
            <Link to="/portfolio-details">
              <div className="zirox-projects-item ">
                <img src="https://i.ibb.co.com/kgj8sh8L/img3.jpg" alt="Project 2" style={{ width: "570px", height: "350px" }} />
                <div className="zirox-projects-item__detail">
                  <h3>Co-Working Solutions</h3>
                  <p>Marketing, Consultant</p>
                </div>
              </div>
            </Link>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" className="col-12 col-md-4 lg-3">
            <Link to="/portfolio-details">
              <div className="zirox-projects-item ">
                <img src="https://i.ibb.co.com/8DpHv9Yn/img1-3.jpg" alt="Project 3" tyle={{ width: "570px", height: "350px" }} />
                <div className="zirox-projects-item__detail">
                  <h3>Co-Working Solutions</h3>
                  <p>Marketing, Consultant</p>
                </div>
              </div>
            </Link>
          </div>
          <div data-aos="fade-up" data-aos-delay="600" className="col-12 col-md-4 lg-3">
            <Link to="/portfolio-details">
              <div className="zirox-projects-item ">
                <img src="https://i.ibb.co.com/LXhzRVVs/img4.jpg" alt="Project 4" tyle={{ width: "570px", height: "350px" }} />
                <div className="zirox-projects-item__detail">
                  <h3>Co-Working Solutions</h3>
                  <p>Marketing, Consultant</p>
                </div>
              </div>
            </Link>
          </div>
          <div data-aos="fade-up" data-aos-delay="800" className="col-12 col-md-4 lg-3">
            <Link to="/portfolio-details">
              <div className="zirox-projects-item ">
                <img src="https://i.ibb.co.com/gLmbCVyW/img5.jpg" alt="Project 5" tyle={{ width: "570px", height: "350px" }} />
                <div className="zirox-projects-item__detail">
                  <h3>Co-Working Solutions</h3>
                  <p>Marketing, Consultant</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
