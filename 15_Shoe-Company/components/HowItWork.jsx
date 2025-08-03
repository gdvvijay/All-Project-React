import jutti2 from '../src/assets/jutti2.png'
import arrow1 from '../src/assets/arrow-1.png'
import arrow2 from '../src/assets/arrow-2.png'
import arrow3 from '../src/assets/arrow-3.png'

export default function HowItWork(){

    return(
        <section id="how-it-work" className="section-container pt-22">
            <h2 className="text-center text-3xl font-bold max-w-md mx-auto pt-12 mb-12">Have they finally made the perfect workout shoe?</h2>
            <div className="max-w-2xl mx-auto pt-72 xl:pt-12 relative">
                <img className="w-full max-w-2xl rotate-6 p-8 @min-[440px]:p-0 xl:rotate-0" src={jutti2} alt="second shoe"/>
                <div className="max-w-[200px] xl:max-w-xs absolute -top-12 xl:-translate-x-full">
                    <h3 className="text-lg @min-[560px]:text-2xl font-bold">The Heel</h3>
                    <p className="text-sx @min-[560px]:text-lg">The heel is well-built, has appropriate elevation and is not too rigid.</p>
                    <img className="w-32 xl:ml-auto rotate-45 xl:rotate-0 translate-y-10" src={arrow1} alt="arrow 1"/>
                </div>
                <div className="max-w-[200px] xl:max-w-xs absolute top-16 @min-[560px]:top-0 right-0 xl:-right-62">
                    <img className="w-32 @min-[560px]:w-auto xl:-ml-26 translate-y-full @min-[560px]:translate-y-60 rotate-[120deg] xl:rotate-0 xl:translate-y-0" src={arrow2} alt="arrow 2"/>
                    <div className="ml-10">
                        <h3 className="text-lg @min-[560px]:text-2xl font-bold -mt-30">THE FRONT</h3>
                        <p className="text-sx @min-[560px]:text-lg">The front is comfortable and adjusts well to the shape of your foot.</p>
                    </div>

                </div>
                <div className="max-w-[200px] xl:max-w-xs absolute -bottom-10">
                    <img className="ml-auto -mb-14 max-w-[150px] pb-6" src={arrow3} alt="arrow 3"/>
                    <h3 className="text-lg @min-[560px]:text-2xl font-bold">TRACTION</h3>
                    <p className="text-sx @min-[560px]:text-lg">The shoe has good traction and doesn't slip easily.</p>
                </div>
            </div>
        </section>
    )
}