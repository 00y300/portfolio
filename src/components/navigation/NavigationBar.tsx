import NavItem from "./NavigationItem";

const NavigationBar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        <li className="flex">Jerry's Logo</li>
        <ul className="flex space-x-8">
          <NavItem href="#home">Home</NavItem>
          <NavItem href="#experience">Experience</NavItem>
          <NavItem href="#tech">Tech Stack</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
