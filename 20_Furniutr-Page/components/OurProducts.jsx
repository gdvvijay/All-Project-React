import ImageItem from "./ImageItem";
import image1 from '../src/assets/image1.png'
import image2 from '../src/assets/image2.png'
import image3 from '../src/assets/image3.png'
import image4 from '../src/assets/image4.png'

export default function OurProducts(){
    return(
        <section className="our-products flex flex-col w-full max-w-6xl justify-center mb-48 max-[1170px]:px-6">
          <div className="textItems-scroller flex w-full justify-between max-lg:mb-12">
            <div className="flex-item-one grow">
              <h2 className="font-[Montserrat] font-semibold text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-[16px] text-[#282A30]">Our you have to buy</h2>
               <h1 className="font-[Montserrat] font-bold text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-3xl text-[#FFFFFF] text-border">
            Product
          </h1>
            </div>
            <div className="flex-item-one flex grow justify-end items-end space-x-6">
              <div className='border-2 w-12 h-12 max-sm:w-7 max-sm:h-7 flex items-center justify-center border-[#282A30] rounded-[8px] max-sm:rounded-[4px] text-3xl max-sm:text-xl font-medium pb-[5px]'>&lt;</div>
              <div className='border-2 w-12 h-12 max-sm:w-7 max-sm:h-7 flex items-center justify-center border-[#282A30] rounded-[8px] max-sm:rounded-[4px] text-3xl max-sm:text-xl font-medium pb-[5px]'>&gt;</div>
              
            </div>
          </div>
        <div className="all-image-items-container flex w-full ">
          <ImageItem url={image1} name="modern lamp image" heading="Modern lamp study" price="$258"/>
          <ImageItem url={image2} name="modern lamp image" heading="Modern lamp study" price="$135"/>
          <ImageItem url={image3} name="classic lamp" heading="Classic lamp" price="$425"/>
          <ImageItem url={image4} name="clock cute" heading="Clock cute" price="$351"/>
          
        </div>
        </section>
    )
}