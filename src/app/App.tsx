import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../navbar/Navbar.tsx";
import Home from "../home/Home.tsx";
import UnknownPage from "../unknown-page/UnknownPage.tsx";
import About from "../about/About.tsx";
import QnA from "../questions-and-answers/QnA.tsx";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ height: "auto", width: "100%", overflow: "auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/qna" element={<QnA />} />
          <Route path="/*" element={<UnknownPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
