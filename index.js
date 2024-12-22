import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Si deseas incluir estilos globales
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
