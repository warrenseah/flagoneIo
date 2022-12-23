import React from "react";
import SinglePageNavBarDark from "../components/Layouts/SinglePageNavbarDark";
import PageBanner from "../components/Common/PageBanner";
import PortfolioDetailsContent2 from "../components/Portfolio/PortfolioDetailsContent2";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";

const PortfolioDetails2 = () => {
  return (
    <>
      <SinglePageNavBarDark />

      <PageBanner
        pageTitle="Generative Art NFT Collection"
        BGImage="/images/page-banner2.jpg"
      />

      <div className="portfolio-details ptb-100">
        <div className="container">
          <div className="row m-0">
            <div className="col-lg-4 col-md-6 p-0">
              <div className="portfolio-details-image">
                <img src="/images/portfolio/portfolio1.jpg" alt="image" />
              </div>

              <div className="portfolio-details-image">
                <img src="/images/portfolio/portfolio2.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="portfolio-details-image">
                <img src="/images/portfolio/portfolio3.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-4 col-md-12 p-0">
              <div className="row">
                <div className="col-lg-12 col-md-6 pr_0">
                  <div className="portfolio-details-image">
                    <img src="/images/portfolio/portfolio4.jpg" alt="image" />
                  </div>
                </div>
                <div className="col-lg-12 col-md-6 pl_0">
                  <div className="portfolio-details-image">
                    <img src="/images/portfolio/portfolio5.jpg" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-desc">
                <h2>We Provide NFT Related Services</h2>
                <p>
                  Non Fungible Tokens (NFT) are on the rise. Currently, users
                  that are interested in non-fungible tokens primarily think of
                  them as digital art (jpegs) or collectibles. In the near
                  future, NFT’s will change the way creatives create, distribute
                  and own their digital content. We predict that NFT's utility
                  will branch off to include even more digital content such as
                  music and movie industries.
                </p>

                <h2>Core Development</h2>
                <p>
                  We provide custom coding support for ERC-721, ERC-1155 and
                  other OpenZeppelin token standards. Generative art makes use
                  of machine learning and algorithmic tools to produce unique,
                  unpredictable art. NFTs are cryptographic tokens used to
                  represent unique digital assets stored on a blockchain. Unless
                  something catastrophic happens and the Internet shuts down,
                  digital assets stored on a blockchain are permanent and
                  immutable. Each token has unique metadata that distinguishes
                  it from other tokens, ensuring it can’t be changed or forged.
                  The generated digital art files will be stored on
                  decentralized storage and pull from the blockchain smart
                  contract whenever someone request for the art.
                </p>

                <h2>Define Your Choices</h2>
                <p>
                  Generative art or unique art on the blockchain? You decide. We
                  are here to help you expand your creative juice into the
                  digital world. By launching digital content with property tied
                  to a blockchain network, you ensure all future credit and
                  royalties be tied back to the rightful owner. By working on
                  expanding your digital reach now, you are positioning yourself
                  for the upcoming digital asset economy.
                </p>
              </div>

              <div className="service-details-info">
                <div className="single-info-box">
                  <h4>Client</h4>
                  <span>Real Herbs</span>
                </div>

                <div className="single-info-box">
                  <h4>Category</h4>
                  <span>NFT, Generative Art</span>
                </div>

                <div className="single-info-box">
                  <h4>Date</h4>
                  <span>October 28, 2021</span>
                </div>

                <div className="single-info-box">
                  <h4>Share</h4>
                  <ul className="social">
                    <li>
                      <a
                        href="https://www.facebook.com/kryptotrees"
                        title="kyrptoTrees fb"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/KryptoTreesNFT"
                        title="kyrptoTrees Twitter"
                        target="_blank"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.gg/EwybaHdp"
                        title="kyrptoTrees Discord"
                        target="_blank"
                      >
                        <i className="fa-brands fa-discord"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-info-box">
                  <a
                    href="https://kryptotrees.com"
                    className="default-btn m-1"
                    target="_blank"
                  >
                    Website Preview
                  </a>
                  <a
                    href="https://polygon.kryptotrees.com"
                    className="default-btn m-1"
                    target="_blank"
                  >
                    dApp Preview
                  </a>
                  <a
                    href="https://polygonscan.com/address/0x660dec2e3a19fb5534afe02b5c115dc4905bc9f9"
                    className="default-btn m-1"
                    target="_blank"
                  >
                    Contract Address (Polygon)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaAreaTwo />

      <Footer />
    </>
  );
};

export default PortfolioDetails2;
