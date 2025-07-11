import Card from "./Card";
import image1 from "../src/assets/image1.png";
import image2 from "../src/assets/image2.png";
import image3 from "../src/assets/image3.png";
import image4 from "../src/assets/image4.png";
import image5 from "../src/assets/image5.png";
import image6 from "../src/assets/image6.png";
import image7 from "../src/assets/image7.png";
import BigCard from "./BigCard";

export default function BestSellerItems() {
  
  return (
    <div className="BestSellerItems grow flex gap-5 max-w-6xl mt-[200px] mb-[150px] flex-wrap max-[1180px]:pl-3 max-sm:flex-col max-sm:grow-0">
      <Card className="card-1"  url={image1} isHot={true} isDiscount={true} discountValue="-5%" title="Metal Vintage Pendant" price='$79.00'/>
      <Card className="card-2"  url={image2} isHot={false} isDiscount={false} title="Klosh Table Clock" price='$99.00'/>
      <Card className="card-3"  url={image3} isHot={false} isDiscount={false} title="Arne Dining Chair"  price='$350.00'/>
      <Card className="card-4"  url={image4} isHot={true} isDiscount={false} title="Klosh Wall Clock" price='$50.00 - $129.00'/>
      <BigCard className="card-5" url={image5} isHot={true} isDiscount={true} discountValue="-20%" title="Modern Outdoor Chair" price="$79.00"/>
      <BigCard className="card-6" url={image6} isHot={false} isDiscount={false} title="Vipp Wool Pillow" price="$99.00"/>
      <BigCard className="card-7" url={image7} isHot={true}  isDiscount={true} discountValue="-17%" title="Modern Bedroom Storage" price="$499.00"/>
    </div>
  );
}
