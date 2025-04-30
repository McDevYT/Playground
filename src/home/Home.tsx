  import facePNG from "../assets/face.png";
import "./Home.css";

function Home() {
  return (
    <div style={{height:"10000px", paddingTop:"150%"}}>
      <img src={facePNG} className="logo mcdevyt" alt="McDevYT" onClick={()=>{window.open("https://mcdevyt.ch", "_blank")}}/>
      <h1 className="fade-in">McDevYT</h1>
      <div className="fade-in">
        Hey
      </div>
    </div>
  );
}

export default Home;
