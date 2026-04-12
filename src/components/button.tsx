import type { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  text: string;
  isToNav: boolean;
  path?: string;
}

const Button = ({ text, isToNav, path, ...rest }: ButtonProps) => {
  if (isToNav) {
    return (
      <div>
        <a href={`${path}`} {...(rest as ComponentPropsWithoutRef<"a">)}>
          <p>{text}</p>
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <button className="button" {...rest}>
          {text}
        </button>
      </div>
    );
  }
};

export default Button;
