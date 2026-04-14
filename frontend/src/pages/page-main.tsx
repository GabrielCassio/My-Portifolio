// Imoprting Components
import Layout from "../layout/layout";
import Image from "../components/image";
import Card from "../components/card";
import { PersonalPhoto } from "../assets";

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
    <Layout>
      <div className=" bg-yellow-400 flex flex-1 flex-row justify-center px-8 pt-12 gap-x-16">
        {/*Render all cards of the main*/}
        <section className="flex justify-center">
          <div
            className="flex flex-col justify-center rounded-4xl text-justify gap-y-4 z-1
          sm: mx-auto
          "
          >
            {mainCards.map((card) => {
              return (
                <Card
                  key={card.titleCard}
                  titleCard={card.titleCard}
                  contentCard={card.contentCard}
                  className="h-xl"
                />
              );
            })}
          </div>
        </section>
        <section className="flex flex-col items-center z-0 w-xl mt-4">
          <div className="gap-4 p-6 rounded-2xl">
            <h1 className="text-4xl text-nowrap md:text-5xl font-extrabold text-text-title tracking-tight">
              Gabriel Cássio
            </h1>
          </div>
          <div className="relative block w-full h-full">
            <Image
              className="absolute inset-0 bottom-0 w-full h-full object-fit object-cover"
              src={PersonalPhoto}
              alt="Cássio image"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default MainPage;
