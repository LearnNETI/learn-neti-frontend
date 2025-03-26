import React from "react";
import "./modules-section.css"
import StudyModule from "../study-module/study-module";
const ModulesSection = (props) => {
    return (
        <div className="modules-section">
            <StudyModule moduleHeader={"Модуль 1 (1-7 неделя)"}
            deckName1={"Рекурсивные алгоритмы"}
            deckName2={"Структуры. Объявление структур. Способы управления структурами"}
            deckName3={"Структуры данных. Списки. Виды списков. Бинарные деревья"}
            />
            <StudyModule moduleHeader={"Модуль 2 (8-13 неделя)"}
            deckName1={"Очереди. Принципы работы очереди. Файлы. Небуферезированный ввод/вывод"}
            deckName2={"Классы. Синтаксис объявления классов. Устройство класса."}
            deckName3={"Методы классов. Управление классами. Исключения"}
            />
            <StudyModule moduleHeader={"Модуль 3 (14-18 неделя)"}
            deckName1={"Классы. Агрегация и композиция. Перечисления"}
            deckName2={"Коллекции. STL-контейнер. Инструкция throw"}
            deckName3={"Экзамен C/C++"}
            />
            
        </div>
    );
}
export default ModulesSection;