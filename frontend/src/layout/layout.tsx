// Importing Components
import Header from "./header";
import type { ReactNode } from "react";

interface ContentProps {
  children?: ReactNode;
}

const Layout = ({ children }: ContentProps) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      {/*Content Section*/}
      {children}
    </div>
  );
};

export default Layout;
