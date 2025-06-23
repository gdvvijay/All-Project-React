import ImageComponent from "./ImageComponent";
import Url from '../src/assets/illustration-create-post.webp'

export default function QuickerCard(){
    return(
        <div className="card quicker-card">
            <h2>Create and Schedule Content <span>Quicker.</span></h2>
            <ImageComponent url={Url} name="Create Post Image"/>
        </div>
    )
}