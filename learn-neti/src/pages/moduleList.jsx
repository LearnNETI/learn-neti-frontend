import React from "react";
import ModulesSection from "../components/modules-section/modules-section";
import Main from "../components/main/main";

const ModulesPage = (props) => {
    return (
        <>
        <Main content={<ModulesSection/>}></Main>
        </>
    );
}
export default ModulesPage;