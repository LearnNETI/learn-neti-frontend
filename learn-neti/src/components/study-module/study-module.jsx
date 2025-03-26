import React from "react";
import "./study-module.css"

const StudyModule = (props) => {
    return (
        <div className="study-module">
            <h3 className="study-module__header">
                {props.moduleHeader}
            </h3>
            <div className="study-module__card">
                <p className="study-module__c-head">{props.deckName1}</p>
            </div>
            <div className="study-module__card">
                <p className="study-module__c-head">{props.deckName2}</p>
            </div>
            <div className="study-module__card">
                <p className="study-module__c-head">{props.deckName3}</p>
            </div>
        </div>
    );
}

export default StudyModule;