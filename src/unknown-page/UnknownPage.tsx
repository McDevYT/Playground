import "./UnknownPage.css";
import FuzzyText from "./FuzzyText";
import Noise from "./Noise";

function UnknownPage() {
  return (
    <>
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
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    zIndex: 10,
    pointerEvents: 'none',
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
    </>
  );
}

export default UnknownPage;
