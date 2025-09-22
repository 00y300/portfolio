import NavItem from "./NavigationItem";

const NavigationBar = () => {
  return (
    <nav className="navbar bg-white shadow-md">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-8 py-4">
          <NavItem href="#home">Home</NavItem>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
