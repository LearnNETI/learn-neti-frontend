import React, { useState } from "react";
import "./test.css"; // Подключаем стили

const TestMode = ({ flashcards }) => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [isTestComplete, setIsTestComplete] = useState(false);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleAnswerSubmit = () => {
        if (selectedOption === flashcards[currentCardIndex].correctAnswer) {
            setCorrectAnswers(correctAnswers + 1); // Увеличиваем количество правильных ответов
        }
        if (currentCardIndex + 1 < flashcards.length) {
            setCurrentCardIndex(currentCardIndex + 1);
            setSelectedOption(null); // Сбрасываем выбранный вариант
        } else {
            setIsTestComplete(true); // Завершаем тест
        }
    };

    const resetTest = () => {
        setCurrentCardIndex(0);
        setSelectedOption(null);
        setCorrectAnswers(0);
        setIsTestComplete(false);
    };

    return (
        <section className="test-mode">
            {isTestComplete ? (
                <div className="test-results">
                    <h2>Результат теста</h2>
                    <p>
                        Вы ответили правильно на {correctAnswers} из {flashcards.length} вопросов.
                    </p>
                    <button onClick={resetTest} className="test-btn">Попробовать снова</button>
                </div>
            ) : (
                <div className="test-question">
                    <h2>Вопрос {currentCardIndex + 1}:</h2>
                    <p className="test-quest">{flashcards[currentCardIndex].question}</p>

            
                    <div className="options-list">
                        {flashcards[currentCardIndex].options.map((option, index) => (
                            <div key={index}>
                                <input
                                    type="radio"
                                    id={`option-${index}`}
                                    name="answer"
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={handleOptionChange}
                                />
                                <label htmlFor={`option-${index}`}>{option}</label>
                            </div>
                        ))}
                    </div>

                    <button className="test-btn" onClick={handleAnswerSubmit} disabled={selectedOption === null}>
                        Ответить
                    </button>
                    <p className="test-question-info">
                        {currentCardIndex + 1} из {flashcards.length}
                    </p>
                </div>
            )}
        </section>
    );
};

export default TestMode;
