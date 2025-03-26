import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./feed.css";

const Feed = (props) => { 
    let navigate = useNavigate();
    const [favorites, setFavorites] = useState([]);

    // Загружаем избранные карточки из localStorage при загрузке компонента
    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(savedFavorites);
    }, []);

    // Функция для добавления/удаления карточки в избранное
    const toggleFavorite = () => {
        let updatedFavorites = [...favorites];
        const cardData = {
            subject: props.subject,
            hasTest: props.hasTest,
            mainTitle: props.mainTitle,
            subTitle: props.subTitle,
            amount: props.amount
        };

        // Проверяем, есть ли карточка в избранном
        const index = updatedFavorites.findIndex(fav => fav.mainTitle === props.mainTitle);
        if (index !== -1) {
            updatedFavorites.splice(index, 1); // Удаляем, если уже есть
        } else {
            updatedFavorites.push(cardData); // Добавляем, если нет
        }

        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Сохраняем в localStorage
    };

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
                    <button className="favorite-btn" onClick={toggleFavorite}>
                        {favorites.some(fav => fav.mainTitle === props.mainTitle) ? "-" : "+"}
                    </button>
                </li>
            </ul>
        </section>
    );
};

export default Feed;
