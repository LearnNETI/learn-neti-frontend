import React from "react";
import logo from "../../static/icons/Logo.svg";
import "./logo.css"
const LogoBtn = (props) => {
    return (
        <a href="#" className="header-logo">
            <img src={logo} />
            <span className="header-logo__text">{props.innerText}</span>
        </a>
    );
};

export default LogoBtn; 