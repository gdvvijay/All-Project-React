import StatsBox from "./StatsBox";
import ReactionIcon from '../src/assets/icon-reaction.svg'
import MemoryIcon from '../src/assets/icon-memory.svg'
import VerbalIcon from '../src/assets/icon-verbal.svg'
import VisualIcon from '../src/assets/icon-visual.svg'

export default function CardRight(){
    return(
        <div className="card-right">
            <div className="card-right-header-box">
                <h2 className="card-right-header">Summary</h2>
            </div>
            <div className="stats-container">
                <StatsBox dClass="stats-box1" iUrl={ReactionIcon} iName="reaction image" pClass="stats-title" pValue="Reaction" resultValue="80"/>
                <StatsBox dClass="stats-box2" iUrl={MemoryIcon} iName="memory image" pClass="stats-title2" pValue="Memory" resultValue="92"/>
                <StatsBox dClass="stats-box3" iUrl={VerbalIcon} iName="verbal image" pClass="stats-title3" pValue="Verbal" resultValue="61"/>
                <StatsBox dClass="stats-box4" iUrl={VisualIcon} iName="visual image" pClass="stats-result4" pValue="Visual" resultValue="72"/>
            </div>
            <button>Continue</button>
        </div>
    )
}