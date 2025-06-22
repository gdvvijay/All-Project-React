import Image from "./components/Image";
import IngredientsMain from "./components/IngredientsMain";
import Instructions from "./components/Instructions";
import Preparation from "./components/Preparation";
import OmeletteImg from './src/assets/image-omelette.jpeg'
import NutritionMain from './components/NutritionMain'

export default function App(){
    return (
        <>
            <Image url={OmeletteImg} name="Omelette Image"/>
            <div className="allContent">
                <h3 className="Headding" style={{fontFamily:"Times New Roman, Times , serif"}}>Simple Omelette Recipe</h3>
                <p className="firstP">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
                <Preparation/>
                <IngredientsMain/>
                <Instructions/>
                <NutritionMain/>
            </div>
        </>
    )
}