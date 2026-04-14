import type { HtmlHTMLAttributes } from "react";
import { cn } from "../utils/cn";

export interface CardProps extends HtmlHTMLAttributes<"div"> {
  titleCard: string;
  contentCard: string;
  imageCard?: string;
}

const Card = ({
  titleCard,
  contentCard,
  imageCard,
  className = "",
}: CardProps) => {
  return (
    <div
      className={cn(
        "bg-white w-md h-fit rounded-4xl px-8 py-8 shadow-sm hover:shadow-xl transition-shadow duration-500",
        className,
      )}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-1xl font-semibold tracking-tight">
          {titleCard || "Título"}
        </h3>
        <div className="flex flex-row gap-x-4">
          {imageCard && <img src={imageCard} alt={titleCard} width={100} />}
          <p className="mt-2 text-sm opacity-80 text-justify">
            {contentCard || "Lorem"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
