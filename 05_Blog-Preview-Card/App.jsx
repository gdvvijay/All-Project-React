import CardContent from "./components/CardContent";
import EntryFeaturedImg from "./components/EntryFeaturedImg";
import Url from './src/assets/illustration-article.svg'


export default function App(){
    return(
        <div className="card-entry-preview">
            <EntryFeaturedImg url={Url} name="Article Image"/>
            <CardContent/>
        </div>
    )
}