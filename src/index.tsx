import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from "react-router-dom";
import SecondPage from "./Components/SecondPage";
import ThirdPage from "./Components/ThirdPage";
import MainPage from "./Components/MainPage";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
