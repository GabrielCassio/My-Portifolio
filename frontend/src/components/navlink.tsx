import type { ReactNode, ComponentPropsWithoutRef, ElementType } from "react";

interface NavLinkProps extends ComponentPropsWithoutRef<"a"> {
  icon?: ElementType | string;
  children?: ReactNode;
  width?: number;
  height?: number;
}

const NavLink = ({
  href,
  icon: Icon,
  children,
  width = 50,
  height = 50,
  className = "",
  ...props
}: NavLinkProps) => {
  const isUrl = typeof Icon == "string";
  return (
    <a href={href} className={className} {...props}>
      {Icon &&
        (isUrl ? (
          <img src={Icon} alt="" width={width} height={height} />
        ) : (
          <Icon />
        ))}
      {children}
    </a>
  );
};

export default NavLink;
