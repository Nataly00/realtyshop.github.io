import React from 'react';
import logo from './logo.png'


const Logo = () => {
    return(
        <div className="logo-header">
                <a href="/">
 						<img src={logo} width="220" height="75" alt=""/>
 				</a>
        </div>
    )
}

export default Logo;