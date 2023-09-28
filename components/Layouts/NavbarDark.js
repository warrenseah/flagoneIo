import React from "react";
import Link from "../../utils/ActiveLink";

const NavbarTwo = () => {
  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-2">
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container-fluid">
            <Link legacyBehavior href="/" className="navbar-brand">
                <img
                  src="/images/f1logo.png"
                  className="black-logo"
                  alt="logo"
                />
                <img
                  src="/images/f1logo-white.png"
                  className="white-logo"
                  alt="logo"
                />
            </Link>

            {/* Toggle navigation */}
            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link legacyBehavior href="/#home" className="nav-link">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link legacyBehavior href="/#aboutUs" activeClassName="active" className="nav-link">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link legacyBehavior href="/#ourWorks" className="nav-link">
                    Portfolio
                  </Link>
                </li>

                <li className="nav-item">
                  <Link legacyBehavior href="/services" className="nav-link">
                    Services
                  </Link>
                </li>

                <li className="nav-item">
                  <Link legacyBehavior href="/contact" activeClassName="active" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavbarTwo;
