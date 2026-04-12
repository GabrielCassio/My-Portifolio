import type { ComponentPropsWithoutRef } from "react";

interface ImageProps extends ComponentPropsWithoutRef<"img"> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const Image = ({ src, alt, width, height }: ImageProps) => {
  return <img src={src} alt={alt} width={width} height={height} />;
};

export default Image;
