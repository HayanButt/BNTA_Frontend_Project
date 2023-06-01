import Footer from "./Footer";
import './Footer.css';

const FooterContainer = () => {
    return ( 
        <div className="footer-container">
            <div className="footer-button-top-container">
                <button className="footer-buttons" role="button">Animals</button>
                <button className="footer-buttons" role="button">Tasks</button>
                <button className="footer-buttons" role="button">Users</button>
            </div>
            
            <div className="footer-button-bottom-container">
                <button className="footer-buttons" role="button">About Us</button>
                <button className="footer-buttons" role="button">Socials</button>
                <button className="footer-buttons" role="button">FAQs</button>
                <button className="footer-buttons" role="button">Contact Us</button>
            </div>
            <Footer/>
        </div>
     );
}
 
export default FooterContainer;