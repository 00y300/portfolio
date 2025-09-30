import NavItem from "@components/navigation/NavigationItem";
import { useState } from "react";

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 right-0 left-0 z-50 bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4">
                <li className="flex">Jerry's Logo</li>
                <ul className="hidden space-x-8 md:flex">
                    <NavItem href="#home">Home</NavItem>
                    <NavItem href="#experience">Experience</NavItem>
                    <NavItem href="#projects">Projects</NavItem>
                    <NavItem href="#tech">Tech Stack</NavItem>
                    <NavItem href="#contact">Contact</NavItem>
                </ul>

                {/* Mobile menu */}
                <button
                    className="sm: pr-2.5 focus:outline-none md:hidden"
                    onClick={toggleMenu}
                >
                    <svg
                        className="h-6 w-6"
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
                    <div className="absolute top-14 right-0 left-0 space-y-2 bg-white py-4 text-center text-xl shadow-lg md:hidden">
                        <NavItem
                            href="#home"
                            onClick={toggleMenu}
                            isMobile={true}
                        >
                            Home
                        </NavItem>
                        <NavItem
                            href="#experience"
                            onClick={toggleMenu}
                            isMobile={true}
                        >
                            Experience
                        </NavItem>

                        <NavItem
                            href="#projects"
                            onClick={toggleMenu}
                            isMobile={true}
                        >
                            Projects
                        </NavItem>

                        <NavItem
                            href="#tech"
                            onClick={toggleMenu}
                            isMobile={true}
                        >
                            Tech Stack
                        </NavItem>
                        <NavItem
                            href="#contact"
                            onClick={toggleMenu}
                            isMobile={true}
                        >
                            Contact
                        </NavItem>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavigationBar;
