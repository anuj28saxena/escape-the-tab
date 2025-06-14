import React, { useState } from 'react'

const Level2 = ({ onComplete }) => {

  const [answer, setAnswer] = useState("");  
  const [error, setError] = useState("");

  const correctAnswer = "echo";

  const handleSubmit = (e) => {
    e.preventDefault();
    if(answer.trim().toLowerCase() === correctAnswer)
        onComplete();
    else{
        setError("Hmm... that's not quite right. Try again.");
    }
  }


  return (
    <div className='level2-container'>
        <h2>Level 2: Solve the Riddle</h2>

        <p className='riddle'>
            I speak without a mouth and hear without ears. <br />
            I have nobody, but I come alive with the wind. <br />
            <strong>What am I?</strong>
        </p>

        <form onSubmit={handleSubmit}>

            <input 
                type="text"
                placeholder='Your Answer...'  
                value={answer}
                onChange={(e)=> setAnswer(e.target.value)}
                className='riddle-input'

            />
            <button type='submit' className='submit-btn'>
                Submit
            </button>

        </form>

        {error && <p className="error-text">{error}</p>}

    </div>
  )
}

export default Level2
