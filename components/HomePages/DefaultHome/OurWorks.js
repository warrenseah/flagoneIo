import React from "react";
import Link from "next/link";

const OurWorks = () => {
  return (
    <>
      <div className="case-studies-area ptb-100 bg-fcfbfb" id="ourWorks">
        <div className="container">
          <div className="section-title">
            <h2>Our Works</h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div
                className="single-case-studies"
                style={{
                  backgroundImage: `url(/images/case-studies/studie1.jpg)`,
                }}
              >
                <div className="content">
                  <span>
                    <Link href="/portfolio-details">
                      <a>DeFi</a>
                    </Link>
                  </span>
                  <h3>
                    <Link href="/portfolio-details">
                      <a>Bnb Charger</a>
                    </Link>
                  </h3>
                </div>

                <Link href="/portfolio-details">
                  <a className="btn btn-primary">View Case Study</a>
                </Link>

                <div className="shape">
                  <img
                    src="/images/case-studies/studie-shape1.png"
                    alt="logo"
                  />
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div
                className="single-case-studies"
                style={{
                  backgroundImage: `url(/images/case-studies/studie2.jpg)`,
                }}
              >
                <div className="content">
                  <span>
                    <Link href="/portfolio-details">
                      <a>NFT</a>
                    </Link>
                  </span>
                  <h3>
                    <Link href="/portfolio-details">
                      <a>Generative Art NFT Collection</a>
                    </Link>
                  </h3>
                </div>

                <Link href="/portfolio-details">
                  <a className="btn btn-primary">View Case Study</a>
                </Link>

                <div className="shape">
                  <img
                    src="/images/case-studies/studie-shape2.png"
                    alt="logo"
                  />
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div
                className="single-case-studies"
                style={{
                  backgroundImage: `url(/images/case-studies/studie3.jpg)`,
                }}
              >
                <div className="content">
                  <span>
                    <Link href="/portfolio-details">
                      <a>dApp Development</a>
                    </Link>
                  </span>
                  <h3>
                    <Link href="/portfolio-details">
                      <a>
                        Linking website with the blockchain and smart contracts
                      </a>
                    </Link>
                  </h3>
                </div>

                <Link href="/portfolio-details">
                  <a className="btn btn-primary">View Case Study</a>
                </Link>

                <div className="shape">
                  <img
                    src="/images/case-studies/studie-shape3.png"
                    alt="logo"
                  />
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div
                className="single-case-studies"
                style={{
                  backgroundImage: `url(/images/case-studies/studie4.jpg)`,
                }}
              >
                <div className="content">
                  <span>
                    <Link href="/portfolio-details">
                      <a>React Development</a>
                    </Link>
                  </span>
                  <h3>
                    <Link href="/portfolio-details">
                      <a>Backend and Frontend Development with NextJs</a>
                    </Link>
                  </h3>
                </div>

                <Link href="/portfolio-details">
                  <a className="btn btn-primary">View Case Study</a>
                </Link>

                <div className="shape">
                  <img
                    src="/images/case-studies/studie-shape4.png"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="view-more-work">
            <Link href="/portfolio">
              <a className="btn btn-primary">View More Work</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurWorks;
