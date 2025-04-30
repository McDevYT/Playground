import "./UnknownPage.css";
import Ribbons from "../ribbons/Ribbons.tsx";

function UnknownPage() {
  return (
    <>
      <h1>404 Page not found!</h1>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 10,
          overflow: "hidden",
        }}
      >
        <Ribbons
          baseThickness={30}
          colors={["#ffffff"]}
          speedMultiplier={0.5}
          maxAge={500}
          enableFade={false}
        />
      </div>
    </>
  );
}

export default UnknownPage;
