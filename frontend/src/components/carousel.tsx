import { useRef, useState, useEffect } from "react";
import GithubReposAPI from "/My-Portifolio/api/index";
import type { Repo, ReqState } from "/My-Portifolio/api/index";

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
        <span>Farejando repositórios...</span>
      </div>
    );
  }

  if (state === "ERROR") {
    return (
      <div className="flex h-96 items-center justify-center text-red-500">
        <span>Erro ao carregar a alcateia de projetos.</span>
      </div>
    );
  }

  return (
    <div className="flex flex-1 w-full py-12 overflow-hidden select-none">
      <div className="max-w-5xl mx-auto pl-4 md:px-12 mb-8">
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
          <div
            key={card.name}
            className={`relative shrink-0 w-[85vw] md:w-[300px] h-[400px] snap-center md:snap-start rounded-[2.5rem] p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 ${"bg-slate-800"} ${
              isDragging ? "pointer-events-none" : ""
            }`}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold tracking-tight">
                {card.name}
              </h3>
              <p className="mt-2 text-lg opacity-80">{card.description}</p>
            </div>

            <div
              className={`absolute bottom-0 left-0 right-0 h-3/5 ${card.html_url} rounded-t-[2.5rem] mt-auto`}
            />
          </div>
        ))}
        <div className="shrink-0 w-6 md:w-12" />
      </div>
    </div>
  );
};

export default Carousel;
