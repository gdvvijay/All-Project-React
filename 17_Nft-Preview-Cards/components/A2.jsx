import Image from "./Image";
import Image1 from '../src/assets/image-avatar.png'

export default function A2(){
    return(
        <div className="inline-flex pt-5">
            <div className=" relative border-solid border-[#ffffff] w-10 h-10 rounded-full border-[1px] ml-5 ">
                <Image iName="avatar image" url={Image1} cName="p-0 w-[37px] absolute top-[1px] right-[1px]"/>
            </div>
            <h4 className="text-[#BFCDDE] font-light text-xs ml-[7px] top-[-30px] mt-3"><span className="text-[#8FA4C1]">Creation of</span> Jules Wyvern</h4>
        </div>
    )
}