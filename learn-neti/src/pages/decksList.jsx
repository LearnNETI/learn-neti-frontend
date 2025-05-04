import React, { useState, useEffect } from "react";
import Main from "../components/main/main";
import Feed from "../components/feed/feed";
import "./decksList.css";

const DecksList = ({ searchTerm }) => { // Принимаем searchTerm как проп
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState("Все");
  const API_URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    fetch(`https://cors-proxy-kyve.onrender.com/api/v1/deck/list`)
      .then(response => {
        if (!response.ok) throw new Error("Network error");
        return response.json();
      })
      .then(data => {
        setDecks(data.data.decks || []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const subjects = ["Все", ...new Set(decks.map(deck => deck.subject))];

  const filteredDecks = decks.filter(deck => {
    const matchesSubject = selectedSubject === "Все" || deck.subject === selectedSubject;
    const matchesSearch = searchTerm === '' || 
      deck.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      deck.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSubject && matchesSearch;
  });

  if (loading) return <div className="loading">Загрузка...</div>;
  if (error) return <div className="error">Ошибка: {error}</div>;

  return (
    <Main content={
      <section className="decks-container">
        <div className="decks-header">
          <h2 className="recommendation-title">Рекомендуем:</h2>
          <select
            className="subject-filter"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
        <div className="decks-list">
          {filteredDecks.map(deck => (
            <Feed
              key={deck.id}
              id={deck.id}
              subject={deck.subject}
              hasTest={"Вопросы теста: " + deck.tests_amount}
              mainTitle={deck.title}
              subTitle={deck.subtitle}
              amount={deck.cards_amount}
            />
          ))}
        </div>
      </section>
    } />
  );
};

export default DecksList;