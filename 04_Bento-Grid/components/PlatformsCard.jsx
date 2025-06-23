import ImageComponent from "./ImageComponent";
import Url from '../src/assets/illustration-multiple-platforms.webp'

export default function(){
    return(
      <div className="card platforms-card">
        <ImageComponent url={Url} name="multiple platforms image"/>
        <h2>Manage Multiple Accounts And Platforms.</h2>
      </div>

    )
}