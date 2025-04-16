import React from "react";
import { useParams } from "react-router-dom";
import Main from "../components/main/main";
import FlashCard from "../components/flash-card/flash-card";

const DeckStart = () => {
    const { deckId } = useParams(); // Получаем deckId из URL
    
    return (
        <Main content={<FlashCard deckId={deckId} />} />
    );
};

export default DeckStart;