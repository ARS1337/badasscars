import React from "react";
import "./styles/App.css";
import Header from "./Components/Header";
import StickyNotificationAtTop from "./Components/StickyNotificationAtTop";
import SearchBarAndOtherComponents from "./Components/SearchBarAndOtherComponents";

function App() {
  return (
    <div className="font-roboto">
      <StickyNotificationAtTop />
      <div className="px-8 bg-CorrectGrey">
        <Header />
        <SearchBarAndOtherComponents />
      </div>
    </div>
  );
}

export default App;
