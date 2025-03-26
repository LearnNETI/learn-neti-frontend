import React from "react";
import LogoBtn from "../../ui/logo/logo";
import Form from "../../ui/form/form";
import logo from "../../static/icons/Logo.svg"
import Button from "../../ui/btn/btn";
import infoCircle from "../../static/icons/Info circle.svg"
import Plus from "../../static/icons/Plus.svg"
import Login from "../../static/icons/Login.svg"

import "./header.css"
const Header = (props) => {
    return (
        <header className="header">
            <div className="header__container">
            <LogoBtn src={logo} innerText="Learn NETI"></LogoBtn>
            <Form></Form>
            <div className="header-actions">
            {/* <Button src={infoCircle} block={"header"} modificator={"transparent"} innerText={"Справка"}></Button> */}
            <Button src={Plus} block={"header"} modificator={"gray"} innerText={"Создать"}></Button>
            <Button src={Login} block={"header"} modificator={"blue"} innerText={"Войти"}></Button>
            </div>
            </div>
        </header>
    );
};


export default Header;