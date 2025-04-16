import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./feed.css";

const Feed = (props) => {
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);

    // Загрузка избранных карточек из localStorage при монтировании
    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(savedFavorites);

        // Проверяем, находится ли текущая карточка в избранном
        const isAlreadyFavorite = savedFavorites.some(fav => fav.mainTitle === props.mainTitle);
        setIsFavorite(isAlreadyFavorite);
    }, [props.mainTitle]);

    // Добавление или удаление карточки из избранного
    const toggleFavorite = () => {
        const cardData = {
            subject: props.subject,
            hasTest: props.hasTest,
            mainTitle: props.mainTitle,
            subTitle: props.subTitle,
            amount: props.amount,
            id: props.id // Добавляем ID для уникальной идентификации
        };

        let updatedFavorites;

        if (isFavorite) {
            // Удаляем карточку из избранного
            updatedFavorites = favorites.filter(fav => fav.mainTitle !== props.mainTitle);
        } else {
            // Добавляем карточку в избранное
            updatedFavorites = [...favorites, cardData];
        }

        // Обновляем состояние и localStorage
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setIsFavorite(!isFavorite); // Переключаем статус "избранное"
    };

    return (
        <div className="feed-card">
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
            <button
                className="card-btn"
                onClick={() => navigate(`/deck/start/${props.id}`)}
            >
                Начать
            </button>
            {/* Кнопка для добавления/удаления из избранного */}
            <button
                className={`favorite-btn ${isFavorite ? "favorited" : ""}`}
                onClick={toggleFavorite}
            >
                {isFavorite ? "-" : "+"}
            </button>
        </div>
    );
};

export default Feed;