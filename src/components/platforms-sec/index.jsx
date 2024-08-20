import React from "react";
import addParlx from "../../common/addParlx";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Split from "../Split";
import { CircularProgressbar } from "react-circular-progressbar";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import "react-circular-progressbar/dist/styles.css";
import socialsData from '../../data/sections/socials.json'


const Header = ({ sliderRef }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      addParlx()
    }
  }, [pageLoaded])
  return (
    <header ref={sliderRef} className="works-header fixed-slider hfixd valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11 static">
            <div className="capt mt-50">
              <div className="parlx">
                <h2 className="custom-font">
                  <span>Digital Twin Platform</span> RantAI Platforms
                </h2>
                <p>
                  Custom tech consulting for modernizing legacy apps, optimizing software performance, and advancing machine learning operations.
                </p>
              </div>

              <div className="bactxt custom-font valign">
                <span className="full-width">PLATFORMS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

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

          <div className="col-md-4 col-lg-3 valign text-center">
            <Link href="mailto:contacts@rantai.dev">
              <a
                className={`btn-curve ${theme === "light" ? "btn-blc" : "btn-lit"} wow fadeInUp`}
                data-wow-delay=".5s"
              >
                <span>EMAIL US</span>
                <p>contacts@rantai.dev</p>
              </a>
            </Link>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <p className="text-center mb-3">Or Connect with Us via:</p>
            <div className="social-links d-flex justify-content-center">
              {
                socialsData.map((social, index) => (
                  <Link key={index} href={social.link}>
                    <a className="mx-2" aria-label="Instagram">
                      <i className={social.icon + " fa-2x"}></i>
                    </a>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img wow">
              <img
                className="thumparallax-down"
                src="/img/rantai-platforms.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting "
                  data-splitting
                >
                  About Us.
                </h4>
              </Split>
              <Split>
                <p className="wow fadeInUp" data-wow-delay=".4s" data-splitting>
                  We empower scientists worldwide to make the impossible possible
                  with our Rust-based open-source technology platform. RantAI&apos;s
                  digital twin platform offers a complete suite for interactive
                  scientific simulations, integrating real-time data from RDBMS,
                  VectorDB, and blockchain storages. It supports diverse models,
                  including machine learning (ML), deep learning (DL), agent-based
                  (ABM) models, and quantum machine learning (QML).</p>
              </Split>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0" style={{ minHeight: '400px', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>What are our key features?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  The platform features Rust crates for robust performance, an interactive
                  playground for experimentation, and advanced tools for visualization,
                  debugging, prompt generation, annotation, testing, and monitoring,
                  ensuring a streamlined workflow for scientific and technological
                  advancements.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default { Header, CallToAction, MinimalArea, AboutIntro };