import reBuy from "../src/assets/reBuy.png";
import cart from "../src/assets/cart.png";
import love from "../src/assets/love.png";
import { Link } from "react-router-dom";


export default function Card({
  isHot,
  isDiscount,
  url,
  title,
  price,
  className,
  discountValue
}){

  if(!isHot){
    isHot=false
  }
  if(!isDiscount){
    isDiscount=false
  }
    return(
        <div className={`${className} flex flex-col items-center shadow-[0_0_1px_1px_rgba(0,0,0,10%)] max-w-[255px] max-h-[342px] relative mr-auto bg-white`}>
        {isHot ? (
          <p className="absolute top-1 right-1 bg-[#F29731] px-4 text-[#ffffff] font-sans">
            HOT
          </p>
        ) : (
          ""
        )}
        {isDiscount ? (
          <p className="absolute top-8 right-1 bg-[#9E0B0F] px-[17.5px] text-[#ffffff] font-sans">
            {discountValue}
          </p>
        ) : (
          ""
        )}
        <img src={url} className="pt-[71px] px-[5.4375rem]" />
        <p className="font-sans text-[1rem] tracking-[-0.6px]">{title}</p>
        <p className="text-[#8C8C8C] pb-5">{price}</p>
        <div className="trending-products-links flex flex-col absolute right-0.5 top-20 gap-2">
          <Link
            to="#"
            className="border-[1px] border-solid border-[#454545] p-2"
          >
            <img src={reBuy} alt="reBuy link image" />
          </Link>
          <Link
            to="#"
            className="border-[1px] border-solid border-[#454545] p-2"
          >
            <img src={love} alt="love link image" />
          </Link>
          <Link
            to="#"
            className="border-[1px] border-solid border-[#454545] p-2"
          >
            <img src={cart} alt="cart link image" />
          </Link>
        </div>
      </div>
    )
}