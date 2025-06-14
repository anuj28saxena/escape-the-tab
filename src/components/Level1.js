import React, { useState } from 'react' ;

const Level1 = ({ onComplete }) => {

    const [hint, setHint] = useState(false);

  return (
    <div className="level-container">
        <h2>Level 1: Can You Find the Hidden Button?</h2>
        <p>Somewhere on this screen, there's a way to escape... 👀</p>

        <div className="hidden-button" onClick={onComplete}></div>

        <button className="hint-button" onClick={() => setHint(true)}>
            Need a Hint?
        </button>
        { hint && <p className="hint-text">Try clicking somewhere around the title...</p>}


    </div>
  )     
}

export default Level1