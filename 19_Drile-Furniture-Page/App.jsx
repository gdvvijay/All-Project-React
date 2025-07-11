import {  useRef } from "react";
import BestSellerBackground from "./components/BestSellerBackground";
import BestSellerItems from "./components/BestSellerItems";
import DealOfTheWeek from "./components/DealOfTheWeek";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TrendingCategories from "./components/TrendingCategories";
import TrendingProducts from "./components/TrendingProducts";
import greaterThen from './src/assets/greaterThen.png'
import lessThen from './src/assets/lessThen.png'


export default function App(){
  
    
  
    return(
        <div className="main-container max-w-[1440px] items-stretch flex-col relative bg-[#FFFFFF]">
            <Header/>
            <main className="items-stretch flex  flex-col">
                <div className="flex justify-center self-stretch z-20">
                    <div className="self-center mr-5 max-[1180px]:mr-0 "><img src={lessThen} alt="left scroll image"/></div>
                    <TrendingProducts/>
                    <div className="self-center "><img src={greaterThen} alt="right scroll image"/></div>
                </div>
                <div className="flex justify-center self-stretch z-20">
                    <BestSellerItems/>
                </div>
                
                <BestSellerBackground/>
                <DealOfTheWeek/>
                <TrendingCategories/>
                <Footer/>
            </main>
        </div>
    )
}