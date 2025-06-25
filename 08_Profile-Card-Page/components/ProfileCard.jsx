import Url from '../src/assets/bg-pattern-card.svg'
import ImageComponent from './ImageComponent'
import ProfileContent from './ProfileContent'

export default function ProfileCard(){
    return(
        <div className="profile-card">
            <ImageComponent url={Url} name="pattern card image" className="profile-bg-image"/>
            <ProfileContent/>
        </div>
    )
}