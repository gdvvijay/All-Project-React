import Url from '../src/assets/image-victor.jpg'
import ImageComponent from './ImageComponent'
import Stat from './Stat'

export default function ProfileContent(){
    return(
        <div className="profile-content">
            <ImageComponent url={Url} name="user image" className="profile-image"/>
            <div className="profile-name-area">
                <h1 className="profile-name">Victor Crest</h1>
                <p className="profile-are">26</p>
            </div>
            <p className="profile-city">London</p>
            <div className="stats-area">
                <Stat number="80k" title="Followers"/>
                <Stat number="90.3k" title="Likes"/>
                <Stat number="1.4k" title="Photo"/>
            </div>
        </div>
    )
}