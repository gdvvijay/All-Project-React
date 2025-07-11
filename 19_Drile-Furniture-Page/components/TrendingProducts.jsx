import vecteezyImage from '../src/assets/vecteezy-interior-design.png'


export default function TrendingProducts() {
  return (
    <div className="trending-products grow flex justify-between max-w-6xl pt-7">
      <div className="image-of-vecteezy-iterior max-[1180px]:pl-3">
       <img src={vecteezyImage} alt="image of vecteezy furniture" />
      </div>
      <div className="trending-products-text max-w-[400px] flex flex-col justify-center ml-5 max-[1180px]:pr-3 ">
        <h1 className="font-[Federo] text-[3.125rem] tracking-[2px] max-[1180px]:text-[2.5rem] max-md:text-[1.875rem] max-sm:text-xl">Get ready for Out stylist chair</h1>
        <button className="self-start bg-[#434343] text-[#ffffff]  font-sans w-28 text-[1rem] max-sm:text-[0.5rem] px-2 py-0.5 tracking-[-0.8px]">SHOP NOW</button>
      </div>
      
    </div>
  );
}
