import { useState } from "react"

export default function App(){
    const [isPopupOpen,setPopupOpen]=useState(false);
    return(
        <>
            <button onClick={()=>{
                setPopupOpen(!isPopupOpen);
            }}>Open Popup</button>
            <div className={`popup-container ${isPopupOpen ? 'popup-open' : ''}`}>
                <div className="overlay" onClick={()=>{
                    setPopupOpen(false);
                }}></div>
                <div className="popup">
                    <div className="close-icon" onClick={()=>{
                        setPopupOpen(false);
                    }}>&times;</div>
                    <h2>Don't miss out.</h2>
                    <p>Sing up for our newsletter to stay in the loop.</p>
                </div>
            </div>
        </>
    )
}