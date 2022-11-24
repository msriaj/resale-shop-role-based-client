import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserContext from "./Context/AuthContext";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContext>
      <App />
    </UserContext>
  </React.StrictMode>
);

reportWebVitals();
