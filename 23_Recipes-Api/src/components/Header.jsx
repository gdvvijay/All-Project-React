import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import dayMode from "../assets/dayMode.png";
import nightMode from "../assets/nightMode.png";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full max-w-6xl flex justify-between mx-auto bg-gray-100 dark:bg-gray-600 h-12 items-center px-7 drop-shadow drop-shadow-gray-300 dark:drop-shadow-gray-400">
      <div className="logo font-serif font-bold text-2xl">Recipes</div>
      <div className="flex">
        <Link to="/" className="link font-bold mr-5 self-center">
          Home
        </Link>
        <div className="cursor-pointer">
          <div onClick={toggleTheme}>
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
