import Url from '../src/assets/hero-image.png'

export default function HeroSection(){
    return(
        <section className="hero-section">
            <div className="img-container">
                <img src={Url} alt="hero image"/>
            </div>
            <p>well, you can't resist anymore!</p>
        </section>
    )
}