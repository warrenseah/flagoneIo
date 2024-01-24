import React from "react";
import Head from "next/head";
import NavbarDark from "../components/Layouts/NavbarDark";
import PageBanner from "../components/Common/PageBanner";
import CtaAreaTwo from "../components/Common/CtaAreaTwo";
import Footer from "../components/Layouts/Footer";
import Link from "next/link";
import PortfolioImages from "../components/Portfolio/PortfolioDetailsImages";

const dappDev = () => {
  return (
    <>
      <Head>
        <title>FlagOne | Multi Sig Wallet dApp Page</title>
        <meta
          name="description"
          content="Multi Sig Wallet dApp showcase how anyone can create a joint wallet onchain to deploy funds to recipents upon members' approval."
        />
      </Head>
      <NavbarDark />

      <PageBanner
        pageTitle="Multi Sig Wallet dApp"
        BGImage="/images/page-banner2.jpg"
      />

      <div className="portfolio-details ptb-100">
        <div className="container">
          <PortfolioImages
            colOneImages={[
              {
                src: "/images/portfolio/multisig-wallet-1.jpg",
                alt: "multisig wallet 1",
                height: "350",
                width: "480",
              },
              {
                src: "/images/portfolio/multisig-wallet-7.jpg",
                alt: "multisig wallet 7",
                height: "350",
                width: "480",
              }
            ]}
            colTwoImages={[
              {
                src: "/images/portfolio/multisig-wallet-10.jpg",
                alt: "multisig wallet 10",
                height: "700",
                width: "480",
              }
            ]}
            colThreeImages={[
              {
                src: "/images/portfolio/multisig-wallet-6.jpg",
                alt: "multisig wallet 6",
                height: "350",
                width: "480",
              },
              {
                src: "/images/portfolio/multisig-wallet-11.jpg",
                alt: "multisig wallet 11",
                height: "350",
                width: "480",
              },
            ]}
          />

          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-desc">
                <h2>kryptoTree NFT</h2>
                <p>
                  Non Fungible Tokens (NFT) are on the rise. The kryptoTree NFT
                  collection consists of 10,000 different variation of trees
                  bearing fruits. Each of the tree's artwork file and their
                  randomly generated attributes are stored in decentralized
                  storage. You will be able to see the NFT owner by calling the
                  ERC-721 smart contract.
                </p>

                <h2>Core Development</h2>
                <p>
                  A nodeJS generative art code repo is coded to define the
                  number of attributes the artwork should have. The number of
                  variant for each attribute will then be provided into the code
                  repo. The code repo is executed to generate 10,000 different
                  variants of the kryptoTrees. The 10,000 artworks are named and
                  properly stored into decentralized storage like IPFS. An
                  ERC721 smart contract is customized to collect a minting fee
                  and to ensure the artwork files, attribute file in json and
                  the all necessary information relating to individual artwork
                  are issued with an NFT id for minting later.
                </p>

                <h2>Putting a Minting dApp Together</h2>
                <p>
                  When the digital artwork files are ready and ERC721
                  openzeppelin contract are deployed, a frontend website powered
                  by ReactJS is developed and designed. User will be able to
                  interact with the smart contract via Metamask browser
                  extension to mint the NFT. Each user is allowed to mint up to
                  a maximum of 10 kryptoTrees per wallet address controlled by
                  the deployed smart contract.
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
                        href="https://github.com/warrenseah/kryptoTreesNft/tree/main/contracts"
                        title="kyrptoTrees github"
                        target="_blank"
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </li>
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

                <div className="single-info-link-box">
                  <Link
                    href="https://kryptotrees.com"
                    className="default-btn m-1"
                    target="_blank"
                  >
                    Website Preview
                  </Link>

                  <Link
                    href="https://mint.kryptotrees.com"
                    className="default-btn m-1"
                    target="_blank"
                  >
                    dApp Preview
                  </Link>
                  <Link
                    href="https://polygonscan.com/address/0x660dec2e3a19fb5534afe02b5c115dc4905bc9f9"
                    className="default-btn m-1"
                    target="_blank"
                  >
                    Contract Address (Polygon)
                  </Link>
                  <Link
                    href="https://github.com/warrenseah/kryptoTreesNft/tree/main/contracts"
                    className="default-btn m-1"
                    target="_blank"
                  >
                    Smart Contract Github
                  </Link>
                  <Link
                    href="https://github.com/coollif3/nftArtEngine"
                    className="default-btn m-1"
                    target="_blank"
                  >
                    Generative Art Engine Github
                  </Link>
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

export default dappDev;
