import Rate from "./Rate";
import StarIcon from '../src/assets/icon-star.svg'

const iconArray =[StarIcon,StarIcon,StarIcon,StarIcon,StarIcon];

export default function RatingSection(){
    return(
        <section className="ratings">
            <Rate dId="rate1" iArray={iconArray} votedName="Reviews"/>
            <Rate dId="rate2" iArray={iconArray} votedName="Guru"/>
            <Rate dId="rate" iArray={iconArray} votedName="BestTech"/>
        </section>
    )
}