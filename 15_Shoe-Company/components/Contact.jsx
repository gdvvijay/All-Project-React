import ContactCommon from "./ContactCommon";
import image1 from "../src/assets/facebook.svg";
import image2 from "../src/assets/instagram.svg";
import image3 from "../src/assets/twitch.svg";
import image4 from "../src/assets/youtube.svg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-container flex flex-col lg:flex-row items-center justify-between p-16"
    >
      <div className="mb-10 lg:mb-0 shrink-0 self-start md:self-center">
        <h2 className="text-3xl my-6 font-bold">Contact Us</h2>
        <p className="max-w-[180px] my-8">
          THE SHOE COMPANY, Dallas, Texas, USA +1 5590 1120 9910
        </p>
        <div className="flex space-x-4">
          <ContactCommon url={image1} iName="facebook icon" />
          <ContactCommon url={image2} iName="instagram" />
          <ContactCommon url={image3} iName="twitch icon" />
          <ContactCommon url={image4} iName="youtube icon" />
        </div>
      </div>
      <div className="w-full">
        <iframe
          className="w-full max-w-xl mx-auto lg:ml-auto lg:mx-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429187.3558398456!2d-97.06243681381797!3d32.81807030217089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1744024970682!5m2!1sen!2sin"
          height="650"
          style={{border:0}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
