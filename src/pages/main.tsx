// Imoprting Components
import Layout from "../layout/layout";
import Image from "../components/image";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import Button from "../components/button";

export default function MainPage() {
  return (
    <>
      <Layout>
        <div className="page-main-container">
          <section className="page-main-text-container">
            {/*Dados mockados */}
            <h2>Olá, sou Gabriel Cássio</h2>
            <p>
              Estudante pesquisador em Arquitetura e Design de Software, mas
              também Designer de Hardware. Além de Aluno do CIN - UFPE em
              Sistemas de Informação, sou um player da área de Games de Impacto
              Histórico/Social.
            </p>
            <div className=""></div>
          </section>
          <section className="page-main-image-container">
            <Image
              src="/src/assets/personal-photo.png"
              alt="Cássio image"
              width={2000}
              height={2000}
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
