import lessThen from '../src/assets/lessThen.png'
import greaterThen from '../src/assets/greaterThen.png'

export default function Swipe(){

    return(
         <div className="flex self-stretch justify-self-center w-full max-w-7xl absolute left-0 right-0 top-72 max-[980px]:top-[260px] max-[913px]:top-60 max-[840px]:top-52 max-[800px]:top-48 max-[600px]:top-36 z-[100]">
                    
                   <div className="w-8 h-8 mr-auto"> <img src={lessThen}/></div>                   
                   <div> <img src={greaterThen}/></div>
                </div>
    )
}