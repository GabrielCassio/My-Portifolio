import type { ComponentPropsWithoutRef } from "react";

interface ImageProps extends ComponentPropsWithoutRef<"img"> {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: ImageProps) => {
  return <img src={src} alt={alt} />;
};

export default Image;
