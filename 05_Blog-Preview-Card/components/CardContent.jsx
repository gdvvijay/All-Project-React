import CardEntryFooter from "./CardEntryFooter";

export default function CardContent(){
    return(
        <div className="card-content">
            <a href="#" className="entry-meta-category">Learning</a>
            <p className="entry-meta-pubdate">Published 21 Des 2023</p>
            <h3 className="entry-title">
                <a href="#">HTML & CSS foundations</a>
            </h3>
            <p className="entry-brief">
                These languages are the backbone of every website, defining structure, content, and presentation.
            </p>
            <CardEntryFooter/>
        </div>
    )
}