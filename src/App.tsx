import { useState } from "react";
import facePNG from "./assets/face.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://mcdevyt.ch" target="_blank">
          <img src={facePNG} className="logo mcdevyt" alt="McDevYT" />
        </a>
      </div>
      <h1>McDevYT</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
