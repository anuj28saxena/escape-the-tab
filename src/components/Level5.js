import React, { useState, useEffect } from "react";
import useSound from "use-sound";
// import correctSfx from "../../public/sounds/correct.wav";
// import wrongSfx from "../../public/sounds/wrong.wav";
// import blipSfx from "../../public/sounds/blip.wav";

const gridSize = 4;
const totalTiles = gridSize * gridSize;

const generateRandomPattern = (count, max) => {
  const set = new Set();
  while (set.size < count) {
    set.add(Math.floor(Math.random() * max));
  }
  return [...set];
};

const Level5 = ({ onComplete }) => {
  const [pattern, setPattern] = useState(generateRandomPattern(5, totalTiles));
  const [showPattern, setShowPattern] = useState(true);
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(10);
  const [attemptsLeft, setAttemptsLeft] = useState(3);

  // const [playCorrect] = useSound(correctSfx);
  // const [playWrong] = useSound(wrongSfx);
  // const [playBlip] = useSound(blipSfx);

  const [playBlip] = useSound(process.env.PUBLIC_URL + "/sounds/blip.wav");
  const [playCorrect] = useSound(process.env.PUBLIC_URL + "/sounds/correct.wav");
  const [playWrong] = useSound(process.env.PUBLIC_URL + "/sounds/wrong.wav");


  useEffect(() => {
    restart();
  }, []);

  useEffect(() => {
    if (showPattern || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [showPattern, timeLeft]);

  useEffect(() => {
    if (showPattern) {
      pattern.forEach((tile, index) => {
        setTimeout(() => playBlip(), index * 200);
      });
    }
  }, [showPattern]);

  const toggleTile = (index) => {
    if (showPattern) return;
    setSelected((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const checkPattern = () => {
    const sorted = [...selected].sort((a, b) => a - b);
    const correct = [...pattern].sort((a, b) => a - b);
    const isCorrect =
      sorted.length === correct.length &&
      sorted.every((val, i) => val === correct[i]);

    if (isCorrect) {
      playCorrect();
      onComplete();
    } else {
      playWrong();
      setError("Incorrect pattern. Try again.");
      setAttemptsLeft((prev) => prev - 1);
      if (attemptsLeft <= 1) {
        setError("Game Over. You ran out of attempts.");
        return;
      }
      restart();
    }
  };

  const restart = () => {
    setPattern(generateRandomPattern(5, totalTiles));
    setSelected([]);
    setError("");
    setShowPattern(true);
    setTimeLeft(10);
    setTimeout(() => setShowPattern(false), 2000);
  };

  return (
    <div className="level5-container">
      <h2>Level 5: Memorize and Repeat the Pattern</h2>
      <p className="instruction">
        {showPattern ? "Memorize the highlighted tiles!" : "Now recreate it."}
      </p>

      <div className="status-bar">
        <p>⏱ Time Left: {timeLeft}s</p>
        <p>🧠 Attempts Left: {attemptsLeft}</p>
      </div>

      <div className="grid">
        {[...Array(totalTiles)].map((_, i) => (
          <div
            key={i}
            className={`tile
              ${showPattern && pattern.includes(i) ? "show" : ""}
              ${!showPattern && selected.includes(i) ? "selected" : ""}
            `}
            onClick={() => toggleTile(i)}
          />
        ))}
      </div>

      {!showPattern && (
        <button className="submit-btn" onClick={checkPattern}>
          Submit Pattern
        </button>
      )}

      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default Level5;
