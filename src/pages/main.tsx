// Imoprting Components
import Layout from "../layout/layout";
import Image from "../components/image";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import NavLink from "../components/navlink";

export default function MainPage() {
  return (
    <>
      <Layout>
        <div className="page-main-container">
          <section className="page-main-text-container">
            <h2>Olá, sou Gabriel Cássio</h2>
            <p>
              Estudante pesquisador em Arquitetura e Design de Software, mas
              também Designer de Hardware. Além de Aluno do CIN - UFPE em
              Sistemas de Informação, sou um player da área de Games de Impacto
              Histórico/Social.
            </p>
            <div className="page-main-icons">
              <NavLink
                href="https://github.com/GabrielCassio"
                icon="https://img.icons8.com/3d-sugary/100/github.png"
              ></NavLink>
              <NavLink
                href="www.linkedin.com/in/gabrielcássio"
                icon="https://img.icons8.com/3d-sugary/100/linkedin.png"
              ></NavLink>
              <NavLink
                href=""
                icon="https://img.icons8.com/3d-sugary/100/gmail-logo.png"
              ></NavLink>
            </div>
          </section>
          <section className="page-main-image-container">
            <Image
              src="/src/assets/personal-photo.png"
              alt="Cássio image"
              width={1200}
              height={1200}
            ></Image>
          </section>
        </div>
      </Layout>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainPage />
  </StrictMode>,
);
