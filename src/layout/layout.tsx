import type { ReactNode } from "react";
// Importing Components
import Header from "./header";
import Footer from "./footer";

interface ContentProps {
  children?: ReactNode;
}

const Layout = ({ children }: ContentProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
