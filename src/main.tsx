import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { About } from "./routes/about";
import { LayoutRoute } from "./routes/layout.tsx";
import { App } from "./App.tsx";
import { TaskDetail } from "./routes/task-detail.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutRoute />}>
          <Route index path="/" element={<App />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="tasks/:id" element={<TaskDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
