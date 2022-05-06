import React, { Suspense, useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MainPage from "./Components/MainPage";
import SecondPage from "./Components/SecondPage";
import ThirdPage from "./Components/ThirdPage";
import "./styles/App.css";
import debounce from "./utils/debounce";
import ScrollContext from "./utils/ScrollContext";

function App() {
  const [scrollPosition, setscrollPosition] = useState(1);

  useEffect(()=>{console.log('scrollPosition ',scrollPosition)},[scrollPosition])

  return (
    <div className="font-roboto bg-CorrectGrey">
      <ScrollContext.Provider value={{ scrollPosition: scrollPosition, setscrollPosition: setscrollPosition }}>
        {/* <TransitionGroup>
        <CSSTransition key={currentPage} classNames="fade" timeout={600}> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/SecondPage" element={<SecondPage />} />
            <Route path="/ThirdPage" element={<ThirdPage />} />
          </Routes>
        </BrowserRouter>
        {/* </CSSTransition>
      </TransitionGroup> */}
      </ScrollContext.Provider>
    </div>
  );
}

export default App;
