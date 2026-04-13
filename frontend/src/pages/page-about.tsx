// Importing Components
import Layout from "../layout/layout";
import Card from "../components/card";
import NavLink from "../components/navlink";
import "../index.css";

const topicCards = [
  {
    titleCard: "Minha Trajetória Acadêmica",
    contentCard:
      "Minha vida no curso de Sistemas de Informação é um equilíbrio entre a gestão e a execução. Como diretor da Liga Acadêmica de Engenharia de Software, foco em metodologias ágeis e qualidade de código, enquanto na Liga de Jogos Eletrônicos, exploro a criatividade técnica. Além disso, levo a competitividade a sério como diretor de e-sports da Atlética, onde trato o cenário gamer com o profissionalismo que ele exige. No campo da pesquisa, mergulho na precisão dos Sistemas Embarcados e no impacto social da Extensão Tecnológica, onde utilizo a gamificação histórica para tornar o aprendizado do passado algo interativo e imersivo.",
    imageCard: "",
  },
  {
    titleCard: "Stacks Tecnológicas",
    contentCard:
      'Meu "cinto de utilidades" é híbrido, cobrindo desde o metal até a interface do usuário. No desenvolvimento de baixo nível e performance, domino C e C++, fundamentais para meus projetos de sistemas embarcados. Quando o assunto é agilidade e ciência de dados, o Python é minha principal ferramenta. Já no ecossistema Web, construo interfaces modernas e responsivas utilizando React e Tailwind CSS. Tudo isso roda sob um ambiente Ubuntu, que é minha base de operação para garantir estabilidade, segurança e total  controle sobre o fluxo de desenvolvimento.',
    imageCard: "",
  },
  {
    titleCard: "Objetivos Profissionais",
    contentCard:
      " O foco final é claro: Google. Trabalho diariamente para alinhar minha versatilidade técnica com a cultura de inovação em larga escala da companhia. Meu objetivo é aplicar o conhecimento em sistemas robustos e a experiência com engajamento de usuários (adquirida na gamificação e nos jogos) para resolver problemas que impactam bilhões de pessoas. Busco não ser apenas um desenvolvedor, mas um engenheiro completo que entende a fundo desde a restrição de hardware de um dispositivo embarcado até a experiência fluida de uma aplicação web de alta disponibilidade.",
    imageCard: "",
  },
];

const extrasCards = [
  {
    href: "https://www.instagram.com/seal.ufpe/?hl=",
    titleCard: "SEAL",
    contentCard:
      "Diretor de Ensino e Pesquisador da Liga Acadêmica de Engenharia de Software.",
    imageCard: "/src/assets/seal-logo.jpg",
  },
  {
    href: "https://www.instagram.com/laje.ufpe/?hl=",
    titleCard: "LAJE",
    contentCard: "Membro da Liga Acadêmica de Jogos Eletrônicos.",
    imageCard: "/src/assets/laje-logo.png",
  },
  {
    href: "https://www.instagram.com/malungogame/?hl=",
    titleCard: "MalungoGame",
    contentCard:
      "Fundador do Projeto de Extensão voltado para Gamificação Histórico-Social do Instituto Federal de Pernambuco - Campus Recife.",
    imageCard: "/src/assets/malungogame-logo.png",
  },
  {
    href: "https://malungolab.com/",
    titleCard: "MalungoLab",
    contentCard:
      "Colaborador Externo do Laboratório de Humanidades Digitais e Inovação Social.",
    imageCard: "/src/assets/malungo-logo.png",
  },
];

function AboutPage() {
  return (
    <>
      <Layout>
        <div className="about-container">
          <section className="about-topics-container">
            <div>
              {topicCards.map((card) => {
                return (
                  <Card
                    key={card.titleCard}
                    titleCard={card.titleCard}
                    contentCard={card.contentCard}
                    className="my-4"
                  />
                );
              })}
            </div>
          </section>
          <section className="about-extras-content">
            <h2>Meus projetos</h2>
            <div>
              {extrasCards.map((card) => {
                return (
                  <NavLink href={card.href}>
                    <Card
                      key={card.titleCard}
                      titleCard={card.titleCard}
                      contentCard={card.contentCard}
                      imageCard={card.imageCard}
                      className="my-4"
                    />
                  </NavLink>
                );
              })}
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default AboutPage;
