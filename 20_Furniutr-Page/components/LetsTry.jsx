import letstry from '../src/assets/letstry.png'
import grid14 from '../src/assets/grid14.png'

export default function LetsTry(){
    return(
        <section className="lets-try flex w-full max-w-6xl mb-24 max-[1170px]:px-6 max-sm:pr-0">
          <div className="text-flex grow flex flex-col justify-center max-lg:shrink-0 max-sm:shrink max-sm:mr-2">
             <h1 className="font-[Montserrat] font-bold text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-3xl text-[#FFFFFF] text-border">Let's</h1>
            <h1 className="font-[Montserrat] font-bold text-[#282A30] text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-3xl mr-3">Try Now</h1>
            <button className="bg-[#F7515C] text-[#FFEDED] px-4 max-sm:px-2 py-1.5 max-sm:py-1 mt-8 max-sm:mt-4  font-[Montserrat] font-semibold text-2xl max-sm:text-xl max-w-fit">Explore</button>
          </div>
          <div className="image-flex pr-20 max-sm:pr-10 relative">
            <img src={letstry} className="relative z-30" alt="lets try section image"/>
            <img src={grid14} className="absolute bottom-20 right-0 z-0 max-[1024px]:max-w-[430px] max-lg:right-2 max-[768px]:max-w-[350px] max-md:right-6 max-sm:right-3 max-[768px]:bottom-16 max-[420px]:bottom-10 max-[330px]:bottom-14 max-[640px]:max-w-[150px] max-[420px]:max-w-[100px]" alt="circle grid image"/>
          </div>
        </section>
    )
}