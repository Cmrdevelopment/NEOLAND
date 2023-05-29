import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//createRoot > creando una raiz
// document.getElementById('root')).render me vas a renderizar y renderizar es pintar. Render es un método de REACT
// <React.StrictMode>
// <App />
// </React.StrictMode>,

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// En APP es donde realmente tenemos nuestra aplicación

//
