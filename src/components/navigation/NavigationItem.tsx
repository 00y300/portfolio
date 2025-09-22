interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem = ({ href, children }: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
      >
        {children}
      </a>
    </li>
  );
};

export default NavItem;
