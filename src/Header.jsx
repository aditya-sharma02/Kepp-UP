import React from "react";
import logo from './images/logo.png'
const Header = () => {
    return(
        <>
        <div className="header">
            <img src={logo} alt ="logo" className="logo"/>
            <h2>google keep</h2>
        </div>
        </>
    )
}
export default Header;