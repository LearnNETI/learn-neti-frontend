import React from "react";
import { useNavigate } from "react-router-dom";
import "./feed.css"
const Feed = (props) => { 
    let navigate = useNavigate();
    return (
        <section className="feed">
            <h2 className="feed__head">
                Рекомендуем:
            </h2>
            <ul className="feed__cards">
                <li className="feed__card">
                    <div className="card-info">
                        <div className="card-info-themes">
                            <p className="card-info-subject">{props.subject}</p>
                            <p className="card-info-has-test">{props.hasTest}</p>
                        </div>
                        <div className="card-info-titles">
                            <h3 className="card-info-main-title">{props.mainTitle}</h3>
                            <h3 className="card-info-sub-title">{props.subTitle}</h3>
                        </div>
                    </div>
                    <div className="amount-of-cards">
                        <p className="amount-of-cards-header">Количество карточек:</p>
                        <span className="decimal-value">{props.amount}</span>
                    </div>
                    <button className="card-btn" onClick={() => navigate("/deck/start")}>Начать</button>
                </li>
            </ul>

        </section>
    );
};

export default Feed;