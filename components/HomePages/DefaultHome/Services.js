import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <div className="bg-fcfbfb pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Flagone is building the future of digital assets</p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="service-card-one">
                <i className="pe-7s-comment bg-13c4a1"></i>
                <h3>
                  <Link href="/service-details">
                    Business to Blockchain Consulting
                  </Link>
                </h3>
                <p>
                  Educate individuals and companies to control their financial
                  and creative "footprint" on Web 3.0.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="service-card-one">
                <i className="pe-7s-display2 bg-6610f2"></i>
                <h3>
                  <Link href="/service-details">
                    dApp Development
                  </Link>
                </h3>
                <p>
                  Empowering web users with an easy user-interface to control
                  their digital assets and identity all within their web
                  browsers.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="service-card-one">
                <i className="pe-7s-light bg-ffb700"></i>
                <h3>
                  <Link href="/service-details">
                    Key Management
                  </Link>
                </h3>
                <p>
                  Delivering an easy-to-start and secure way of managing private
                  keys.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="service-card-one">
                <i className="pe-7s-phone bg-fc3549"></i>
                <h3>
                  <Link href="/service-details">
                    Smart Contract Development
                  </Link>
                </h3>
                <p>
                  Helping you move business logic and data into the public
                  blockchain thereby building more trust and transparency to
                  your business.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <div className="service-card-one">
                <i className="pe-7s-cart bg-00d280"></i>
                <h3>
                  <Link href="/service-details">
                    Crypto Payments
                  </Link>
                </h3>
                <p>
                  Want a non-custodian way to store/accept crypto on the
                  blockchain? We have an easy solution for you.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div className="service-card-one">
                <i className="pe-7s-users bg-ff612f"></i>
                <h3>
                  <Link href="/service-details">
                    Staking
                  </Link>
                </h3>
                <p>
                  Have a revenue idea to implement but needs to raise in the
                  form of cryptocurrencies? Our team will be able to write smart
                  contracts to accept crypto and channel the crypto to the
                  necessary business logic to generate the yield with all
                  contributors' fully accounted on-chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
