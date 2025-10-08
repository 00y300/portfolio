import NavItem from "@components/navigation/NavigationItem";
import { useState, useEffect } from "react";
import lightLogo from "/logos/lightDog.png";
import darkLogo from "/logos/darkDog.png";

const NavigationBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Load dark mode preference on mount
    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode") === "true";
        setIsDarkMode(savedMode);
        if (savedMode) {
            document.body.classList.add("dark");
        }
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        document.body.classList.toggle("dark");
        localStorage.setItem("darkMode", String(newMode));
    };

    return (
        <nav className="fixed top-0 right-0 left-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <div className="flex items-center">
                    <img
                        src={isDarkMode ? darkLogo : lightLogo}
                        alt="Jerry's Logo"
                        className="h-10 w-10 rounded-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                </div>
                <ul className="hidden space-x-8 md:flex">
                    <NavItem href="#home">Home</NavItem>
                    <NavItem href="#experience">Experience</NavItem>
                    <NavItem href="#projects">Projects</NavItem>
                    <NavItem href="#tech">Tech Stack</NavItem>
                    <NavItem href="#contact">Contact</NavItem>
                </ul>

                <div className="flex items-center gap-2">
                    {/* Dark mode toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="rounded-lg p-2 transition-colors duration-200 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none dark:hover:bg-gray-800 dark:focus:ring-gray-700"
                        aria-label="Toggle dark mode"
                    >
                        {isDarkMode ? (
                            // Sun icon for light mode
                            <svg
                                className="h-5 w-5 text-yellow-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                        ) : (
                            // Moon icon for dark mode
                            <svg
                                className="h-5 w-5 text-gray-700"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>
                        )}
                    </button>

                    {/* Mobile menu button */}
                    <button
                        className="rounded-lg p-2 pr-2.5 transition-colors duration-200 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden dark:hover:bg-gray-800 dark:focus:ring-gray-700"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6 dark:text-gray-200"
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
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="mobile-menu absolute top-14 right-0 left-0 space-y-2 py-4 text-center text-xl md:hidden">
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
