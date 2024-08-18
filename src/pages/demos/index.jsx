import React from "react";
import BlcSec from "../../components/Blc-sec";
import CallToAction from "../../components/Call-to-action";
import Clients1 from "../../components/Clients1";
import Footer from "../../components/Footer";
import IntroWithSlider2 from "../../components/Intro-with-slider2";
import Navbar from "../../components/Navbar";
import PortfolioCustomColumn from "../../components/Portfolio-custom-column";
import Services2 from "../../components/Services2";
import SkillsCircle from "../../components/Skills-circle";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import Team1 from "../../components/Team1";
import DarkTheme from "../../layouts/Dark";
import ContactSection from "../../components/Contact-section";
import AboutIntro from "../../components/About-intro";
import MinimalArea from "../../components/Minimal-area";
import Services6 from "../../components/Services6";

const Homepage2 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider2 />
      <MinimalArea />
      <Services6 />
      <AboutIntro />

      {/* <BlcSec /> */}
      {/* <Services2 /> */}
      {/* <VideoWithTestimonials /> */}
      {/* <SkillsCircle theme="dark" subBG /> */}
      {/* <PortfolioCustomColumn column={3} filterPosition="center" hideFilter={true} /> */}
      {/* <Clients1 theme="dark" subBG /> */}
      <Team1 />
      {/* <CallToAction /> */}
      <ContactSection />
      <Footer />
    </DarkTheme>
  );
};

export default Homepage2;
