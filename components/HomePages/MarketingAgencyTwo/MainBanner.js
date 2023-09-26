import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div 
        className="hero-banner overly-6"
        style={{ 
          backgroundImage: `url(/images/hero-banner7.jpg)` 
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="main-banner-content text-center">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  Digital Marketing
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>

                <div 
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <Link legacyBehavior href="/contact">
                    <a className="btn btn-primary">Contact Us</a>
                  </Link>

                  <Link legacyBehavior href="#play-video">
                    <a
                      onClick={() => setToggler(!toggler)}
                      className="btn btn-secondary"
                    >
                      <i className="fa-solid fa-play me-1"></i> How it works
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainBanner;
