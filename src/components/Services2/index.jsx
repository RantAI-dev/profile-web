import React from "react";
import Link from "next/link";

const Services2 = () => {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="row rone">
          <div className="col-lg-3 wow fadeInUp" data-wow-delay=".4s">
            <div className="mas-item">
              <span className="icon pe-7s-monitor"></span>
              <h6>
                Software <br /> Development
              </h6>
              <div className="text-right">
                {/* <Link href="/about/about-dark"> */}
                <Link href="#">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-camera"></span>
              <h6>
              Digital <br /> Simulation
              </h6>
              <div className="text-right">
                {/* <Link href="/about/about-dark"> */}
                <Link href="#">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-phone"></span>
              <h6>
              Tech <br /> Consulting
              </h6>
              <div className="text-right">
                {/* <Link href="/about/about-dark"> */}
                <Link href="#">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
        </div>
        <div className="row rtwo">
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-help2"></span>
              <h6>
                IT <br /> Optimization
              </h6>
              <div className="text-right">
                {/* <Link href="/about/about-dark"> */}
                <Link href="#">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-diskette"></span>
              <h6>
                Data <br /> Solutions
              </h6>
              <div className="text-right">
                {/* <Link href="/about/about-dark"> */}
                <Link href="#">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div>
            </div>
          </div>
          <div
            className="col-lg-3 offset-lg-1 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="mas-item">
              <span className="icon pe-7s-arc"></span>
              <h6>
                Client <br /> Innovation
              </h6>
              <div className="text-right">
                {/* <Link href="/about/about-dark"> */}
                <Link href="#">
                  <a className="more">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </Link>
              </div>
              <div className="bg-color"></div> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;
