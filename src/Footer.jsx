import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <>
        <p className="footer">copyright © {year} </p>
        </>
    )
}
export default Footer;