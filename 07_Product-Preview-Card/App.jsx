import Container from "./components/Container";
import ImageContainer from "./components/ImageContainer";
import Url from './src/assets/icon-cart.svg'


export default function App(){
    return(
        <>
        <Container/>

           <main>
                <span className="perfume">Perfume</span>
                <h1>Gabrielle Essence Eau De Perfume</h1>
                <p>
                    A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfume-Creator for the House of CHANEL.
                </p>
                <div className="prices">
                    <span className="sale-price">$149.99</span>
                    <span className="list-price">$169.99</span>
                </div>
                <button>
                    <ImageContainer url={Url} name="cart icon" className="cart-icon"/>
                </button>
            </main>
        </>
    )
}