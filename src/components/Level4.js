import React, { useState } from "react";

const Level4 = ({ onComplete }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [error, setError] = useState("");

  const correctAnswer = "hello world";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userAnswer.trim().toLowerCase() === correctAnswer) {
      onComplete();
    } else {
      setError("That's not the correct message. Try again.");
    }
  };

  return (
    <div className="level4-container">
      <h2>Level 4: Decode the Cipher</h2>
      <p className="cipher-text">
        Ciphered Message: <strong>khoor zruog</strong>
      </p>
      <p className="hint-text">
        Hint: It's a Caesar Cipher. Letters have been shifted by +3.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Enter decrypted message"
          className="cipher-input"
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default Level4;
