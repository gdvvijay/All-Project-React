import ReviewComponent from './ReviewComponent'
import ColtonImage from '../src/assets/image-colton.jpg'
import IreneImage from '../src/assets/image-irene.jpg'
import AnneImage from '../src/assets/image-anne.jpg'

export default function ReviewsSection(){
    return(
        <section className="reviews">
            <ReviewComponent dId="colton" iUrl={ColtonImage} pValue1="Colton Smith" pValue2="Verified Buyer" bqValue="We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"/>
            <ReviewComponent dId="irene" iUrl={IreneImage} pValue1="Irene Robert" pValue2="Verified Buyer" bqValue="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."/>
            <ReviewComponent dId="anne" iUrl={AnneImage} pValue1="Anne Wallace" pValue2="Verified Buyer" bqValue="Put an order with company and can only praise then for the very high standard. will definitely use them again and recommed them to everyone!"/>
        </section>
    )
}