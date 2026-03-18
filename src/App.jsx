import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProject from "./components/FeaturedProject";
import ProjectsGrid from "./components/ProjectsGrid";
import Skills from "./components/Skills";
import HowIBuild from "./components/HowIBuild";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-primary text-light-bg selection:bg-accent selection:text-white">
      <Header></Header>
      <main className="grow">
        <Hero></Hero>
        <FeaturedProject></FeaturedProject>
        <ProjectsGrid></ProjectsGrid>
        <Skills></Skills>
        <HowIBuild></HowIBuild>
        <About></About>
        <Experience></Experience>
        <Contact></Contact>
      </main>
    </div>
  );
}
