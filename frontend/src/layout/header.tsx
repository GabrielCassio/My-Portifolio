// Importing Components
import NavLink from "../components/navlink";
import { useState } from "react";

const Header = () => {
  // States of the header
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const previewContentTabs = {
    Home: ["Resumo", "Contatos"],
    Sobre: [
      "Minha Trajetória",
      "Stacks Tecnológicas",
      "Objetivos Profissionais",
    ],
    Projetos: ["Alguns Projetos", "Artigos", "Extensões"],
  };

  // handling functions of the Header
  const mouseOnTab = (tab: string) => {
    setActiveTab(tab);
    setIsExpanded(true);
  };
  const closeMenu = () => {
    setActiveTab("");
    setIsExpanded(false);
  };

  return (
    <>
      <div className="relative z-50" onMouseLeave={closeMenu}>
        <header>
          {/* Normal state of header*/}
          <div className="header-content">
            <NavLink
              href="/"
              onMouseEnter={() => mouseOnTab("Home")}
              className="text-gl font-normal tracking-tight text-black"
            >
              Home
            </NavLink>
            <NavLink
              href="/about.html"
              onMouseEnter={() => mouseOnTab("Sobre")}
              className="text-gl font-normal tracking-tight text-black"
            >
              Sobre
            </NavLink>
            <NavLink
              href="/projects.html"
              onMouseEnter={() => mouseOnTab("Projetos")}
              className="text-gl font-normal tracking-tight text-black"
            >
              Projetos
            </NavLink>
          </div>
        </header>

        {/* Expand Transition */}
        <div
          className={`absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-apple-cubic ${
            isExpanded
              ? "max-h-96 opacity-100 border-b border-gray-200 bg-white"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          {/* Expand Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h3 className="text-gray-400 text-xs mb-4 uppercase tracking-wider">
              Explorar {activeTab}
            </h3>
            <ul className="space-y-3">
              {/* Options of the active tab */}
              {activeTab &&
                previewContentTabs[
                  activeTab as keyof typeof previewContentTabs
                ]?.map((item) => (
                  <li key={item}>
                    <p className="text-xl font-semibold text-gray-900 transition-colors">
                      {item}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-500 ${
          isExpanded
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onMouseEnter={closeMenu}
      />
    </>
  );
};

export default Header;
