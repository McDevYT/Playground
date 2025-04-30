import { useState } from "react";
import facePNG from "../assets/face.png";
import "./Home.css";
import StarBorder from "../starborder/Starborder.tsx";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StarBorder color="cyan" speed="1s">
        <img src={facePNG} className="logo mcdevyt" alt="McDevYT" />
      </StarBorder>
      <h1>McDevYT</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default Home;
