import { useNavigate } from 'react-router-dom';
import React from 'react';
import './form.css';

const Form = ({ searchTerm, onSearchChange }) => {
    const navigate = useNavigate();
  return (
    <div className="search-form">
      <input
        className="search-form__input"
        type="text"
        placeholder="Найти наборы"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default Form;