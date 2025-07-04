import A1 from "./components/A1";
import A2 from "./components/A2";
import Image from "./components/Image";
import Image1 from './src/assets/image-equilibrium.jpg'


export default function App(){
    return(
        <div className="bg-[#15273F] max-w-[267px] min-h-[450px] rounded-[1rem] shadow-[0_0_10px_1px_rgba(0,0,0,0.2)] font-sans">
            <Image iName="equilibrium image" url={Image1} cName=""/>
            <h3 className="text-[#E0E3EC] pl-5 mt-0 text-[15px] ">Equilibrium #3429</h3>
            <p className="text-[#7990AE] text-xs pr-5 pl-5 leading-3.5 pt-2.5">Our Equilibrium collection promotes balance and calm.</p>
            <A1/>
            <hr className="border-[#2F4159] ml-5 mr-5 -mt-2.5 "/>
            <A2/>
        </div>
        
    )
}