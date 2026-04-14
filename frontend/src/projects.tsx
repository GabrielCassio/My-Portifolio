import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProjectsPage from "./pages/page-projects";

createRoot(document.getElementById("root-projects")!).render(
  <StrictMode>
    <ProjectsPage />
  </StrictMode>,
);
