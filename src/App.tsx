import "./App.css";
import ProjectSection from "@/pages/project-sections";
import {
  // DotBackgroundDemo,
  GridBackgroundDemo,
  GridSmallBackgroundDemo,
} from "@/components/bg-effects";
import { Navbar } from "./components/nav-bar";
import Hero from "./pages/hero-section";
import SkillSection from "./pages/skill-section";
import ContactMe from "./pages/contactme-section";
function App() {
  return (
    <>
      <Navbar />
      <GridSmallBackgroundDemo>
        <Hero />
      </GridSmallBackgroundDemo>
      <div className="dark:bg-black light:text-black">
        <SkillSection />
      </div>
      <GridBackgroundDemo>
        <div>
          <h2 className="text-4xl font-bold  text-center my-6">My Projects</h2>
        </div>
        <ProjectSection />
      </GridBackgroundDemo>
      <ContactMe/>
    </>
  );
}

export default App;
