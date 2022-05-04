import React, { Suspense } from "react";
import "./styles/App.css";
const MainPage = React.lazy(() => import("./Components/MainPage"));

function App() {
  return (
    <div className="font-roboto bg-CorrectGrey">
      <img src="/assets/cityscape.png" height="100%" width="100%" alt="cityscape" className=" absolute z-0 pt-32   " />
      <div style={{ width: "50px" }}></div>
      <Suspense fallback="loading...">
        <MainPage />
      </Suspense>
    </div>
  );
}

export default App;
