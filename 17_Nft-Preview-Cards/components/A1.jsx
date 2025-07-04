import Image from "./Image";
import Image1 from '../src/assets/icon-ethereum.svg'
import Image2 from '../src/assets/icon-clock.svg'

export default function A1(){
    return(
        <div className="inline-flex">
            <Image iName="ethereum icon" url={Image1} cName="w-[50px] h-[55px]"/>
            <span className="mt-5 -ml-2.5 text-[#00FDFB] font-sans font-semibold">0.041ETH</span>
            <Image iName="clock icon" url={Image2} cName=" w-[55px] ml-[25px]"/>
            <span className="mt-[20.5px] -ml-3.5 text-[#8BACD9] font-semibold text-xs ">3 days left</span>
        </div>
    )
}