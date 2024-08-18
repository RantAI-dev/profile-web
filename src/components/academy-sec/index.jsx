import React from "react";
import Split from "../Split";
import Link from "next/link";

const CallToAction = ({ img, theme, subBG }) => {
  return (
    <section
      className={`call-action section-padding ${subBG ? "sub-bg" : ""} bg-img`}
      style={{ backgroundImage: `url(${img ? img : "/img/pattern.png"})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="content sm-mb30">
              <Split>
              <h6 className="wow words chars splitting" data-splitting>
                  Let&apos;s Talk
                </h6>
                <h2
                  className="wow words custom-font chars splitting"
                  data-splitting
                >
                  about your <b>next project</b>.
                </h2>
              </Split>
            </div>
          </div>

          <div className="col-md-4 col-lg-3 valign">
            <Link href="mailto:academy@rantai.dev">
              <a
                className={`btn-curve ${theme === "light" ? "btn-blc" : "btn-lit"} wow fadeInUp`}
                data-wow-delay=".5s"
              >
                <span>EMAIL US</span>
                <p>academy@rantai.dev</p>
              </a>
            </Link>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <p className="text-center mb-3">Or Connect with Us via:</p>
            <div className="social-links d-flex justify-content-center">
              <Link href="https://linkedin.com/company/rantai-dev">
                <a className="mx-2" aria-label="LinkedIn">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </Link>
              <Link href="https://instagram.com/rantaidev">
                <a className="mx-2" aria-label="Instagram">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </Link>
              <Link href="https://t.me/rustindo">
                <a className="mx-2" aria-label="Telegram">
                  <i className="fab fa-telegram fa-2x"></i>
                </a>
              </Link>
              <Link href="https://youtube.com/@RantAI-dev">
                <a className="mx-2" aria-label="YouTube">
                  <i className="fab fa-youtube fa-2x"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Enterprise = () => {
  return (
    <section className="blc-sec section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="intro md-mb30">
              <div className="sub-title">
                <h6>Enterprise Options</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h2
                  className="extra-title wow words chars splitting"
                  data-splitting
                >
                  RantAI Academy <br/> for Enterprises
                </h2>
              </Split>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="full-width">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  We offer domain-specific, customized books tailored for scientists and engineers in various industries. Our comprehensive resources include a GenAI prompts catalog, specialized use cases, and well-tested sample codes, all designed to meet the unique needs of your industry and empower your teams with practical, cutting-edge knowledge.
                </p>
              </Split>
              {/* <Split>
                <Link href="/about/about-dark">
                  <a
                    className="simple-btn custom-font mt-20 wow words chars splitting"
                    data-splitting
                  >
                    <span>Know More</span>
                  </a>
                </Link>
              </Split> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default {CallToAction,Enterprise};