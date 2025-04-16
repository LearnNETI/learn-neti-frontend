import React, { useState } from "react";
import "./test.css";

const TestMode = ({ tests }) => {
    const flashcards = tests.map(test => ({
        question: test.question,
        options: test.options.map(option => option.text),
        correctAnswer: test.options.find(option => option.is_correct)?.text
    }));

    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState(Array(tests.length).fill(null)); // Массив ответов
    const [isTestComplete, setIsTestComplete] = useState(false);

    // Текущий выбранный вариант (для удобства)
    const currentSelectedOption = selectedOptions[currentCardIndex];

    const handleOptionChange = (e) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[currentCardIndex] = e.target.value;
        setSelectedOptions(newSelectedOptions);
    };

    const handleNextQuestion = () => {
        if (currentCardIndex + 1 < flashcards.length) {
            setCurrentCardIndex(currentCardIndex + 1);
        } else {
            setIsTestComplete(true);
        }
    };

    const handlePrevQuestion = () => {
        if (currentCardIndex > 0) {
            setCurrentCardIndex(currentCardIndex - 1);
        }
    };

    const resetTest = () => {
        setCurrentCardIndex(0);
        setSelectedOptions(Array(tests.length).fill(null));
        setIsTestComplete(false);
    };

    // Подсчёт правильных ответов (для результатов)
    const correctAnswers = selectedOptions.reduce((count, answer, index) => {
        return answer === flashcards[index]?.correctAnswer ? count + 1 : count;
    }, 0);

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
                                    checked={currentSelectedOption === option}
                                    onChange={handleOptionChange}
                                />
                                <label htmlFor={`option-${index}`}>{option}</label>
                            </div>
                        ))}
                    </div>

                    <div className="test-navigation">
                        <button 
                            className="test-btn"
                            onClick={handlePrevQuestion}
                            disabled={currentCardIndex === 0}
                        >
                            Назад
                        </button>
                        <button 
                            className="test-btn"
                            onClick={handleNextQuestion}
                            disabled={currentSelectedOption === null}
                        >
                            {currentCardIndex + 1 === flashcards.length ? "Завершить" : "Далее"}
                        </button>
                    </div>
                    <p className="test-question-info">
                        {currentCardIndex + 1} из {flashcards.length}
                    </p>
                </div>
            )}
        </section>
    );
};

export default TestMode;