import Bio from "./components/Bio";
import ContactForm from "./components/ContactForm";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

import Meteors from "@/components/magicui/meteors";
import Particles from "@/components/magicui/particles";

function App() {
  return (
    <>
      <div className="relative h-full overflow-y-auto antialiased">
        <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img h-screen ">
          <Meteors number={30} className="h-screen" />
          <div className="relative top-[50%]">
            <Meteors number={30} className="relative " />
          </div>
          <div className="relative  h-[500px] w-full ">
            <Particles
              className="absolute inset-0"
              quantity={200}
              ease={80}
              refresh
            />
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
          <Hero />
          <NavBar />
          <Bio />
          <Education />
          <Projects />
          <WorkExperience />
          <Skills />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
