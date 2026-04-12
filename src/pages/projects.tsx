import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
// Importing Components
import Layout from "../layout/layout";

export function ProjectsPage() {
  return (
    <>
      <Layout>
        <section>
          <p>Projects</p>
        </section>
      </Layout>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProjectsPage />
  </StrictMode>,
);
