import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="section-container">
            <div className="flex items-center justify-center">
                <Link to="#">
                    <img className="w-20" src="../src/assets/logo1.png" alt="logo"/>

                </Link>
                <p className="">Made with 🤍 By Vijay Makuvara The Shoe Company</p>
            </div>
        </footer>
    )
}