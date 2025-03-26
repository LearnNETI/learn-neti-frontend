import React from "react";
import './btn.css';
const Button = (props) => {
    return (
        <button className={"button " + props.block + "-" + props.modificator} onClick={props.onClick}>
            <img src={props.src}></img>
            {props.innerText}
            </button>
    );
}

export default Button;