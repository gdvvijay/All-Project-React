import { useRef } from "react";
import i1 from '../src/assets/i1.png'
import i2 from '../src/assets/i2.png'
import i3 from '../src/assets/i3.png'
import i4 from '../src/assets/i4.png'
import i5 from '../src/assets/i5.png'
import i6 from '../src/assets/i6.png'
import Card from './Card'
import Categories from './Categories'
import t1 from '../src/assets/t1.png'
import t2 from '../src/assets/t2.png'
import t3 from '../src/assets/t3.png'
import t4 from '../src/assets/t4.png'
import lessThen from '../src/assets/lessThen.png'
import greaterThen from '../src/assets/greaterThen.png'

export default function TrendingCategories() {
    const scrollRef = useRef(null);

    
    const scrollByItems = (direction) => {
        const container = scrollRef.current;
        if (container) {
            const scrollAmount = container.offsetWidth; 
            container.scrollBy({
                left: direction === "right" ? scrollAmount : -scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="flex flex-col self-stretch items-center mt-32 max-[1180px]:pl-4 max-[1180px]:pr-4 relative">
            <p className="paragraph text-center max-w-6xl font-[Federo] tracking-[2px] text-4xl mb-24 max-[500px]:mb-0 max-lg:text-2xl">
                TRENDING CATEGORIES
            </p>
            <div
                ref={scrollRef}
                className="image-container-scroll flex overflow-x-auto no-scrollbar w-full max-w-6xl border-[1px] border-solid border-[#E2E0DB] items-baseline max-[500px]:hidden"
            >
                <div className="category-item min-w-[25%] max-sm:min-w-[50%] flex-shrink-0">
                    <Categories isSelected={true} url={i1} title="DRESSING TABLE" />
                </div>
                <div className="category-item min-w-[25%] max-sm:min-w-[50%] flex-shrink-0">
                    <Categories isSelected={false} url={i2} title="LAMP" />
                </div>
                <div className="category-item min-w-[25%] max-sm:min-w-[50%] flex-shrink-0">
                    <Categories isSelected={false} url={i3} title="CABINET" />
                </div>
                <div className="category-item min-w-[25%] max-sm:min-w-[50%] flex-shrink-0">
                    <Categories isSelected={false} url={i4} title="SOFA" />
                </div>
                <div className="category-item min-w-[25%] max-sm:min-w-[50%] flex-shrink-0">
                    <Categories isSelected={false} url={i5} title="CHAIR" />
                </div>
                <div className="category-item min-w-[25%] max-sm:min-w-[50%] flex-shrink-0">
                    <Categories isSelected={false} url={i6} title="BED" />
                </div>
            </div>
            <div className="flex self-stretch absolute left-0 right-0 z-[100] top-[170px] w-full max-w-7xl justify-self-center max-lg:top-[160px] max-[500px]:hidden">
                <div className="w-8 h-8 mr-auto">
                    <img src={lessThen} style={{ cursor: "pointer" }} alt="Scroll Left" onClick={() => scrollByItems("left")} />
                </div>
                <div>
                    <img src={greaterThen} style={{ cursor: "pointer" }} alt="Scroll Right" onClick={() => scrollByItems("right")} />
                </div>
            </div>
            <div className="flex w-full justify-between max-w-6xl flex-wrap max-sm:flex-col items-center">
                <div className="Trending-Categories grow flex max-w-6xl mt-[20px] mb-[10px] flex-wrap ">
                    <Card className="-trending-card-1" url={t1} isHot={false} isDiscount={false} discountValue="-5%" title="Vasagle Vanity Table" price=' $1,200.00' />
                </div>
                <div className="BestSellerItems grow flex max-w-6xl mt-[20px] mb-[10px] flex-wrap">
                    <Card className="trending-card-2" url={t2} isHot={false} isDiscount={false} discountValue="-5%" title="Adkins Dressing Table" price='$899.00' />
                </div>
                <div className="BestSellerItems grow flex max-w-6xl mt-[20px] mb-[10px] flex-wrap">
                    <Card className="trending-card-3" url={t3} isHot={false} isDiscount={false} discountValue="-5%" title="Hironpal Dressing Table" price='$350.00' />
                </div>
                <div className="BestSellerItems grow flex max-w-6xl mt-[20px] mb-[10px] flex-wrap">
                    <Card className="trending-card-4" url={t4} isHot={false} isDiscount={false} discountValue="-5%" title="Deco Dressing Table" price='$800.00' />
                </div>
            </div>
        </div>
    );
}