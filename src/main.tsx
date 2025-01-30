import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { About } from "./routes/about";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
