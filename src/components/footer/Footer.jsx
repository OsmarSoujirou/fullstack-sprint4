import React from "react";
import Contact from "./contact/Contact";
import Links from "./links/Links";
import Payment from "./payment/Payment";
import Bottom from "./bottom/Bottom"

function Footer() {
  return (
    <footer className="footer">      
        <Contact />
        <Links />
        <Payment /> 
        <Bottom />    
    </footer>
  );
}
export default Footer;