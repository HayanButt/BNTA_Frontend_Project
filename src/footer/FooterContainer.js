import Footer from "./Footer";
import './Footer.css';

const FooterContainer = () => {
    return ( 
        <div className="footer-container">
            <button className="footer-buttons" role="button">About Us</button>
            <button className="footer-buttons" role="button">FAQs</button>
            <button className="footer-buttons" role="button">Contact Us</button>

            <Footer/>
        </div>
     );
}
 
export default FooterContainer;