import React from "react";
import Image from "next/image";

const PortfolioDetailsImages = ({
  colOneImages,
  colTwoImages,
  colThreeImages,
}) => {
  return (
    <div className="row m-0">
      <div className="col-lg-4 col-md-6 p-0">
        {colOneImages.map((coi) => {
          return (
            <div className="portfolio-details-image">
              <Image
                {...coi}
                sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
              />
            </div>
          );
        })}
      </div>

      <div className="col-lg-4 col-md-6 p-0">
        {/* <div className="portfolio-details-image">
          <Image
            src="/images/portfolio/multisig-wallet-10.jpg"
            alt="another painting image"
            width="480"
            height="700"
          />
        </div> */}
        {colTwoImages.map((cti) => {
          return (
              <div className="portfolio-details-image">
                <Image {...cti} />
              </div>
          );
        })}
      </div>

      <div className="col-lg-4 col-md-12 p-0">
        <div className="row">
          {colThreeImages.map((cti) => {
            return (
              <div className="col-lg-12 col-md-6 pr_0">
                <div className="portfolio-details-image">
                  <Image
                    {...cti}
                    sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsImages;
