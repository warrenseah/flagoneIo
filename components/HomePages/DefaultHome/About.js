import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const About = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <section className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div 
                className="about-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <img
                  src="/images/about-img1.jpg"
                  alt="image"
                  className="rounded-10"
                />

                <div className="video-box">
                  <div
                    onClick={() => setToggler(!toggler)}
                    className="video-btn"
                  >
                    <i className="fa-solid fa-play"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-content about-content-two">
                <div className="section-title">
                  <h2>About Us</h2>
                  <p>
                    We are Web3 Builders and Enablers. We are adept and highly adaptable to the fast-changing landscape of Web3 technologies. As such, we believe we are in the best position to help individuals and firms start their Web 3 journey.
                  </p>
                </div>

                {/* <div className="about-text">
                  <h4>Who We Are</h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div> */}

                {/* <div className="about-text">
                  <h4>Our History</h4>
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth.
                  </p>
                </div> */}

                <div className="about-text">
                  <h4>Our Mission</h4>
                  <p>
                    We believe the next Big-Tech companies will come out from the Fintech landscape powered by Blockchain and Web3 technologies. We see ourselves as enablers to impart and empowers this vision to individuals and companies. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
