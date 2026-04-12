// Importing Components
import Header from "./header";
import type { ReactNode } from "react";

interface ContentProps {
  children?: ReactNode;
}

const Layout = ({ children }: ContentProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
