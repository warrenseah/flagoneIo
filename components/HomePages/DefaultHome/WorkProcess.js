import React from "react";

const WorkProcess = () => {
  return (
    <>
      <section className="work-process-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>dApp Development Process</h2>
            <p></p>
          </div>

          <div className="work-process">
            <div
              data-aos="zoom-in"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <img src="/images/man-with-mobile.png" alt="logo" />
            </div>

            <div className="work-process-list">
              <div className="single-work-process">
                <div className="icon">
                  <i className="pe-7s-display1"></i>
                </div>
                <h3>Consulting</h3>
                <span>Business to Blockchain</span>
              </div>

              <div className="single-work-process">
                <div className="icon">
                  <i className="pe-7s-display2"></i>
                </div>
                <h3>WireFraming</h3>
                <span>Architecture Design</span>
              </div>

              <div className="single-work-process">
                <div className="icon">
                  <i className="pe-7s-airplay"></i>
                </div>
                <h3>Smart Contract</h3>
                <span>Development</span>
              </div>

              <div className="single-work-process">
                <div className="icon">
                  <i className="pe-7s-note2"></i>
                </div>
                <h3>Frontend</h3>
                <span>NextJS, ReactJS</span>
              </div>

              <div className="single-work-process">
                <div className="icon">
                  <i className="pe-7s-light"></i>
                </div>
                <h3>Unit Tests</h3>
                <span>Optimize and testing on local and test nets</span>
              </div>

              <div className="single-work-process">
                <div className="icon">
                  <i className="pe-7s-sun"></i>
                </div>
                <h3>Implement</h3>
                <span>Launch on Mainnet</span>
              </div>
            </div>

            <img
              src="/images/circle.png"
              className="rotateme circle-image"
              alt="image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkProcess;
