import ImageContainer from "./ImageContainer";
import MobileImage from '../src/assets/image-product-desktop.jpg'
import DesktopImage from '../src/assets/image-product-desktop.jpg'

export default function Container(){
    return(
        <div id="container">
            <ImageContainer url={MobileImage} name="Product Image mobile view" className="mobile-image"/>
            <ImageContainer url={DesktopImage} name="Product Image desktop view" className="desktop-image"/>
         
        </div>
    )
}