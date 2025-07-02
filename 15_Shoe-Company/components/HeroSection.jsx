export default function HeroSection(){
    return(
        <section id="hero" className="bg-[url('../src/assets/road.png')] bg-cover md:bg-contain bg-no-repeat bg-right pt-36 section-container scroll-mt-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between max-w-6xl mx-auto">
                <h1 className="text-6xl md:text-7xl font-bold text-white leading-[64px] md:leading-[92px]">THE <br/>SHOE<br/>COMPANY</h1>
                <div>
                    <img className="w-full max-w-xl" src="../src/assets/logo.png" alt="white-shoe"/>
                </div>
            </div>
        </section>
    )
}