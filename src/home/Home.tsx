import { useState } from "react";
import facePNG from "../assets/face.png";
import "./Home.css";
import StarBorder from "../starborder/Starborder.tsx";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StarBorder className="fade-in" color="cyan" speed="1s">
        <img src={facePNG} className="logo mcdevyt" alt="McDevYT" />
      </StarBorder>
      <h1 className="fade-in">McDevYT</h1>
      <div className="fade-in">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default Home;
