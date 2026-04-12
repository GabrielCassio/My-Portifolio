// Importing Components
import Layout from "../layout/layout";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";

export function AboutPage() {
  return (
    <Layout>
      <section>
        <p>
          trajetória acadêmica interesses em tecnologia habilidades técnicas
          objetivos profissionais
        </p>
      </section>
    </Layout>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AboutPage />
  </StrictMode>,
);
