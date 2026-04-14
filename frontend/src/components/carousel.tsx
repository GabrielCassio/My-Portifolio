import { useRef, useState, useEffect } from "react";
import type { Repo, ReqState } from "/My-Portifolio/api/index";
import GithubReposAPI from "/My-Portifolio/api/index";
import ScrollableCard from "./scrollable-card";
// import NavLink from "./navlink";

const Carousel = () => {
  // Data of the current promise
  const [data, setData] = useState({
    state: GithubReposAPI.getState(),
    repos: GithubReposAPI.getRepos(),
  });

  useEffect(() => {
    const component = {
      update: (state: ReqState, repos: Repo[]) => {
        setData({ state, repos });
      },
    };
    GithubReposAPI.componentAdd(component);
    GithubReposAPI.getMany();
    return () => GithubReposAPI.componentRemove(component);
  }, []);

  const { state, repos } = data;
  console.log(repos);

  const carouselRef = useRef<HTMLDivElement>(null);

  // States to control the carousel
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handling functions to control the carousel drag
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };
  const handleDragEnd = () => {
    setIsDragging(false);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Velocidade do arraste
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  if (state === "LOADING" && repos.length === 0) {
    return (
      <div className="flex h-96 items-center justify-center text-2xl font-bold">
        <span>Analisando repositórios, One moment...</span>
      </div>
    );
  }

  if (state === "ERROR") {
    return (
      <div className="flex h-96 items-center justify-center text-red-500">
        <span>E... Erro em carregar conjunto de projetos.</span>
      </div>
    );
  }

  return (
    <div className="flex flex-1 w-full py-12 overflow-hidden select-none">
      <div className="max-w-5xl mx-auto pl-4 md:pl-12 md:pr-2  mb-8">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Alguns Projetos Simples.
        </h2>
      </div>

      <div
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleDragEnd}
        onMouseUp={handleDragEnd}
        onMouseMove={handleMouseMove}
        className={`flex overflow-x-auto gap-6 px-6 md:px-12 pb-12 pt-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${
          isDragging
            ? "snap-none cursor-grabbing"
            : "snap-x snap-mandatory cursor-grab"
        }`}
      >
        {repos.map((card) => (
          <ScrollableCard
            titleCard={card.name}
            contentCard={card.description}
            isDragging={isDragging}
            href={card.html_url}
            bgColorCard=""
            boxColorCard="bg-pink-400"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
