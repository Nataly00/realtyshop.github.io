import React from 'react';

import Logo from "../Header/Header-menu-1/Logo/Logo"
import Newsfooter from "./Newsfooter"



const Footer = () =>{
      return(
        <footer className="footer">
                <div className="container-footer">
                    <Logo/>
                    <Newsfooter/>
                </div>
        </footer>
      )
}



export default Footer;