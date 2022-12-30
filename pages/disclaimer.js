import React from "react";
import Link from "next/link";
import NavbarDark from "../components/Layouts/NavbarDark";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

const Disclaimer = () => {
  return (
    <>
      <NavbarDark />

      <PageBanner pageTitle="Disclaimer" BGImage="/images/page-banner2.jpg" />

      <div className="text-container ptb-100">
        <div className="container">
          <h4>No Investment Advice</h4>
          <p>
            The service rendered may include ownership of cryptocurrencies. Any
            cryptocurrencies ownership should not be construed as investment
            advice, financial advice, trading advice, or any other sort of
            advice. You should not treat any of the service rendered as such.
            Flag One does not recommend any cryptocurrency should be bought,
            sold, or held by you. Do conduct your own due diligence and consult
            your financial advisor before making any cryptocurrency decisions.
          </p>

          <h4>Accuracy of Information</h4>

          <p>
            Flag One will strive to ensure accuracy of information listed on
            this website although it will not hold any responsibility for any
            missing or wrong information. Flag One provides all information as
            is. You understand that you are using any and all information
            available here at your own risk.
          </p>
          <h4>Cryptocurrency Price Risk</h4>
          <p>
            The price of cryptocurrencies are highly volatile. It is common for
            prices to increase or decrease by 20-40% in any single day.
            Cryptocurrency ownership may not be suitable for everyone.
          </p>
          <h4>No Affiliation to Any Cryptocurrency</h4>

          <p>
            Flag One is not affiliated in any manner with any cryptocurrency.
            Flag One simply collects all the data required to quantitatively and
            qualitatively rank the potential of cryptocurrencies using our very
            own metrics and algorithm.
          </p>

          <h4>General</h4>

          <p>
            Flag One is an technological service provider that build solutions
            with cryptocurrencies on the blockchain. No content on the site
            constitutes – or should be understood as constituting – a
            recommendation to enter into any securities transactions or to
            engage in any crypto trading strategies presented. Flag One may
            offer specific cryptocurrencies ownership based on their tech
            utility and not based on their price which is highly
            speculative/volatile in nature. That means owning cryptocurrencies
            will have high chance of a loss in value due to the volatility.
          </p>

          <p>
            The website and services include and/or may include advertisements
            and links to external sites and co-branded pages or promote websites
            or services from other companies or offer you the ability to
            download software or content from other companies in order to
            provide you with access to information and services which you may
            find useful or interesting. Flag One does not endorse such sites nor
            approve any content, information, legal or illegal emails (whether
            spam emails or not), goods or services provided by them. Flag One is
            not responsible for and does not control those websites, services,
            emails, content and software and cannot accept any responsibility or
            liability for any loss or damage suffered by you as a result of your
            use of its website and services or of such external and/or
            co-branded sites.
          </p>
          <p>
            Flag One is unable to exercise control over the security or content
            of information passing over the network, and Flag One hereby
            excludes all liability of any kind for the transmission or reception
            of infringing or unlawful information of whatever nature.
          </p>
          <p>
            Flag One accepts no liability for loss or damage suffered by you as
            a result of accessing the website and/or its services which contains
            any virus or which has been maliciously corrupted.
          </p>
          <p>
            This Disclaimer is a simplified version of the full{" "}
            <Link href="/terms-conditions">Terms of Service</Link> governing the
            use of Flag One. The use of this website constitutes an agreement to
            Flag One’s Terms of Service.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Disclaimer;
