import { useEffect } from 'react';
import addParlx from '../../common/addParlx';

const IntroTxt2 = () => {
  useEffect(() => {
    // Run addParlx or other DOM manipulations
    addParlx();
  
    // Force a repaint by briefly modifying the DOM
    setTimeout(() => {
      document.body.style.display = 'none';
      document.body.offsetHeight; // Accessing offsetHeight forces a reflow
      document.body.style.display = '';
    }, 0);
  }, []);
  

  return (
    <header className="slider simpl fixed-slider bg-img valign" style={{ backgroundImage: "url(/img/slid/academy.png)" }} data-overlay-dark="6">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="caption center mt-50">
              <h6>Book Publisher and Classes</h6>
              <h1>RantAI Academy</h1>
              <p>Academy with GenAI Learning and Tailored Enterprise Solutions.</p>
              <a href="mailto:academy@rantai.dev" className="btn-curve btn-lit mt-40">
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default IntroTxt2;

