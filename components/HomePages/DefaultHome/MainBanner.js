import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from 'next/link';

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);
  return (
		<>  
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div 
        className="main-banner" 
        style={{ 
          backgroundImage: `url(/images/main-banner-shape.jpg)` 
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="main-banner-content">
                    <span>A Digital Agency</span>
                    <h1>We're a full-range digital agency.</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>

                    <Link href="/contact">
                      <a className="btn btn-primary">Get Started</a>
                    </Link>

                    <Link href="#play-video">
                      <a
                        onClick={() => setToggler(!toggler)}
                        className="btn btn-secondary"
                      >
                        <i className="fa-solid fa-play me-1"></i> How it works
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="banner-animation-image">
                    {/* Shape Image */}
                    <img
                      src="/images/banner-shapes/bn-shape1.png"
                      className="animate__animated animate__fadeInUp animate__delay-0.5s"
                      alt="image"
                    />

                    <img
                      src="/images/banner-shapes/bn-shape2.png"
                      className="animate__animated animate__fadeInLeft animate__delay-0.5s"
                      alt="image"
                    />

                    <img
                      src="/images/banner-shapes/bn-shape3.png"
                      className="animate__animated animate__fadeInDown animate__delay-0.5s"
                      alt="image"
                    />

                    <img
                      src="/images/banner-shapes/bn-shape4.png"
                      className="animate__animated animate__fadeInDown animate__delay-0.5s"
                      alt="image"
                    />

                    <img
                      src="/images/banner-shapes/bn-shape5.png"
                      className="animate__animated animate__fadeInUp animate__delay-0.5s"
                      alt="image"
                    />

                    <img
                      src="/images/banner-shapes/bn-shape6.png"
                      className="animate__animated animate__rollIn animate__delay-0.5s"
                      alt="image"
                    />

                    <img
                      src="/images/banner-shapes/bn-shape7.png"
                      className="animate__animated animate__zoomIn animate__delay-0.5s"
                      alt="image"
                    />

                    <img
                      src="/images/banner-shapes/bn-shape8.png"
                      className="animate__animated animate__fadeInLeft animate__delay-0.5s"
                      alt="image"
                    />

                    <img
                      src="/images/banner-shapes/bn-shape9.png"
                      className="animate__animated animate__fadeInUp animate__delay-0.5s"
                      alt="image"
                    />

                    <img
                      src="/images/banner-shapes/bn-shape10.png"
                      className="animate__animated animate__fadeInDown animate__delay-0.5s"
                      alt="image"
                    />

                    <img
                      src="/images/banner-shapes/bn-shape11.png"
                      className="animate__animated animate__fadeInUp animate__delay-0.5s"
                      alt="image"
                    />

                    <img
                      src="/images/banner-shapes/bn-shape12.png"
                      className="animate__animated animate__zoomIn animate__delay-0.5s"
                      alt="image"
                    />

                    {/* Main Image */}
                    <img
                      src="/images/banner-img1.png"
                      className="main-pic animate__animated animate__fadeInUp animate__delay-0.5s"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		</>
  );
}

export default MainBanner;