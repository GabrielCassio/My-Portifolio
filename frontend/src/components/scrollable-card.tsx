// Importing Basic Card type
import type { CardProps } from "./card";
import NavLink from "./navlink";

interface ScrollCardProps extends CardProps {
  href?: string;
  isDragging: boolean;
  bgColorCard: string;
  boxColorCard: string;
}

const ScrollableCard = ({
  titleCard,
  contentCard,
  isDragging,
  href,
  bgColorCard = "",
  boxColorCard = "",
}: ScrollCardProps) => {
  return (
    <div
      key={titleCard}
      className={`z-1 relative shrink-0 w-[85vw] md:w-75 h-100 snap-center md:snap-start rounded-[2.5rem] p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 ${bgColorCard} ${
        isDragging ? "pointer-events-auto" : ""
      }`}
    >
      <div className="relative z-10 text-wrap">
        <h3 className="text-2xl font-semibold tracking-tight">{titleCard}</h3>
      </div>
      <div
        className={`absolute flex flex-col justify-between bottom-0 left-0 right-0 h-3/5 ${boxColorCard} rounded-t-[2.5rem] mt-auto px-8 py-8 text-wrap`}
      >
        <p className="mt-2 text-lg opacity-80">{contentCard}</p>
        <div className=" z-10 flex justify-end">
          <NavLink href={href}>
            <div className="relative w-12 h-12 bg-black rounded-full"></div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ScrollableCard;
