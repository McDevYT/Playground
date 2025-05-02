import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "../navbar/Navbar.tsx";
import Home from "../pages/home/Home.tsx";
import UnknownPage from "../pages/unknown-page/UnknownPage.tsx";
import About from "../pages/about/About.tsx";
import QnA from "../pages/questions-and-answers/QnA.tsx";
import Contact from "../pages/contact/Contact.tsx";

function App() {
  return (
    <>
      <Navbar />
      <div
        style={{
          height: "auto",
          width: "100%",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/qna" element={<QnA />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<UnknownPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
