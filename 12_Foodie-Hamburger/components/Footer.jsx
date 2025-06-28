export default function Footer() {
  return (
    <footer>
      <h3 className="go-to-top">
        <a href="#" onClick={(e)=>{
            scrollTo(0);
        }}>Go to Top</a>
      </h3>
      <p className="footer-text">Made with ❤️ by vijay makuvara</p>
    </footer>
  );
}
