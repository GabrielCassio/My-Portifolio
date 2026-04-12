// Importing Components
import Layout from "../layout/layout";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";

export function AboutPage() {
  return (
    <>
      <Layout>
        <section className="flex flex-1 gap-16 py-16 text-justify">
          <div id="trajetoria">
            <h1>Minha Trajetória Acadêmica</h1>
            <p>
              Minha vida no curso de Sistemas de Informação é um equilíbrio
              entre a gestão e a execução. Como diretor da Liga Acadêmica de
              Engenharia de Software, foco em metodologias ágeis e qualidade de
              código, enquanto na Liga de Jogos Eletrônicos, exploro a
              criatividade técnica. Além disso, levo a competitividade a sério
              como diretor de e-sports da Atlética, onde trato o cenário gamer
              com o profissionalismo que ele exige. No campo da pesquisa,
              mergulho na precisão dos Sistemas Embarcados e no impacto social
              da Extensão Tecnológica, onde utilizo a gamificação histórica para
              tornar o aprendizado do passado algo interativo e imersivo.
            </p>
          </div>
          <div id="tecnologias">
            <h1>Stacks Tecnológicas</h1>
            <p>
              Meu "cinto de utilidades" é híbrido, cobrindo desde o metal até a
              interface do usuário. No desenvolvimento de baixo nível e
              performance, domino C e C++, fundamentais para meus projetos de
              sistemas embarcados. Quando o assunto é agilidade e ciência de
              dados, o Python é minha principal ferramenta. Já no ecossistema
              Web, construo interfaces modernas e responsivas utilizando React e
              Tailwind CSS. Tudo isso roda sob um ambiente Ubuntu, que é minha
              base de operação para garantir estabilidade, segurança e total
              controle sobre o fluxo de desenvolvimento.
            </p>
          </div>
          <div id="objetivos">
            <h1>Objetivos Profissionais</h1>
            <p>
              O foco final é claro: Google. Trabalho diariamente para alinhar
              minha versatilidade técnica com a cultura de inovação em larga
              escala da companhia. Meu objetivo é aplicar o conhecimento em
              sistemas robustos e a experiência com engajamento de usuários
              (adquirida na gamificação e nos jogos) para resolver problemas que
              impactam bilhões de pessoas. Busco não ser apenas um
              desenvolvedor, mas um engenheiro completo que entende a fundo
              desde a restrição de hardware de um dispositivo embarcado até a
              experiência fluida de uma aplicação web de alta disponibilidade.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default AboutPage;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AboutPage />
  </StrictMode>,
);
