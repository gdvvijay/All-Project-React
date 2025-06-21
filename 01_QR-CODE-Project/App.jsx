import Header from "./components/Header";
import ImageComponent from "./components/imageComponent";
import Paragraph from "./components/ParagraphComponent";
import QrCode from "./src/assets/image-qr-code.png";

export default function App() {
  return (
    <>
     
        <ImageComponent url={QrCode} name="qr code image" />
        <Header text="Improve your front-end skills by building projects" />
        <Paragraph text=" Scan the QR code to visit Frontend Mentor and take your coding skills to the next level" />
      
    </>
  );
}
