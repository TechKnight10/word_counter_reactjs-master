// src/WordCounter.js
import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const WordCounter = () => {
  const [text, setText] = useState('');

  const countWords = () => {
    const words = text.trim().split(/\s+/);
    return words.filter(word => word !== '').length;
  };

  return (
    <div className="container">
        <h1>Responsive Paragragh Word Counter</h1>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type here..."
        rows="5"
        cols="30"
      />
      <p className="word-count">Word Count: {countWords()}</p>
    </div>
  );
};

export default WordCounter;
