interface CardProps {
  titleCard: string;
  contentCard: string;
  imageCard?: string;
}

const Card = (
  { titleCard, contentCard, imageCard }: CardProps,
  className = "",
) => {
  return (
    <div
      className={
        className ||
        "bg-white w-md h-fit rounded-4xl px-8 py-8 mx-16 my-4 shadow-sm hover:shadow-xl transition-shadow duration-500"
      }
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-1xl font-semibold tracking-tight">
          {titleCard || "Título"}
        </h3>
        <p className="mt-2 text-sm opacity-80 text-justify">
          {contentCard || "Lorem"}
        </p>
        {imageCard && <img src={imageCard} alt={titleCard} />}
      </div>
    </div>
  );
};

export default Card;
