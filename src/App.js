import React, { useState } from "react";
import Level1 from "./components/Level1";
import Level2 from "./components/Level2";
import Level3 from "./components/Level3";
import Level4 from "./components/Level4";
import Level5 from "./components/Level5";
import GameEnd from "./components/GameEnd";

import './App.css';


function App() {

  const [level, setLevel] = useState(1);

  return (
    <div>
        {level === 1 && <Level1 onComplete={() => setLevel(2)} />}
        {level === 2 && <Level2 onComplete={() => setLevel(3)} />}
        {level === 3 && <Level3 onComplete={() => setLevel(4)} />}
        {level === 4 && <Level4 onComplete={() => setLevel(5)} />}
        {level === 5 && <Level5 onComplete={() => setLevel(6)} />}
        {level === 6 && <GameEnd onRestart={() => setLevel(1)} />}



    </div>
  );
}

export default App;
