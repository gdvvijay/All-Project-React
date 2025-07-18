import AboutFurniture from "./components/AboutFurniture";
import DecorateHome from "./components/DecorateHome";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LetsTry from "./components/LetsTry";
import OurProducts from "./components/OurProducts";



export default function App() {
  return (
    <div className="main-container flex flex-col items-center max-w-7xl w-full mx-auto bg-[#FFFFFF]">
      <Header />
      <main className="flex flex-col w-full items-center ">
        <DecorateHome />
        <AboutFurniture />
        <OurProducts/>
        <LetsTry/>
        <hr className="w-full mb-28 max-w-6xl border-[#282A30] border"/>
        <Footer/>
      </main>
    </div>
  );
}
