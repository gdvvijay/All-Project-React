import ImageComponent from "./ImageComponent";
import Url from '../src/assets/illustration-audience-growth.webp'

export default function GrowthCard(){
    return(
        <div className="card growth-card">
            <h1>{'>'}56%</h1>
            <p>faster audience growth</p>
            <ImageComponent url={Url} name="audience grow image"/>
        </div>
    )
}