import { Link } from "react-router-dom";
import dayMode from "../assets/dayMode.png";
import nightMode from "../assets/nightMode.png";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  
    
 
  return (
    <header className="flex w-full max-w-6xl justify-between mx-auto drop-shadow items-center h-14 drop-shadow-gray-200 bg-gray-50 dark:drop-shadow-gray-500 dark:bg-gray-800 mt-4">
      <div className="logo font-bold font-sans text-2xl pl-7 dark:text-white text-black ">Products</div>
      <div className="flex ">
        <Link to="/" className="links font-semibold pr-7 self-center">
          Home
        </Link>
        <div className="cursor-pointer">
          <div onClick={toggleTheme} className="mr-2.5">
            {theme === "light" ? (
              <img src={dayMode} alt="day mode" className="w-8 h-auto" />
            ) : (
              <img src={nightMode} alt="night mode" className="w-8 h-auto" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
