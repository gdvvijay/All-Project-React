import ImageComponent from "./ImageComponent";
import HeroImage from '../src/assets/images/illustration-hero.svg'
import Payment from "./Payment";
import Button from "./Button.jsx";


export default function Container(){
    return(
        <section className="container">
            <ImageComponent url={HeroImage} name="Hero Image"/>
            <h1>Order Summary</h1>
            <p className="benefits_explanation">
                You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
            </p>
            <Payment/>
              <Button className="proceed_payment" name="Proceed to Payment"/>
            <Button className="cancel_order" name="Cancel Order"/>
        </section>
    )
}