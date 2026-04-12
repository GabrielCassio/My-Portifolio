// Components
import Layout from "../layout/layout";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";

export default function MainPage() {
  return (
    <>
      <Layout>
        <div className="flex flex-1">
          <section>
            {/*Dados mockados */}
            <p>Gabriel Cássio Gomes Cileiro</p>
            <p>
              Olá, sou formado em Técnico em Eletrônica, já participei deu 1
              projeto de pesquisa, 2 de extensão e possuo uma Gradução em
              Sistemas de Informação em andamento
            </p>
            <p>Sistemas de Informação - Desenvolvimento de Software</p>
            <p>Arquitetura e Design de Software</p>
            <p>Email: gcgc@cin.ufpe.br</p>
          </section>
          <section></section>
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
