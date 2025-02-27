import React from "react";
import Main from "../components/main/main";
import FlashCard from "../components/flash-card/flash-card";
const DeckStart = () => {
    return (
        <>
        <Main content={<FlashCard frontText="Привет" backText="Пока"/>}></Main>
        </>
    );
};

export default DeckStart;