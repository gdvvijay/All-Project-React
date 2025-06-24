import Url from '../src/assets/image-avatar.webp'

export default function CardEntryFooter(){
    return(
        <div className="card-entry-footer">
            <div className="entry-author">
                <img src={Url} alt="avatar image"/>
            </div>
        </div>
    )
}