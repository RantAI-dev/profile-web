/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const Services5 = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    console.clear();
  }, []);

  return (
    <section className="simpl-intro section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 offset-lg-1 md-mb50">
            <div className="img">
              <img src="/img/intro/trpl.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign">
            <div className="cont">
              <div className="sub-title">
                <h6>Who Are We ?</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="mb-30 fw-700">Leading in <br /> Advanced Education.</h3>
              <p>RantAI Academy delivers advanced education in modern Software, AI, Simulation, and Blockchain, powered by GenAI and Rust language.</p>
              <p>Covering key disciplines like mathematics, physics, chemistry, biology, life sciences, material science, and earth sciences, we emphasize mastery of Numerical, Semi-numerical, Non-numerical, and Quantum algorithms. Whether you&apos;re tackling complex technologies or advancing in scientific computation, RantAI Academy provides the precise tools and expertise to excel.</p>
            </div>
          </div>
        </div>
      </div>
      {
        typeof window !== "undefined" && (
          <ModalVideo
            channel="vimeo"
            autoplay
            isOpen={isOpen}
            videoId="127203262"
            onClose={() => setOpen(false)}
          />
        )
      }
    </section>
  )
}

export default Services5