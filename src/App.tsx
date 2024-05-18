import "./App.css";
import ProjectSection from "@/pages/project-sections";
import {
  DotBackgroundDemo,
  // GridBackgroundDemo,
  // GridSmallBackgroundDemo,
} from "@/components/bg-effects";
// import { Navbar } from "./components/nav-bar";
import Hero from "./pages/hero-section";
import SkillSection from "./pages/skill-section";
import ContactMe from "./pages/contactme-section";
import Footer from "./pages/footer-section";
import ResumeSection from "./pages/resume-download";
import { Element } from "react-scroll";
function App() {
  return (
    <>
        <Element name="hero">
          <Hero />
          <SkillSection />
        </Element>

        <Element name="projects">
          <ProjectSection />
        </Element>

        <DotBackgroundDemo>
          <Element name="resume">
            <ResumeSection />
          </Element>
          <Element name="contact">
            <ContactMe />
          </Element>
        </DotBackgroundDemo>
        <Footer />
    </>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/contact" element={<ContactMe />} />
//       </Routes>
//     </Router>
//   );
// }

//  {/* <Navbar /> */}
//     {/* <GridSmallBackgroundDemo> */}
//     <Hero />
//     {/* </GridSmallBackgroundDemo> */}
//     {/* <div className="dark:bg-black light:text-black"> */}
//       <SkillSection />
//     {/* </div> */}
//     {/* <GridBackgroundDemo>
//       <div id="PROJECTS">
//         <h2 className="text-4xl font-bold  text-center my-6 dark:text-slate-200 text-black">
//           My Projects
//         </h2>
//       </div> */}
//       <ProjectSection />
//     {/* </GridBackgroundDemo> */}
//     <DotBackgroundDemo>
//       <ResumeSection />

//       <ContactMe />
//     </DotBackgroundDemo>
//     <Footer />
