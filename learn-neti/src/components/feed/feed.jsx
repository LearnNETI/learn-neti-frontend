import React from "react";
import "./feed.css"
const Feed = (props) => { 
    return (
        <section className="feed">
            <h2 className="feed__head">
                Рекомендуем:
            </h2>
            <ul className="feed__cards">
                <li className="feed__card">
                    <div className="card-info">
                        <div className="card-info-themes">
                            <p className="card-info-subject">Мат.анализ</p>
                            <p className="card-info-has-test">Тест</p>
                        </div>
                        <div className="card-info-titles">
                            <h3 className="card-info-main-title">Интергалы: Неопределенные интегралы</h3>
                            <h3 className="card-info-sub-title">Интегрирование по частям</h3>
                        </div>
                    </div>
                    <div className="amount-of-cards">
                        <p className="amount-of-cards-header">Количество карточек:</p>
                        <span className="decimal-value">30</span>
                    </div>
                    <button className="card-btn">Начать</button>
                </li>
                <li className="feed__card">
                    <div className="card-info">
                        <div className="card-info-themes">
                            <p className="card-info-subject">Мат.анализ</p>
                            <p className="card-info-has-test">Тест</p>
                        </div>
                        <div className="card-info-titles">
                            <h3 className="card-info-main-title">Интергалы: Неопределенные интегралы</h3>
                            <h3 className="card-info-sub-title">Интегрирование по частям</h3>
                        </div>
                    </div>
                    <div className="amount-of-cards">
                        <p className="amount-of-cards-header">Количество карточек:</p>
                        <span className="decimal-value">30</span>
                    </div>
                    <button className="card-btn">Начать</button>
                </li>
            </ul>

        </section>
    );
};

export default Feed;