import React from "react";
import './form.css'

const Form = (props) => {
    return (
        <div className="search-form">
            <input className="search-form__input" type="text" placeholder="Найти наборы"></input>
        </div>
    );
}

export default Form;