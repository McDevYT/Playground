import "./Navbar.css";
import facePNG from "../assets/face.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img
        src={facePNG}
        alt="Logo"
        className="navbar-logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <h1 className="navbar-title">McDevYT.com</h1>
      <nav>
        <a
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </a>
        <a
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </a>
        <a
          onClick={() => {
            navigate("/qna");
          }}
        >
          QnA
        </a>
        <a
          onClick={() => {
            navigate("/sdf");
          }}
        >
          404
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
