// REACT AND REACT DOM & BROWSER ROUTER
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// TWO IMPORT FILES FOR LOADING THE APP
import "./index.css";
import App from "./App";


// WRAP YOUR APP INSIDE BROWSER ROUTER
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
