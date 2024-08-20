import React from "react";
import Components from "../../components/platforms-sec";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DarkTheme from "../../layouts/Dark";
const { Header, CallToAction, MinimalArea, AboutIntro } = Components;

const Contact = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  React.useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
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
  }, []);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <Header sliderRef={fixedHeader} />
      <div className="main-content" ref={MainContent}>
        <MinimalArea />
        <AboutIntro />
        {/* <AboutUs2/> */}
        {/* <Services3/> */}
        <CallToAction/>
        <Footer noSubBG />
      </div>
    </DarkTheme>
  );
};

export default Contact;
