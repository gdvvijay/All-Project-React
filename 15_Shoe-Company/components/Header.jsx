import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="px-6 md:px-12 text-white flex items-center justify-between fixed w-full max-w-[1440px] left-[50%] -translate-x-[50%] z-10">
            <Link to="/">
                <img className="w-24 md:w-32" src="../src/assets/logo1.png" alt="logo"/>
            </Link>
            <nav className="hidden md:block space-x-6 lg:space-x-8 font-bold lg:text-2xl">
                <Link to="#hero">Home</Link>
                <Link to="#how-it-work">How It Works?</Link>
                <Link to="#about">About</Link>
                <Link to="#testimonials">Testimonials</Link>
                <Link to="#contact">Contact Us</Link>
            </nav>
            <button className="text-5xl md:hidden">☰</button>
        </header>
    )
}