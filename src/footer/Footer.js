const Footer = () => {
    const year = new Date().getFullYear();
    
    return ( 
        <footer>{`Copyright © Petsthetics ${year}`}</footer>
     );
}
 
export default Footer;