import React from "react";
import Button from "../../ui/btn/btn";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./flash-card.css"

const flashcards = [
    { 
        question: "Что такое структура в C?", 
        answer: "Структура в C — это пользовательский тип данных, который объединяет несколько переменных разного типа под одним именем." 
    },
    { 
        question: "Как объявить структуру в C?", 
        answer: "Используйте ключевое слово struct:\n\nstruct Point {\n  int x;\n  int y;\n};" 
    },
    { 
        question: "Как создать переменную структуры?", 
        answer: "Используйте объявленную структуру:\n\nstruct Point p1;\np1.x = 10;\np1.y = 20;" 
    },
    { 
        question: "Как передать структуру в функцию?", 
        answer: "Передача возможна по значению или по указателю:\n\nvoid printPoint(struct Point p) {...}\nvoid modifyPoint(struct Point *p) {...}" 
    },
    { 
        question: "Как выделить память для структуры динамически?", 
        answer: "Используйте malloc:\n\nstruct Point *p = (struct Point*)malloc(sizeof(struct Point));" 
    },
    { 
        question: "Что такое typedef для структуры?", 
        answer: "Позволяет создать псевдоним для структуры:\n\ntypedef struct Point {\n  int x, y;\n} Point;" 
    },
    { 
        question: "Как вложить одну структуру в другую?", 
        answer: "Включите одну структуру внутрь другой:\n\nstruct Rectangle {\n  struct Point topLeft;\n  struct Point bottomRight;\n};" 
    },
    { 
        question: "Как работает выравнивание структуры в памяти?", 
        answer: "Компилятор может добавлять отступы (padding) для оптимизации доступа к памяти." 
    },
    { 
        question: "Как уменьшить размер структуры в памяти?", 
        answer: "Используйте #pragma pack(1) или правильный порядок полей." 
    },
    { 
        question: "Как определить размер структуры в байтах?", 
        answer: "Используйте оператор sizeof:\n\nprintf(\"%lu\", sizeof(struct Point));" 
    }
];



const FlashCard = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();
    const nextCard = () => {
        setIndex((prev) => (prev + 1) % flashcards.length);
        setIsFlipped(false);
    };
    const prevCard = () => {
        setIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
        setIsFlipped(false);
      };
    return (
        <div className="flash-card-section">
           <h2>{index + 1} из {flashcards.length}</h2>
           <Button className="test-mode-button" innerText={"Режим тестирования"} onClick={() => {navigate("/test")}}/>
           
        <div 
            className={`flash-card ${isFlipped ? "flipped" : ""}`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className="flash-card__content">
                    <div className="flash-card__front">{flashcards[index].question}</div>
                    <div className="flash-card__back">{flashcards[index].answer}</div>                                   
            </div>
        </div>
        <ul className="buttons-list">
            <button onClick={prevCard} disabled={index === 0} className="buttons-list__button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19L14.3306 12.7809C14.7158 12.3316 14.7158 11.6684 14.3306 11.2191L9 5" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
                </svg>

            </button>
            <button onClick={nextCard} disabled={index === flashcards.length - 1} className="buttons-list__button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19L14.3306 12.7809C14.7158 12.3316 14.7158 11.6684 14.3306 11.2191L9 5" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
                </svg>
            </button>
        </ul>
        </div>
    );
};

export default FlashCard;