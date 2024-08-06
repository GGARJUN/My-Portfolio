import Bio from "./components/Bio";
import ContactForm from "./components/ContactForm";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <>
      <div className="relative h-full overflow-y-auto antialiased">
        <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img "></div>
        <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
          <Hero/>
          <NavBar/>
          <Projects/>
          <Bio/>
          <Skills/>
          <WorkExperience/>
          <Education/>
          <ContactForm/>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
