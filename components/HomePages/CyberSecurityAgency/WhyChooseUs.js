import React from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
      <div className="cs-choose-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="cs-choose-content">
                <span className="sub-title">WHY CHOOSE US</span>
                <h3>
                  Reduce Attacker Time With Early Detection & Derailment Of
                  In-network Threats
                </h3>
                <p>
                  We work hand-in-hand with industry-leading brands to help
                  redefine the possibilities and potential of digital
                  engagements We work hand-in-hand with industry-leading brands
                  to help redefine the possibilities and potential.
                </p>

                <ul className="list">
                  <li>
                    <i className="fa-solid fa-check"></i> Premium Services And
                    Beyond Your Expectation.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> World Class Cyber
                    Security Tech.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i> Quick Alert With Auto
                    Action & Low Maintenance.
                  </li>
                </ul>
                <div className="choose-btn">
                  <Link legacyBehavior href="/contact">
                    <a className="default-btn-two">
                      Get Started <i className="fa-solid fa-chevron-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="cs-choose-image">
                <img src="/images/cyber-security/choose.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
