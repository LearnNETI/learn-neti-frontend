import React from "react";
const Main = (props) => {
    return (
        <main className="main-container">
            <div className="wrapper">
            {props.content}
            </div>
            
        </main>
    );
};

export default Main;