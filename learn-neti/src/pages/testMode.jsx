import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Main from "../components/main/main";
import TestMode from "../components/test/test";

const TestPage = () => {
    const { deckId } = useParams(); // Получаем deckId из URL
    const [tests, setTests] = useState([]); // Состояние для хранения тестов
    const [loading, setLoading] = useState(true); // Состояние загрузки
    const [error, setError] = useState(null); // Состояние ошибки
    const API_URL = process.env.REACT_APP_API_URL;
    // Выполняем fetch запрос при монтировании компонента
    useEffect(() => {
        const fetchTests = async () => {
            try {
                const response = await fetch(`https://cors-proxy-kyve.onrender.com/${API_URL}/api/v1/deck/${deckId}/start`);
                if (!response.ok) {
                    throw new Error(`Ошибка HTTP: ${response.status}`);
                }
                const data = await response.json();
                if (data.success) {
                    setTests(data.data.tests); // Сохраняем массив тестов
                } else {
                    setError("Ошибка при получении данных: " + data.msg);
                }
            } catch (err) {
                setError("Не удалось получить данные: " + err.message);
            } finally {
                setLoading(false); // Загрузка завершена
            }
        };

        fetchTests();
    }, [deckId]); // Зависимость от deckId

    // Если данные еще загружаются
    if (loading) {
        return <div>Загрузка...</div>;
    }

    // Если произошла ошибка
    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <>
            <Main content={<TestMode tests={tests} />} />
        </>
    );
};

export default TestPage;