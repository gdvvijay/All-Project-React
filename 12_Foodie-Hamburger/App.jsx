import CommonSection from "./components/CommonSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Burger1 from './src/assets/top-picks.png'
import Burger2 from './src/assets/Whopper.png'
import Burger3 from './src/assets/StunnerMenu.png'
import Burger4 from './src/assets/NewFoodieCollection.png'
import Burger5 from './src/assets/DealoftheDay.png'
import Footer from "./components/Footer";

export default function App(){
    return(
       <>
         <Header/>
         <main>
            <HeroSection/>
            <CommonSection sClass="section" sId="top-picks" h2Value="Top Picks" iName="burger 1" iUrl={Burger1}/>
            <CommonSection sClass="section" sId="whopper" h2Value="Whopper" iName="burger 2" iUrl={Burger2}/>
            <CommonSection sClass="section" sId="stunner-menu" h2Value="Stunner Menu" iName="burger 3" iUrl={Burger3}/>
            <CommonSection sClass="section" sId="new-foodie-collection" h2Value="New Foodie Collection" iUrl={Burger4}/>
            <CommonSection sClass="section" sId="deal-of-the-day" h2Value="Deal of the Day" iName="burger 4" iUrl={Burger5}/>
            <Footer/>
         </main>
       </>
    )
}