import type { ComponentPropsWithoutRef } from "react";

interface ImageProps extends ComponentPropsWithoutRef<"img"> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const Image = ({ src, alt, width, height }: ImageProps, classeName = "") => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={classeName}
    />
  );
};

export default Image;
