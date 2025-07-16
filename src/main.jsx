import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CookiesProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </CookiesProvider>
  </BrowserRouter>
);
