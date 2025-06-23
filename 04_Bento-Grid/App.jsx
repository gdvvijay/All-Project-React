import AiCard from "./components/AiCard";
import GrowCard from "./components/GrowCard";
import GrowthCard from "./components/GrowthCard";
import PlatformsCard from "./components/PlatformsCard";
import PostingCard from "./components/PostingCard";
import QuickerCard from "./components/QuickerCard";
import ScheduleCard from "./components/ScheduleCard";
import TitleCard from "./components/TitleCard";


export default function App(){
    return(
        <>
            <TitleCard />
            <PlatformsCard/>
            <PostingCard/>
            <ScheduleCard/>
            <GrowCard/>
            <QuickerCard/>
            <AiCard/>
            <GrowthCard/>
        </>
    )
}