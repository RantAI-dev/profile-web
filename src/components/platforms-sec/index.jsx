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

const AboutUs2 = ({ skillsTheme }) => {
  const cpStyle = {
    path: {
      stroke: "#5cb6f9",
    },
    trail: {
      stroke: skillsTheme
        ? skillsTheme == "dark"
          ? "#0f1218"
          : "#e5e5e5"
        : "",
    },
    text: {
      fill: skillsTheme ? (skillsTheme == "dark" ? "#ffffff" : "#4e4e4e") : "",
      fontSize: "16px",
    },
  };
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="content">
              <div className="sub-title">
                <h6>About Us</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Split>
                <h3
                  className="co-tit custom-font wow words chars splitting"
                  data-splitting
                >
                RantAI drives bold innovation, bringing fresh perspectives and cutting-edge expertise to transform your business.

                </h3>
              </Split>
              <p className="wow fadeInUp" data-wow-delay=".4s">
              RantAI&apos;s scientific technology consulting services provide tailored solutions for legacy app modernization, software performance optimization, full-stack software development, and advanced machine learning engineering and operations.
              </p>
              <p className="mt-10 wow fadeInUp" data-wow-delay=".4s">
              We specialize in revitalizing outdated applications, enhancing software security and performance, and delivering comprehensive machine learning engineering (MLEng) and operations (MLOps) to meet your business needs.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="blc-img">
              <div className="bimg wow imago">
                <img src="/img/intro/3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


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

const Services3 = () => {
  return (
    <section className="services section-padding sub-bg" style={{ color: '#fff' }}>
      <div className="container">
        <div className="sec-head custom-font tr-head" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h6>Our Expertise</h6>
          <h3 style={{ fontSize: '2.5em' }}>Specialized Services</h3>
          <span className="tbg">Services</span>
        </div>
        <div className="row">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s" style={{ marginBottom: '20px' }}>
            <div className="step-item" style={{ textAlign: 'center' }}>
              <span className="icon pe-7s-refresh-2" style={{ fontSize: '3em' }}></span>
              <h6 style={{ fontSize: '1.5em', marginTop: '10px' }}>Legacy App Modernization</h6>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-cogs" style={{ marginRight: '10px' }}></i>
                  <p style={{ margin: 0, whiteSpace: 'nowrap' }}>Human In-Loop Multi-Agents AI Coder</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-file-alt" style={{ marginRight: '10px' }}></i>
                  <p style={{ margin: 0, whiteSpace: 'nowrap' }}>Existing Source Codes and Documentations</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-check-square" style={{ marginRight: '10px' }}></i>
                  <p style={{ margin: 0, whiteSpace: 'nowrap' }}>New Codes and Algorithms Based on Rust</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".6s" style={{ marginBottom: '20px' }}>
            <div className="step-item" style={{ textAlign: 'center' }}>
              <span className="icon pe-7s-display2" style={{ fontSize: '3em' }}></span>
              <h6 style={{ fontSize: '1.5em', marginTop: '10px' }}>Full Stack Software Development</h6>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-cogs" style={{ marginRight: '10px' }}></i>
                  <p style={{ margin: 0, whiteSpace: 'nowrap' }}>Human In-Loop AI Multi-Agents AI Developers</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-file-alt" style={{ marginRight: '10px' }}></i>
                  <p style={{ margin: 0, whiteSpace: 'nowrap' }}>Figma Design</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-check-square" style={{ marginRight: '10px' }}></i>
                  <p style={{ margin: 0, whiteSpace: 'nowrap' }}>Full Stack Applications Based on Rust</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".6s" style={{ marginBottom: '20px' }}>
            <div className="step-item" style={{ textAlign: 'center' }}>
              <span className="icon pe-7s-rocket" style={{ fontSize: '3em' }}></span>
              <h6 style={{ fontSize: '1.5em', marginTop: '10px' }}>Software Security and Performance Optimization</h6>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-cogs" style={{ marginRight: '10px' }}></i>
                  <p style={{ margin: 0, whiteSpace: 'nowrap' }}>Human In-Loop Multi-Agents AI Optimizer </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-file-alt" style={{ marginRight: '10px' }}></i>
                  <p style={{ margin: 0, whiteSpace: 'nowrap' }}>Existing Source Codes or Compiled Binaries</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-check-square" style={{ marginRight: '10px' }}></i>
                  <p style={{ margin: 0, whiteSpace: 'nowrap' }}>New Codes and Algorithms Based on Rust</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".6s" style={{ marginBottom: '20px' }}>
            <div className="step-item" style={{ textAlign: 'center' }}>
              <span className="icon pe-7s-cloud" style={{ fontSize: '3em' }}></span>
              <h6 style={{ fontSize: '1.5em', marginTop: '10px' }}>Multi-Cloud ML Engineering and ML Operations</h6>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-cogs" style={{ marginRight: '10px' }}></i>
                  <p style={{ margin: 0, whiteSpace: 'nowrap' }}>Human In-Loop Multi-Agents MLEng and MLOps AI Optimizer </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-file-alt" style={{ marginRight: '10px' }}></i>
                  <p style={{ margin: 0, whiteSpace: 'nowrap' }}>Machine Learning and Deep Learning Models</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-check-square" style={{ marginRight: '10px' }}></i>
                  <p style={{ margin: 0, whiteSpace: 'nowrap' }}>CPU/GPU/TPU Optimized Model Serving for Inference</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
            <Link href="mailto:services@rantai.dev">
              <a
                className={`btn-curve ${theme === "light" ? "btn-blc" : "btn-lit"} wow fadeInUp`}
                data-wow-delay=".5s"
              >
                <span>EMAIL US</span>
                <p>services@rantai.dev</p>
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
                      <i className={social.icon+" fa-2x"}></i>
                    </a>
                  </Link>
                ))
              }
              {/* <Link href="https://linkedin.com/company/rantai-dev">
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
              </Link> */}
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
          <h4>What are the key features?</h4>
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

export default { Header, AboutUs2, Services3, CallToAction, MinimalArea, AboutIntro };