import React from "react";
import Main from "../components/main/main";
import TestMode from "../components/test/test";
const testQuestions = [
    {
        question: "Что такое структура в C?",
        correctAnswer: "Структура в C — это пользовательский тип данных, который объединяет несколько переменных разного типа под одним именем.",
        options: [
            "Структура в C — это пользовательский тип данных, который объединяет несколько переменных разного типа под одним именем.", // правильный
            "Структура в C — это массив данных одного типа.", // неверный
            "Структура в C — это набор одинаковых данных, объединенных по категории.", // неверный
        ]
    },
    {
        question: "Как объявить структуру в C?",
        correctAnswer: "Используйте ключевое слово struct:\n\nstruct Point {\n  int x;\n  int y;\n};",
        options: [
            "Используйте ключевое слово struct:\n\nstruct Point {\n  int x;\n  int y;\n};", // правильный
            "Используйте ключевое слово class:\n\nclass Point {\n  int x;\n  int y;\n};", // неверный
            "Используйте ключевое слово structure:\n\nstructure Point {\n  int x;\n  int y;\n};", // неверный
        ]
    },
    {
        question: "Как создать переменную структуры?",
        correctAnswer: "Используйте объявленную структуру:\n\nstruct Point p1;\np1.x = 10;\np1.y = 20;",
        options: [
            "Используйте объявленную структуру:\n\nstruct Point p1;\np1.x = 10;\np1.y = 20;", // правильный
            "Просто создайте переменную: int p1 = 10;", // неверный
            "Используйте тип данных: int p1 = new Point(10, 20);", // неверный
        ]
    },
    {
        question: "Как передать структуру в функцию?",
        correctAnswer: "Передача возможна по значению или по указателю:\n\nvoid printPoint(struct Point p) {...}\nvoid modifyPoint(struct Point *p) {...}",
        options: [
            "Передача возможна по значению или по указателю:\n\nvoid printPoint(struct Point p) {...}\nvoid modifyPoint(struct Point *p) {...}", // правильный
            "Передача возможна только по значению:\n\nvoid printPoint(struct Point p) {...}", // неверный
            "Передача возможна только по указателю:\n\nvoid modifyPoint(struct Point *p) {...}", // неверный
        ]
    },
    {
        question: "Как выделить память для структуры динамически?",
        correctAnswer: "Используйте malloc:\n\nstruct Point *p = (struct Point*)malloc(sizeof(struct Point));",
        options: [
            "Используйте malloc:\n\nstruct Point *p = (struct Point*)malloc(sizeof(struct Point));", // правильный
            "Используйте new:\n\nstruct Point *p = new struct Point;", // неверный
            "Используйте allocate:\n\nstruct Point *p = allocate(sizeof(struct Point));", // неверный
        ]
    },
    {
        question: "Что такое typedef для структуры?",
        correctAnswer: "Позволяет создать псевдоним для структуры:\n\ntypedef struct Point {\n  int x, y;\n} Point;",
        options: [
            "Позволяет создать псевдоним для структуры:\n\ntypedef struct Point {\n  int x, y;\n} Point;", // правильный
            "Позволяет сделать структуру наследуемой:\n\ntypedef struct Point {\n  int x, y;\n} Point;", // неверный
            "Позволяет создавать структуру с обязательным именем:\n\ntypedef struct {\n  int x, y;\n} Point;", // неверный
        ]
    },
    {
        question: "Как вложить одну структуру в другую?",
        correctAnswer: "Включите одну структуру внутрь другой:\n\nstruct Rectangle {\n  struct Point topLeft;\n  struct Point bottomRight;\n};",
        options: [
            "Включите одну структуру внутрь другой:\n\nstruct Rectangle {\n  struct Point topLeft;\n  struct Point bottomRight;\n};", // правильный
            "Просто создайте массив структур внутри другой структуры:\n\nstruct Rectangle {\n  struct Point points[2];\n};", // неверный
            "Примените указатели на структуры:\n\nstruct Rectangle {\n  struct Point *topLeft;\n  struct Point *bottomRight;\n};", // неверный
        ]
    },
    {
        question: "Как работает выравнивание структуры в памяти?",
        correctAnswer: "Компилятор может добавлять отступы (padding) для оптимизации доступа к памяти.",
        options: [
            "Компилятор может добавлять отступы (padding) для оптимизации доступа к памяти.", // правильный
            "Структура всегда выравнивается по границе максимального размера типа данных в структуре.", // неверный
            "Структуры не имеют выравнивания, все поля идут подряд.", // неверный
        ]
    },
    {
        question: "Как уменьшить размер структуры в памяти?",
        correctAnswer: "Используйте #pragma pack(1) или правильный порядок полей.",
        options: [
            "Используйте #pragma pack(1) или правильный порядок полей.", // правильный
            "Используйте #pragma reduce_size(1).", // неверный
            "Используйте #align 1 для каждого поля.", // неверный
        ]
    },
    {
        question: "Как определить размер структуры в байтах?",
        correctAnswer: "Используйте оператор sizeof:\n\nprintf(\"%lu\", sizeof(struct Point));",
        options: [
            "Используйте оператор sizeof:\n\nprintf(\"%lu\", sizeof(struct Point));", // правильный
            "Используйте команду sizeof в скобках:\n\nsizeof(struct Point) bytes;", // неверный
            "Используйте встроенную функцию get_size():\n\nget_size(struct Point);", // неверный
        ]
    }
];

const TestPage = () => {
    return (
        <>
        <Main content={<TestMode flashcards={testQuestions}/>}></Main>
        </>
    );
};

export default TestPage;