import { useState, useEffect } from "react";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavItem = ({ href, children, onClick }: NavItemProps) => {
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
    <li>
      <a
        href={href}
        onClick={handleClick}
        className={`text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 ${
          isScrolled ? "text-gray-900" : ""
        }`}
      >
        {children}
      </a>
    </li>
  );
};

export default NavItem;
