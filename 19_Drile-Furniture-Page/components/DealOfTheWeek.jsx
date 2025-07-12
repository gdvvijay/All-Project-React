import Sofa from '../src/assets/sofa.png'
import watch from '../src/assets/watch.png'
import image5 from '../src/assets/blackChair.png'
import image7 from '../src/assets/goldenTable.png'
import image1 from '../src/assets/bulb.png'

export default function DealOfTheWeek(){
    return(
            <div className="deal-of-the-week flex justify-center self-stretch">
                    <div className="flex grow ml-[5vw] max-[1180px]:ml-1 min-[1300px]:ml-[5rem] h-full max-w-6xl ">
                          <div className="bg-[#F6F6F6] flex grow-0 shrink rounded-tl-full rounded-bl-full items-center max-[550px]:hidden">
                                <div className="rounded-full w-[26vw] h-[26vw] min-[1300px]:w-[350px] min-[1300px]:h-[350px] bg-white flex items-center justify-center ml-12 max-md:rounded-[100%_0_0_100%] max-md:h-[80%] max-md:ml-5">
                                 <img src={Sofa}/>
                                  </div>
                            </div>
                          <div className="bg-[#F6F6F6] flex flex-col grow pl-[2.5rem] pt-[2.5rem] pr-[2.5rem] max-lg:pl-2.5 max-lg:pr-2.5 max-lg:pt-2.5">
                                <p className="text-[1rem] font-sans text-center w-[9.625rem] text-nowrap py-1 bg-[#8096BC] text-[#FFFFFF]">DEAL OF THE WEEK</p>
                                <p className="text-5xl max-sm:text-3xl font-[Federo] mt-6 max-sm:mt-3 tracking-[2px]">from <span className="text-[#78A2CA]">$99.99</span></p>
                                <p className="text-[#727272] font-sans font-light max-sm:text-sm">Supple and durable, leather is a timeless choice that develops a beautiful patina over time. From the smooth, consistent grain of top-grain leather to the rich, natural variations of full-grain, a leather sofa adds a touch of sophistication and is remarkably easy to maintain. For a more budget-friendly option, high-quality leatherette offers a similar aesthetic with excellent durability.</p>
                                <button className="w-[7rem] bg-[#434343] text-[#FFFFFF] py-1 mt-5 max-sm:w-[5rem] text-sm">SHOP NOW</button>
                                <div className="flex gap-[0.625rem] max-w-[28.112rem] mt-4">
                                    <div className="flex items-center justify-center bg-[#FFFFFF] w-20 h-20 max-sm:w-16 max-sm:h-16">
                                        <img src={watch} alt="black watch"/>
                                    </div>
                                    <div className="flex items-center justify-center bg-[#FFFFFF]  w-20 h-20 max-sm:w-16 max-sm:h-16">
                                        <img  src={image5} alt="black chair"/>
                                    </div>
                                    <div className="flex items-center justify-center bg-[#FFFFFF]  w-20 h-20 max-sm:w-16 max-sm:h-16">
                                        <img src={image7} alt="golden table"/>
                                    </div>
                                    <div className="flex items-center justify-center bg-[#FFFFFF] w-20 h-20 max-sm:w-16 max-sm:h-16">
                                        <img src={image1} alt="bulb image"/>
                                    </div>
                                </div>
                          </div>
                    </div>
                </div>
    )
}