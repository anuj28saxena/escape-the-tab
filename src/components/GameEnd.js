// src/components/GameEnd.js
import React from "react";
// import "./GameEnd.css";

const GameEnd = ({ onRestart }) => {
  return (
    <div className="gameend-container">
      <h1 className="title">🎉 Congratulations! 🎉</h1>
      <p className="subtitle">You’ve escaped the tab!</p>

      <div className="message">
        <p>Each level tested your logic, memory, and curiosity.</p>
        <p>You didn’t just play a game — you outsmarted it. 🧠💡</p>
      </div>

      <div className="buttons">
        <button onClick={onRestart} className="restart-btn">🔁 Try Again</button>
        <a
          href="https://twitter.com/intent/tweet?text=I%20just%20escaped%20the%20tab!%20Can%20you%3F%20%23EscapeTheTab"
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn"
        >
          📤 Share
        </a>
      </div>

      <p className="footer">Thanks for playing. Until the next escape... 🕳️</p>
    </div>
  );
};

export default GameEnd;
