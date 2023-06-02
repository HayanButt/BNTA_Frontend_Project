const Footer = () => {
    const year = new Date().getFullYear();
    
    return ( 
        <footer className="footer__cop">{`Copyright © Petsthetics ${year}`}</footer>
     );
}
 
export default Footer;