import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FavoritesProvider } from "./hooks/useFavoritesContext";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </React.StrictMode>
);

// © 2025 Manash Baruah — Undriling's Cinestream
// For Undriling’s personal and educational use ONLY — DO NOT COPY or SHARE.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
