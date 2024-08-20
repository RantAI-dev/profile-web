import { useRef, useEffect } from "react";
//= ================== Layout ==================//
import DarkTheme from "../../layouts/Dark";
//= ================== Components ==================//
import Navbar from "../../components/Navbar";
import ContactHeader from "../../components/Contact-header";
import Features from "../../components/Features";
import ServicesTop from "../../components/Services5";
import Works from "../../components/Works3-slider";
import Footer from "../../components/Footer";
import Components from "../../components/academy-sec";
const { CallToAction, Enterprise } = Components;

const Homepage6 = () => {
  const navbarRef = useRef(null);
  const fixedHeaderRef = useRef(null);
  const mainContentRef = useRef(null);

  useEffect(() => {
    const updateNavbarScroll = () => {
      const navbar = navbarRef.current;
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    };

    const updateContentMargin = () => {
      if (fixedHeaderRef.current && mainContentRef.current) {
        const slidHeight = fixedHeaderRef.current.offsetHeight;
        mainContentRef.current.style.marginTop = `${slidHeight}px`;
      }
    };

    window.addEventListener("scroll", updateNavbarScroll);
    window.addEventListener("resize", updateContentMargin);

    // Initial updates on component mount
    updateNavbarScroll();
    updateContentMargin();

    return () => {
      window.removeEventListener("scroll", updateNavbarScroll);
      window.removeEventListener("resize", updateContentMargin);
    };
  }, []);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <ContactHeader sliderRef={fixedHeaderRef} />
      <div className="main-content" ref={mainContentRef}>
        <ServicesTop />
        <Features />
        <Works />
        <Enterprise />
        <CallToAction theme="dark" />
        <Footer noSubBG />
      </div>
    </DarkTheme>
  );
};

export default Homepage6;
