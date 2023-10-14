import { LOGO_URL } from "./utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";



export const Header = () => {

  return (
    <div className="header">
      <div style={{fontSize:"24px", marginTop:"20px",marginLeft:"20px"}} className="logo-container">

      <Link to="/">
        
      <img    
             className="logo"
             src={require("./fd.png")}
             alt="Logo"
           />

         </Link>
       
      </div>
      <div className="nav-items">
        <ul>
          <li><Link style={{ textDecoration: 'none', color: 'inherit' }}to="/">Home</Link></li>
          <li> <Link style={{ textDecoration: 'none', color: 'inherit' }}to="/about"> About US </Link> </li>
          <li><Link style={{ textDecoration: 'none', color: 'inherit' }}to="/contact">Contact US</Link></li>
          <li>Cart</li>
          
        </ul>
      </div>

    </div>
  );
}
export default Header;