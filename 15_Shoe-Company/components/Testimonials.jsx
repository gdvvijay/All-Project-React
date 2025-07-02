import TestimonialCommon from "./TestimonialCommon";
import firstImage from '../src/assets/testimonial.png'
import secondImage from '../src/assets/testimonial1.png'
import thirdImage from '../src/assets/testimonial2.png'

export default function Testimonials(){
    return(
        <section id="testimonials" className="section-container pt-8 mt-8 bg-[url('../src/assets/testimonial-background.png')]">
            <h2 className="text-3xl my-6 text-center font-bold">What People are saying about THE SHOE COMPANY ?</h2>
            <div className="text-center flex flex-col items-center md:items-stretch justify-between gap-8 md:flex-row mt-16 max-w-5xl mx-auto">
                <TestimonialCommon url={firstImage} iName="first person" pValue="Looking for shoes tha are built just for you? THE SHOE COMPANY is the way to go. Love the design and build quality."/>
                <TestimonialCommon url={secondImage} iName="second person" pValue="I love the shoes, the quality, and everything. they are worth the investment!"/>
                <TestimonialCommon url={thirdImage} iName="third person" pValue="They make the best and forever lasting shoes. Superb fit an comfort is literally the next level. Much recommended!"/>
            </div>
        </section>
    )
}