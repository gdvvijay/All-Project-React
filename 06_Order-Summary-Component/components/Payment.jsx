import ImageComponent from "./ImageComponent";
import Url from '../src/assets/images/icon-music.svg'

export default function Payment(){
    return(
        <div className="payment">
            <ImageComponent url={Url} name="rounded icon with a musical note in the center"/>
            <h2>Annual Plan <span className="price"><br/>$59.99/year</span></h2>
            <p className="change">Change</p>
          
        </div>
    )
}