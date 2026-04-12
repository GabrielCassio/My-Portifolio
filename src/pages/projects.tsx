// Importing Components
import Layout from "../layout/layout";
import Carousel from "../components/carousel";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";

export function ProjectsPage() {
  return (
    <>
      <Layout>
        <div className="flex flex-1 justify-center items-center">
          <Carousel />
        </div>
      </Layout>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProjectsPage />
  </StrictMode>,
);
