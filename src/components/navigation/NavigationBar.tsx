import NavItem from "./NavigationItem";

const NavigationBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4">
        <li className="flex">Jerry's Logo</li>
        <ul className="flex space-x-8">
          <NavItem href="#home">Home</NavItem>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#experience">Experience</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
