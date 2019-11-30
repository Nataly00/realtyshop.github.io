import React from 'react';

import "./header.css"

import Logo from "./Header-menu-1/Logo/Logo";
import Phoneheader from './Header-menu-1/Phone-header/Phoneheader';
import Menuheader from './Header-menu-2/Menuheader';
import Search from './Header-menu-2/Search';

const Header = () =>{
    return (
        <header className="header">
            <div className="container-header">

                <div className="header-menu-1">
                    <div className="container">
                        <Logo/>
                        <Phoneheader/>
                    </div>
                </div>
                <div className="header-menu-2">
                    <div className="container">
                        <Menuheader/>
                        <Search/>
                    </div>
                    </div>

                </div>
        </header>
    )
}

export default Header;