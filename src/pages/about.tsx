// Importing Components
import Layout from "../layout/layout";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";

export function AboutPage() {
  return (
    <Layout>
      <section className="flex flex-1">
        <div className="">
          <h1>Trajetória Acadêmica</h1>
          <p></p>
        </div>
        <div>
          <h1>Stacks Tecnológicas</h1>
          <p></p>
        </div>
        <div>
          <h1>Objetivos Profissionais</h1>
          <p></p>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AboutPage />
  </StrictMode>,
);
