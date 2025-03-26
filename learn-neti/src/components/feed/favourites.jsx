import React, { useState, useEffect } from "react";
import "./feed.css"; // Подключаем тот же файл стилей, что и для Feed
import { useNavigate } from "react-router-dom";
const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(savedFavorites);
    }, []);

    return (
        <section className="feed">
            <h2 className="feed__head">Избранное</h2>
            <ul className="feed__cards">
                {favorites.length === 0 ? (
                    <p>У вас пока нет избранных карточек.</p>
                ) : (
                    favorites.map((card, index) => (
                        <li key={index} className="feed__card">
                            <div className="card-info">
                                <div className="card-info-themes">
                                    <p className="card-info-subject">{card.subject}</p>
                                    <p className="card-info-has-test">{card.hasTest}</p>
                                </div>
                                <div className="card-info-titles">
                                    <h3 className="card-info-main-title">{card.mainTitle}</h3>
                                    <h3 className="card-info-sub-title">{card.subTitle}</h3>
                                </div>
                            </div>
                            <div className="amount-of-cards">
                                <p className="amount-of-cards-header">Количество карточек:</p>
                                <span className="decimal-value">{card.amount}</span>
                            </div>
                            <button className="card-btn" onClick={() => navigate("/deck/start")}>Начать</button>
                        </li>
                    ))
                )}
            </ul>
        </section>
    );
};

export default Favorites;
