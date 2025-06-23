import ImageSection from "./components/ImageSection";
import TextualContent from "./components/Textual-Content";
import Url from './src/assets/avatar-jessica.jpeg'

export default function App(){
    return (
        <>
           <ImageSection url={Url} name="Jessica Image"/>
           <TextualContent/>
        </>       

    )
}