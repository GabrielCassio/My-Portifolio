// Imoprting Components
import Layout from "../layout/layout";
import Image from "../components/image";
import Card from "../components/card";

// import NavLink from "../components/navlink";
import "../index.css";

const mainCards = [
  {
    titleCard: "Formação Tecnológica",
    contentCard:
      "Aluno de Sistemas de Informação no Centro de Informática da UFPE (CIn), construindo uma base sólida em tecnologia e computação",
    imageCard: "",
  },
  {
    titleCard: "Arquitetura & Hardware",
    contentCard:
      "Estudante pesquisador focado em Arquitetura e Design de Software, com atuação complementar e visão prática como Designer de Hardware.",
    imageCard: "",
  },
  {
    titleCard: "Games de Impacto",
    contentCard:
      "Player e entusiasta na área de Games focados em Impacto Histórico e Social, unindo tecnologia a narrativas transformadoras.",
    imageCard: "",
  },
];

function MainPage() {
  return (
    <>
      <Layout>
        <div className="page-main-container">
          {/*Render all cards of the main*/}
          <div>
            {mainCards.map((card) => {
              return (
                <Card
                  key={card.titleCard}
                  titleCard={card.titleCard}
                  contentCard={card.contentCard}
                  className="my-4 ml-16"
                />
              );
            })}
          </div>
          <section className="page-main-image-container">
            <div className="group flex items-center gap-4 p-6 rounded-2xl">
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1d1d1f] tracking-tight">
                Gabriel Cássio
              </h1>
            </div>
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

export default MainPage;
