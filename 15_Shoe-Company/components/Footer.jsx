import { Link } from "react-router-dom";
import logo1 from '../src/assets/logo1.png'

export default function Footer(){
    return(
        <footer className="section-container">
            <div className="flex items-center justify-center">
                <Link to="#">
                    <img className="w-20" src={logo1} alt="logo"/>

                </Link>
                <p className="">Made with 🤍 By Vijay gadhvi The Shoe Company</p>
            </div>
        </footer>
    )
}