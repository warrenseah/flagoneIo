import React from "react";
import Image from "next/image";

const PortfolioDetailsImages = ({
  colOneImages,
  colTwoImages,
  colThreeImages,
  colFourImages
}) => {
  return (
    <div className="row m-0">
      <div className="col-lg-4 col-md-6 p-0">
        {colOneImages.map((coi, i) => {
          return (
            <div key={i} className="portfolio-details-image">
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
        {colTwoImages.map((cti, i) => {
          return (
            <div key={i} className="portfolio-details-image">
              <Image {...cti} />
            </div>
          );
        })}
      </div>

      <div className="col-lg-4 col-md-12 p-0">
        {/* <div className="row">
          {colThreeImages.map((cti, i) => {
            return (
              <div key={i} className="col-lg-12 col-md-6 pr_0">
                <div key={i} className="portfolio-details-image">
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
        </div> */}
        <div className="row">
          <div className="col-lg-12 col-md-6 pr_0">
            {colThreeImages.map((cti, i) => {
              return (
                <div key={i} className="portfolio-details-image">
                  <Image
                    {...cti}
                    sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                  />
                </div>
              );
            })}
          </div>
          <div className="col-lg-12 col-md-6 pl_0">
            {colFourImages.map((cfi, i) => {
              return (
                <div key={i} className="portfolio-details-image">
                  <Image
                    {...cfi}
                    sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      33vw"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsImages;
