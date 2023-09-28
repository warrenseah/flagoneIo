import React from "react";
import Link from "next/link";

const ourWorksData = [
  {
    image: "/images/case-studies/studie1.jpg",
    shapeImage: "/images/case-studies/studie-shape1.png",
    title: "Designing a better cinema experience",
    category: "Web Design",
    viewDetails: "/portfolio-details",
    aosDelay: "100",
  },
  {
    image: "/images/case-studies/studie2.jpg",
    shapeImage: "/images/case-studies/studie-shape2.png",
    title: "Building design process within teams",
    category: "Development",
    viewDetails: "/portfolio-details",
    aosDelay: "200",
  },
  {
    image: "/images/case-studies/studie3.jpg",
    shapeImage: "/images/case-studies/studie-shape3.png",
    title: "How intercom brings play into their design process",
    category: "Web Development",
    viewDetails: "/portfolio-details",
    aosDelay: "300",
  },
  {
    image: "/images/case-studies/studie4.jpg",
    shapeImage: "/images/case-studies/studie-shape4.png",
    title: "Stuck with to-do list, I created a new app for myself",
    category: "React Development",
    viewDetails: "/portfolio-details",
    aosDelay: "400",
  },
  {
    image: "/images/case-studies/studie5.jpg",
    shapeImage: "/images/case-studies/studie-shape5.png",
    title: "Examples of different types of sprints",
    category: "Angular Development",
    viewDetails: "/portfolio-details",
    aosDelay: "500",
  },
  {
    image: "/images/case-studies/studie6.jpg",
    shapeImage: "/images/case-studies/studie-shape6.png",
    title: "Redesigning the New York times app",
    category: "App Development",
    viewDetails: "/portfolio-details",
    aosDelay: "600",
  },
];

const OurWorks = () => {
  return (
    <>
      <section className="case-studies-area ptb-100 bg-fcfbfb">
        <div className="container">
          <div className="section-title">
            <h2>Our Works</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            {ourWorksData &&
              ourWorksData.slice(0, 6).map((value, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div
                    className="single-case-studies text-center"
                    style={{
                      backgroundImage: `url(${value.image})`,
                    }}
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="content">
                      <span>
                        <Link href={value.viewDetails}>{value.category}</Link>
                      </span>
                      <h3>
                        <Link href={value.viewDetails}>{value.title}</Link>
                      </h3>
                    </div>

                    <Link href={value.viewDetails} className="btn btn-primary">
                      View Case Study
                    </Link>

<<<<<<< HEAD
                  <h3>
                    <Link legacyBehavior href="/portfolio-details">
                      <a>Designing a better cinema experience</a>
                    </Link>
                  </h3>
                </div>

                <Link legacyBehavior href="/portfolio-details">
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
                className="single-case-studies text-center"
                style={{ 
                  backgroundImage: `url(/images/case-studies/studie2.jpg)` 
                }}
              >
                <div className="content">
                  <span>
                    <Link legacyBehavior href="/portfolio">
                      <a>App Development</a>
                    </Link>
                  </span>

                  <h3>
                    <Link legacyBehavior href="/portfolio-details">
                      <a>Building design process within teams</a>
                    </Link>
                  </h3>
                </div>

                <Link legacyBehavior href="/portfolio-details">
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
                className="single-case-studies text-center"
                style={{ 
                  backgroundImage: `url(/images/case-studies/studie3.jpg)` 
                }}
              >
                <div className="content">
                  <span>
                    <Link legacyBehavior href="/portfolio">
                      <a>React Development</a>
                    </Link>
                  </span>

                  <h3>
                    <Link legacyBehavior href="/portfolio-details">
                      <a>How intercom brings play into their design process</a>
                    </Link>
                  </h3>
                </div>

                <Link legacyBehavior href="/portfolio-details">
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
                className="single-case-studies text-center"
                style={{ 
                  backgroundImage: `url(/images/case-studies/studie4.jpg)` 
                }}
              >
                <div className="content">
                  <span>
                    <Link legacyBehavior href="/portfolio">
                      <a>Web Development</a>
                    </Link>
                  </span>

                  <h3>
                    <Link legacyBehavior href="/portfolio-details">
                      <a>
                        Stuck with to-do list, I created a new app for myself
                      </a>
                    </Link>
                  </h3>
                </div>

                <Link legacyBehavior href="/portfolio-details">
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

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <div 
                className="single-case-studies text-center"
                style={{ 
                  backgroundImage: `url(/images/case-studies/studie5.jpg)` 
                }}
              >
                <div className="content">
                  <span>
                    <Link legacyBehavior href="/portfolio">
                      <a>Angular Development</a>
                    </Link>
                  </span>

                  <h3>
                    <Link legacyBehavior href="/portfolio-details">
                      <a>Examples of different types of sprints</a>
                    </Link>
                  </h3>
                </div>

                <Link legacyBehavior href="/portfolio-details">
                  <a className="btn btn-primary">View Case Study</a>
                </Link>

                <div className="shape">
                  <img
                    src="/images/case-studies/studie-shape5.png"
                    alt="logo"
                  />
                </div>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div 
                className="single-case-studies text-center"
                style={{ 
                  backgroundImage: `url(/images/case-studies/studie6.jpg)` 
                }}
              >
                <div className="content">
                  <span>
                    <Link legacyBehavior href="/portfolio">
                      <a>Web Design</a>
                    </Link>
                  </span>

                  <h3>
                    <Link legacyBehavior href="/portfolio-details">
                      <a>Redesigning the New York times app</a>
                    </Link>
                  </h3>
                </div>

                <Link legacyBehavior href="/portfolio-details">
                  <a className="btn btn-primary">View Case Study</a>
                </Link>

                <div className="shape">
                  <img
                    src="/images/case-studies/studie-shape6.png"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="view-more-work">
            <Link legacyBehavior href="/portfolio">
              <a className="btn btn-primary">View More Work</a>
=======
                    <div className="shape">
                      <img
                        src={value.shapeImage}
                        alt="shape Image"
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="view-more-work">
            <Link href="/portfolio" className="btn btn-primary">
              View More Work
>>>>>>> eef434e2f136d3f9419f8b37f167d5b3893fd0a1
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWorks;
