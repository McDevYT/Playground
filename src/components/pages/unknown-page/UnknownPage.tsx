import "./UnknownPage.css";
import FuzzyText from "./FuzzyText";
import Noise from "./Noise";

function UnknownPage() {
  return (
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
      <FuzzyText
        baseIntensity={0.2}
        enableHover={true}
        color="rgb(170, 170, 170)"
      >
        404
      </FuzzyText>
      <br />
      <FuzzyText
        baseIntensity={0.2}
        fontSize={45}
        color="rgb(170, 170, 170)"
        enableHover={true}
      >
        Not Found
      </FuzzyText>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <Noise
          patternSize={250}
          patternScaleX={10}
          patternScaleY={3}
          patternRefreshInterval={1}
          patternAlpha={15}
        />
      </div>
    </div>
  );
}

export default UnknownPage;
