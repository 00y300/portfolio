import { useState, useEffect } from "react";

interface NavItemProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    isMobile?: boolean; // Add this prop to distinguish mobile items
}

const NavItem = ({
    href,
    children,
    onClick,
    isMobile = false,
}: NavItemProps) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = (e: React.MouseEvent) => {
        onClick?.();
        e.preventDefault();

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed navbar height
                behavior: "smooth",
            });
        }
    };

    return (
        <li className={isMobile ? "hover:bg-gray-200" : ""}>
            <a
                href={href}
                onClick={handleClick}
                className={`transition-colors duration-200 hover:text-blue-600 ${
                    isScrolled ? "text-gray-900" : ""
                } ${isMobile ? "block py-2" : "font-medium text-gray-700"}`}
            >
                {children}
            </a>
        </li>
    );
};

export default NavItem;
