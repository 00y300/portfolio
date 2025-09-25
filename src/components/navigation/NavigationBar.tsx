import NavItem from "./NavigationItem";
import { useState } from "react";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        <li className="flex">Jerry's Logo</li>
        <ul className="hidden md:flex space-x-8">
          <NavItem href="#home">Home</NavItem>
          <NavItem href="#experience">Experience</NavItem>
          <NavItem href="#tech">Tech Stack</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </ul>
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <ul className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg space-y-2 py-4">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#experience">Experience</NavItem>
            <NavItem href="#tech">Tech Stack</NavItem>
            <NavItem href="#contact">Contact</NavItem>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
