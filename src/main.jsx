import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./styles/globals.css"
import "./i18n"

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
