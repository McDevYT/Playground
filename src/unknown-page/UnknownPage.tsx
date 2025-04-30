import "./UnknownPage.css";
import FuzzyText from "../fuzzy-text/FuzzyText";

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
    </>
  );
}

export default UnknownPage;
