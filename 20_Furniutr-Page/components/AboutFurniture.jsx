import AboutFurnitureImage from '../src/assets/about-furniture-image.png'
import box1 from '../src/assets/box1.png'
import box2 from '../src/assets/box2.png'
import circle1 from '../src/assets/circle1.png'

export default function AboutFurniture(){
    return(
        <section className="About-Furniture flex max-w-6xl w-full mt-40 mb-40 max-[1170px]:px-6 max-sm:px-3">
          <div className="images w-full relative pr-28 pb-20 max-sm:pr-10">
            <img src={AboutFurnitureImage} alt="about furniture image" className="relative z-50"/>  
            <img src={box1} alt="black box image1" className="absolute z-10 bottom-28 right-20 max-sm:right-5 w-[60%] max-md:w-[180px] max-sm:w-[120px]"/>
            <img src={box2} alt="black box image2" className="absolute z-10 bottom-20 -left-9 scale-y-[0.7] max-md:w-[150px] max-sm:w-[100px]"/>
            <img src={circle1} alt="circle image" className="absolute z-10 bottom-0 max-lg:bottom-4 max-md:bottom-11 max-sm:bottom-14 right-2.5 max-md:right-5 max-sm:right-1 max-w-[440px] max-lg:max-w-[350px] max-md:max-w-[250px] max-sm:max-w-[140px]"/>
          </div>
          <div className="text-content flex flex-col w-full mt-24 max-lg:mt-14 max-md:mt-6 max-sm:mt-2">
              <h1 className="font-bold font-[Montserrat] text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-xl  text-[#282A30] ">About</h1>
              <h1 className="font-[Montserrat] font-bold text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-2xl text-[#FFFFFF] text-border mt-2.5 max-sm:mt-1">Furniture</h1>
              <p className="font-[Nunito] text-xl max-[768px]:text-[17px]  max-[442px]:text-[10px] text-[#27292f80] mt-12 max-md:mt-4 max-sm:mt-1">People have been using natural objects, such as tree stumps, rocks and moss, as furniture since the beginning of human civilization.</p>
              <button className="self-start max-w-[150px] w-full bg-[#F7515C] text-[#FFFFFF] font-semibold font-[Montserrat] py-2.5 mt-9 max-md:mt-4 max-sm:mt-1">Read more</button>
          </div>
        </section>
    )
}