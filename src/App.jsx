import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import ParticleField from "./components/three/ParticleField";
import ScrollProgress from "./components/ui/ScrollProgress";

function App() {
  return (
    <main className="font-body text-white relative">
      <ScrollProgress />
      <ParticleField />
      <div className="relative z-10">
        <NavbarMain />
        <HeroMain />
        <HeroGradient />
        <SubHeroMain />
        <AboutMeMain />
        <SkillsMain />
        <SubSkills />
        <ProjectsMain />
        <ContactMeMain />
        <FooterMain />
      </div>
    </main>
  );
}

export default App;
