import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>What is our mission ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                At RantAI, our mission is to empower businesses with advanced technology 
                tools and platforms tailored for digital twin technologies. We enhance 
                decision-making and reduce uncertainty through AI-automated, smart solutions 
                that deliver precise digital simulations of real-world systems. By integrating 
                physical laws, quantum algorithms with AI-driven models, we enable companies to 
                predict, optimize, and innovate with unparalleled efficiency. Our goal is to 
                democratize access to these transformative technologies, allowing businesses of 
                all sizes to thrive with fewer resources and smarter, automated solutions.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
