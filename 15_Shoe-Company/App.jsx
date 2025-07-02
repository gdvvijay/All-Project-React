import { Link } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWork from "./components/HowItWork";
import AboutSection from "./components/AboutSection";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";




export default function App() {
  return (
    <>
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
