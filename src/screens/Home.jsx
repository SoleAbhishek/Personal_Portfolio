import { Navbar } from "@/Components/Navbar";
import { StarBackground } from "@/Components/StarBackground";
import { HeroSection } from "@/Components/HeroSection";
import { AboutSection } from "@/Components/AboutSection";
import { SkillsSection } from "@/Components/SkillsSection";
import { ProjectsSection } from "@/Components/ProjectsSection";
import { ContactSection } from "@/Components/ContactSection";
import { Footer } from "@/Components/Footer";
import ExperienceSection from "../Components/ExperienceSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      <StarBackground />

      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection/>
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};