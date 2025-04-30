import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar/Navbar.tsx";
import Home from "./home/Home.tsx";
import UnknownPage from "./unknown-page/UnknownPage.tsx";
import About from "./about/About.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<UnknownPage />} />
      </Routes>
    </>
  );
}

export default App;
