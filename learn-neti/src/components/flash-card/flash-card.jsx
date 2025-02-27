import React from "react";
import { useState } from "react";
import "./flash-card.css"
const FlashCard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <>
        <div 
            className={`flash-card ${isFlipped ? "flipped" : ""}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className="flash-card__content">
                    <div className="flash-card__front">{props.frontText}</div>
                    <div className="flash-card__back">{props.backText}</div>                                   
            </div>
        </div>
        <ul className="buttons-list">
            <button className="buttons-list__button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19L14.3306 12.7809C14.7158 12.3316 14.7158 11.6684 14.3306 11.2191L9 5" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
                </svg>

            </button>
            <button className="buttons-list__button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19L14.3306 12.7809C14.7158 12.3316 14.7158 11.6684 14.3306 11.2191L9 5" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
                </svg>
            </button>
        </ul>
        </>
    );
};

export default FlashCard;