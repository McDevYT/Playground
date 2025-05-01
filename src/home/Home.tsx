import AnimatedContent from "../animated-content/AnimatedContent";
import facePNG from "../assets/face.png";
import LetterGlitch from "../glitch-text/LetterGlitch";
import Ribbons from "../ribbons/Ribbons";
import "./Home.css";

function Home() {
  return (
    <>
      <div
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

        <div style={{ zIndex: 10000 }}>
          <Ribbons
            baseThickness={30}
            colors={["#FFFFFF"]}
            speedMultiplier={1}
            maxAge={1000}
            enableFade={false}
          />
        </div>
      </div>
      <div
        style={{
          height: "auto",
          width: "100%",
          zIndex: "10",
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

        <AnimatedContent delay={1000} fade="fade-in">
          <h1 style={{ zIndex: 20000, position: "relative", color: "white" }}>
            McDevYT
          </h1>
        </AnimatedContent>

        <AnimatedContent
          delay={1500}
          style={{
            position: "absolute",
            top: "70%",
            left: 0,
            width: "100%",
            height: "1000px",
            background: "#222742",
            borderRadius: "2% 2% 0% 0%",
            filter: "drop-shadow(0 0 1emrgba(2, 62, 140, 0.78))",
          }}
        ></AnimatedContent>
      </div>
    </>
  );
}

export default Home;
