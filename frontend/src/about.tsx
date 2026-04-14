import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AboutPage from "./pages/page-about";

createRoot(document.getElementById("root-about")!).render(
  <StrictMode>
    <AboutPage />
  </StrictMode>,
);
