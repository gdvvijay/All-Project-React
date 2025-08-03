import { Link } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWork from "./components/HowItWork";
import AboutSection from "./components/AboutSection";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';



export default function App() {


function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef('');

  // listen to location change using useEffect with location as dependency
  // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        lastHash.current = '';
      }, 100);
    }
  }, [location]);

  return null;
}


  return (
    <>
    {/*doing scroll functionality for hash*/}
      <ScrollToAnchor/>
      <Header />
      <HeroSection/>
      <HowItWork/>
      <AboutSection/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
}
