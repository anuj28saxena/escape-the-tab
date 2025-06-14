import React, { useState } from "react";

const Level3 = ({ onComplete }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsUnlocked(true);
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", "key");
  };

  return (
    <div className="level3-container">
      <h2>Level 3: Drag the Key to Unlock</h2>
      <p className="instruction">Grab the key and drop it on the lock 🔐</p>

      <div className="game-area">
        <img
          src="https://cdn-icons-png.flaticon.com/512/54/54702.png"
          alt="key"
          className="key"
          draggable
          onDragStart={handleDragStart}
        />

        <div
          className={`lock ${isUnlocked ? "unlocked" : ""}`}
          onDrop={handleDrop}
          onDragOver={allowDrop}
        >
          🔐
        </div>
      </div>

      {isUnlocked && <p className="success-text">Unlocked! Moving to the next level...</p>}
    </div>
  );
};

export default Level3;
