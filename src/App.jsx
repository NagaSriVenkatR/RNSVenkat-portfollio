import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Aboutme from "./Components/Aboutme";
import Connect from "./Components/Connect";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="">
      <div>
        {/* Navbar */}
        <Navbar />
        <Aboutme />
        <Skills />
        {/* Hero Section */}
        <Projects />
        <Experience />

        <Education />
        <Connect />

        {/* Projects Section */}

        {/* Skills Section */}

        {/* Contact Section */}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
