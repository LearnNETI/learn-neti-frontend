import React from "react";
import Main from "../components/main/main";
import Feed from "../components/feed/feed";
const DecksList = () => {
    return (
        <>
        <Main content={<Feed/>}></Main>
        </>
    );
};

export default DecksList;