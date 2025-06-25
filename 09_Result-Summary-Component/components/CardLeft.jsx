export default function CardLeft(){
    return(
        <div className="card-left">
            <h1>Your Result</h1>
            <div className="circle-box">
                <h2 className="circle-header">76</h2>
                <p className="circle-text">of 100</p>
            </div>
            <div className="card-left-bottom">
                <p className="card-left-text">Great</p>
                <p className="card-left-paragraph">
                    You scored higher than 65% of the people who have taken tests.
                </p>
            </div>
        </div>
    )
}