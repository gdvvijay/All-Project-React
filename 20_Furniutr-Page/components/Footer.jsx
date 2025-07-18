import FooterItem from "./FooterItem";

export default function Footer(){
    return(
        <footer className="flex w-full max-w-6xl justify-between mb-12 max-[1170px]:px-6 max-sm:flex-wrap">
          <FooterItem heading="Get's your discount" items={['Check now']}/>
          <FooterItem heading="Our services" items={['Collection','How its work','Estimates']}/>
          <FooterItem heading="Company" items={['Terns of use','Privacy policy','Careers']}/>
          <FooterItem heading="Contact" items={['Furniutr2@furniture.com','(888) 315-500','St. Village. New York']}/>
        </footer>
    )
}