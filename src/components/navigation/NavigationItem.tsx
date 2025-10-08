interface NavItemProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
    isMobile?: boolean;
}

const NavItem = ({
    href,
    children,
    onClick,
    isMobile = false,
}: NavItemProps) => {
    const handleClick = (e: React.MouseEvent) => {
        onClick?.();
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: "smooth",
            });
        }
    };

    return (
        <li
            className={
                isMobile ? "hover:bg-gray-100 dark:hover:bg-gray-800" : ""
            }
        >
            <a
                href={href}
                onClick={handleClick}
                className={`transition-colors duration-200 ${
                    isMobile ? "block py-2" : "font-medium"
                }`}
            >
                {children}
            </a>
        </li>
    );
};

export default NavItem;
