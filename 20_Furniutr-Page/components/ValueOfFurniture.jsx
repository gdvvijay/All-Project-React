import valueOfFurniture from "../src/assets/value-of-furniture.png";
import circle2 from '../src/assets/circle2.png'
import Box from "./Box";

export default function ValueOfFurniture(){
    return(
        <section className="value-of-furniture flex flex-col w-full max-w-6xl justify-center mb-40">
          <h3 className="font-[Montserrat] font-semibold text-4xl text-[#000000]">
            More value from this
          </h3>
          <h1 className="font-[Montserrat] font-bold text-7xl text-[#FFFFFF] text-border">
            Furniture
          </h1>
          <div className="image-with-boxes relative mt-24">
            <div className="justify-self-center">
              <img src={valueOfFurniture} alt="value of furniture" />
            </div>
           <Box className="left-0 top-14" name="box-1" no="1" heading="Full services" paragraph="Provide the best service and very fast response."/>
           <Box className="-top-12 right-24" name="box-2" no="2" heading="Long warranty." paragraph="With a 5-year warranty provided, providing satisfying service."/>
           <Box className="-bottom-12 right-0" name="box-3" no="3" heading="Modern design" paragraph="The room looks beautiful with a blend of contemporary and attractive design."/>
           <div className="absolute -bottom-40 left-16 scale-[0.7]"><img src={circle2} alt="circle grid image"/></div>
          </div>
        </section>
    )
}