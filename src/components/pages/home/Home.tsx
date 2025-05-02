import AnimatedContent from "../../animated-content/AnimatedContent";
import facePNG from "../../../assets/face.png";
import LetterGlitch from "../../glitch-text/LetterGlitch";
import "./Home.css";

function Home() {
  return (
    <>
      <div
        className="home"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
          glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
        />
      </div>
      <div
        style={{
          height: "auto",
          width: "100%",
          zIndex: "10",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // <-- this centers horizontally
            justifyContent: "center",
            width: "100vw",
            zIndex: "10",
            position: "relative", // so that absolute children still behave properly
          }}
        >
          <AnimatedContent delay={500} fade="fade-in">
            <img
              style={{ borderRadius: "25%" }}
              src={facePNG}
              className="logo mcdevyt"
              alt="McDevYT"
              onClick={() => {
                window.open("https://mcdevyt.ch", "_blank");
              }}
            />
          </AnimatedContent>

          <AnimatedContent delay={1500} fade="fade-in">
            <h1 style={{ zIndex: 100, color: "white" }}>McDevYT</h1>
          </AnimatedContent>
        </div>

        <div
          style={{
            position: "absolute",
            fontSize: "2em",
            top: "70%",
            left: 0,
            width: "100%",
            height: "auto",
            background: "#222742",
            borderRadius: "2% 2% 0% 0%",
            filter: "drop-shadow(0 0 1emrgba(2, 62, 140, 0.78))",
          }}
        >
          <p>Crazy mega advanced super quantum technological Webpage.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
