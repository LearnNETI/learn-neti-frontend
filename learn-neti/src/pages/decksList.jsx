import React from "react";
import Main from "../components/main/main";
import Feed from "../components/feed/feed";
const DecksList = () => {
    return (
        <>
        <Main content={
            <Feed
            subject="Программирование"
            hasTest="Тест"
            mainTitle="Структуры"
            subTitle="Объявление структур. Способы управления структурами"
            amount="10"
            />}></Main>
        </>
    );
};

export default DecksList;