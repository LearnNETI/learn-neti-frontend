import React, { useState, useEffect } from "react";
import { data, useNavigate, useParams } from "react-router-dom";
import Button from "../../ui/btn/btn";
import "./flash-card.css";

const FlashCard = () => {
    const { deckId } = useParams();
    const [isFlipped, setIsFlipped] = useState(false);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [cards, setCards] = useState([]);
    const [tests, setTests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Загрузка карточек колоды
    useEffect(() => {
        const fetchDeckCards = async () => {
            try {
                const response = await fetch(`/api/v1/deck/${deckId}/start`);
                
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status}`);
                }
                
                const data = await response.json();
                if (!data.data || !Array.isArray(data.data.cards)) {
                    throw new Error("Некорректный формат данных");
                }
                
                setCards(data.data.cards);
                setTests(data.data.tests || []); // Сохраняем тесты или пустой массив
            } catch (err) {
                setError(err.message);
                setCards([]);
                setTests([]);
            } finally {
                setLoading(false);
            }
        };

        fetchDeckCards();
    }, [deckId]);
    const handleNextCard = () => {
        setCurrentCardIndex(prev => (prev + 1) % cards.length);
        setIsFlipped(false);
    };

    const handlePrevCard = () => {
        setCurrentCardIndex(prev => (prev - 1 + cards.length) % cards.length);
        setIsFlipped(false);
    };

    const handleTestMode = () => {
        navigate(`/test/${deckId}`);
    };

    if (loading) {
        return (
            <div className="flash-card-section">
                <div className="loading-message">Загрузка карточек...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flash-card-section">
                <div className="error-message">Ошибка: {error}</div>
            </div>
        );
    }

    if (cards.length === 0) {
        return (
            <div className="flash-card-section">
                <div className="empty-message">В этой колоде нет карточек</div>
            </div>
        );
    }

    const currentCard = cards[currentCardIndex];
    return (
        <div className="flash-card-section">
            <h2>{currentCardIndex + 1} из {cards.length}</h2>
            
            {tests.length > 0 && (
                <Button 
                    block="flash-card" 
                    modificator="testmode" 
                    innerText="Режим тестирования" 
                    onClick={handleTestMode}
                />
            )}
            
            <div 
                className={`flash-card ${isFlipped ? "flipped" : ""}`}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className="flash-card__content">
                    <div className="flash-card__front">
                        {currentCard.image_url}
                    </div>
                    <div className="flash-card__back">
                        {currentCard.text}
                    </div>
                </div>
            </div>
            
            <ul className="buttons-list">
                <button 
                    onClick={handlePrevCard} 
                    disabled={currentCardIndex === 0} 
                    className="buttons-list__button"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19L14.3306 12.7809C14.7158 12.3316 14.7158 11.6684 14.3306 11.2191L9 5" 
                              stroke="#fff" 
                              strokeWidth="4" 
                              strokeLinecap="round"/>
                    </svg>
                </button>
                
                <button 
                    onClick={handleNextCard} 
                    disabled={currentCardIndex === cards.length - 1} 
                    className="buttons-list__button"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 19L14.3306 12.7809C14.7158 12.3316 14.7158 11.6684 14.3306 11.2191L9 5" 
                              stroke="#fff" 
                              strokeWidth="4" 
                              strokeLinecap="round"/>
                    </svg>
                </button>
            </ul>
        </div>
    );
};

export default FlashCard;