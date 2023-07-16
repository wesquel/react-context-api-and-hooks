import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global-styles.css";

import Home from "./Templates/Home";
import { CounterContextProvider } from "./contexts/CounterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CounterContextProvider>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
    ,
  </CounterContextProvider>,
);
