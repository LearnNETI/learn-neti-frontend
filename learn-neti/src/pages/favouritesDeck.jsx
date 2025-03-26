import React from "react";
import Main from "../components/main/main";
import Favorites from "../components/feed/favourites";
const FavouriteDecks = () => {
    return (
        <>
        <Main content={<Favorites/>}></Main>
        </>
    );
};

export default FavouriteDecks;