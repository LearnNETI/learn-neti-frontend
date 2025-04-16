import React from "react";
import LogoBtn from "../../ui/logo/logo";
import Form from "../../ui/form/form";
import logo from "../../static/icons/Logo.svg"
import Button from "../../ui/btn/btn";
import Plus from "../../static/icons/Plus.svg"

import "./header.css"
const Header = ({ searchTerm, onSearchChange }) => {
        const handleClick = () => {
          window.open('http://217.71.129.139:5542/api/v1/admin/', '_blank');
        };
    return (
        <header className="header">
            <div className="header__container">
            <LogoBtn src={logo} innerText="Learn NETI"></LogoBtn>
            <Form searchTerm={searchTerm} onSearchChange={onSearchChange} />
            <div className="header-actions">
            {/* <Button src={infoCircle} block={"header"} modificator={"transparent"} innerText={"Справка"}></Button> */}
            <Button src={Plus} block={"header"} modificator={"gray"} innerText={"Создать"} onClick={handleClick}></Button>
            </div>
            </div>
        </header>
    );
};


export default Header;