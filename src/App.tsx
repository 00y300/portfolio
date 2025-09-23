import "./index.css";
import NavigationBar from "./components/navigation/NavigationBar";

function App() {
  return (
    <>
      <NavigationBar />
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Home Section</h1>
          <p className="mt-4 text-lg">Welcome to the home section</p>
        </div>
      </section>

      <section
        id="about"
        className="pt-20 min-h-screen flex items-center bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">About Section</h1>
          <p className="mt-4 text-lg">Learn more about me</p>
        </div>
      </section>

      <section id="experience" className="pt-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Experience Section</h1>
          <p className="mt-4 text-lg">Professional Experience</p>
        </div>
      </section>

      <section
        id="contact"
        className="pt-20 min-h-screen flex items-center bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Contact Section</h1>
          <p className="mt-4 text-lg">Get in touch with me!</p>
        </div>
      </section>
    </>
  );
}

export default App;
