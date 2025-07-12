import AllLinks from "./AllLinks";
import facebookIcon from '../src/assets/facebook.png'
import twitterIcon from '../src/assets/twitter.png'
import instagramIcon from '../src/assets/instagram.png'
import treeImage from '../src/assets/treeImage.png'

export default function Footer(){
    return(
        <footer className="flex flex-col self-stretch items-center mt-16">
           <div className={`flex self-stretch justify-center bg-[hsl(473,4%,92%)] bg-[url(../src/assets/treeImage.png)]  bg-no-repeat bg-blend-color-burn bg-size-[auto_100%]`}>
             <div className="All-Links-Container max-w-6xl flex flex-col w-full self-center items-center mt-6 mb-20">
               <h1 className="font-[Potta_One] text-4xl -tracking-wide text-[#424346] mb-8 ">Drile</h1>
               <div className="all-links-rows-Container self-stretch flex justify-between">
                <AllLinks heading="ABOUT US" l1="About Us" l2="Contact Us" l3="Privacy Policy" l4="Terms of Service" ml={true}/>
                <AllLinks heading="COMPANY" l1="Explore World" l2="Trending Video" l3="Book a Trip" l4="Visit Gallery"/>
                <AllLinks heading="USEFUL LINKS" l1="Buy this theme" l2="Drile Landing" l3="Documentation" l4="Video Tutorial" mr={true}/>
                <div className="max-sm:hidden">
                    <h1  className="text-xl -tracking-wide mb-1 text-[#000000]">FOLLOW US</h1>
                    <a href="" className="flex gap-3 mb-[12px] mt-3 text-[#8A8A8A] text-[0.75rem]"><img src={facebookIcon} alt="facebook "/> <span>Facebook</span></a>
                    <a href="" className="flex gap-3 mb-[12px] text-[#8A8A8A] text-[0.75rem]"><img src={twitterIcon} alt="twitter"/> Twitter</a>
                    <a href="" className="flex gap-3 text-[#8A8A8A] text-[0.75rem]"><img src={instagramIcon} alt="instagram"/> Instagram</a>
                </div>
               </div>
            </div>
           </div>
            <div className="copyright-info max-w-6xl flex w-full self-center justify-center bg-white py-2">
                <p className="font-[Inter] text-base text-[#7A7A7A] max-sm:text-sm">@ Copyright 2022 | drile | All right reserved.</p>
            </div>
        </footer>
    )
}