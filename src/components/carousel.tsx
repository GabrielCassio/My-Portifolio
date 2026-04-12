import { useRef, useState } from "react";

const cards = [
  {
    id: 1,
    project_name: "",
    description: "",
    subject: "",
    theme: "bg-white text-text-project_name",
    imagePlaceholder: "bg-gray-100",
  },
  {
    id: 2,
    project_name: "",
    description: "",
    subject: "",
    theme: "bg-zinc-900 text-white",
    imagePlaceholder: "bg-zinc-800",
  },
  {
    id: 3,
    project_name: "",
    description: "",
    subject: "",
    theme: "bg-blue-50 text-text-project_name",
    imagePlaceholder: "bg-blue-100",
  },
  {
    id: 4,
    project_name: "",
    description: "",
    subject: "",
    theme: "bg-rose-50 text-text-project_name",
    imagePlaceholder: "bg-rose-100",
  },
];

const Carousel = () => {
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
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative shrink-0 w-[85vw] md:w-[300px] h-[400px] snap-center md:snap-start rounded-[2.5rem] p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 ${card.theme} ${
              isDragging ? "pointer-events-none" : ""
            }`}
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold tracking-tight">
                {card.project_name}
              </h3>
              <p className="mt-2 text-lg opacity-80">{card.description}</p>
            </div>

            <div
              className={`absolute bottom-0 left-0 right-0 h-3/5 ${card.imagePlaceholder} rounded-t-[2.5rem] mt-auto`}
            />
          </div>
        ))}
        <div className="shrink-0 w-6 md:w-12" />
      </div>
    </div>
  );
};

export default Carousel;
