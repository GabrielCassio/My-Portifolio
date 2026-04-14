import type { HtmlHTMLAttributes } from "react";

interface ImageProps extends HtmlHTMLAttributes<"div"> {
  src: string;
  alt: string;
}

const Image = ({ src, alt, className = "" }: ImageProps) => {
  return <img src={src} alt={alt} className={className} />;
};

export default Image;
