import ImageComponent from "./ImageComponent";
import FoodieLogo from '../src/assets/foodie logo.png'
import { useState } from "react";

export default function Header(){
    const [isOpen,setOpen]=useState(false);
    window.addEventListener('click',()=>{
        setOpen(false)

    })
    return(
       <header>
        <div className={`header-content ${isOpen ? 'menu-open' : ''}`}>
            <div className="logo">
                <ImageComponent url={FoodieLogo} name="foodie logo"/>
            </div>
            <div className="hamburger-menu-container menu-open" onClick={(e)=>{
                e.stopPropagation();
                setOpen(!isOpen);
            }}>
                <div className="hamburger-menu">
                <span className="hamburger-icon">☰</span>
                </div>
            </div>
            <nav>
                <span className="close-icon" onClick={(e)=>{
                    e.stopPropagation();
                    setOpen(false);
                }}>&times;</span>
                <a href="#top-picks">Top Picks</a>
                <a href="#whopper">Whopper</a>
                <a href="#stunner-menu">Stunner Menu</a>
                <a href="#new-foodie-collection">New Foodie Collection</a>
                <a href="#deal-of-the-day">Deal of the Day</a>
            </nav>
        </div>
       </header>
    )
}