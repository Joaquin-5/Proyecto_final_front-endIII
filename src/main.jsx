import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import { ThemeContextProvider } from "./Components/utils/themeContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <Navbar />
        <App />
        <Footer />
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>
);
