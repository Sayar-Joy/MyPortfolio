import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import LightSpeedEntry from "@/components/LightSpeedEntry";
import PremiumFooter from "@/components/PremiumFooter";
import LogoCloud from "@/components/LogoCloud";

const Index = () => {
  return (
    <LightSpeedEntry>
      <div className="relative min-h-screen">
        <LogoCloud />
        <div className="relative z-10">
          <Navigation />
          <main>
            <section id="home">
              <Hero />
            </section>
            <About />
            <Skills />
            <Experience />
            <Education />
            <Achievements />
            <Certifications />
            <Projects />
            <Contact />
          </main>
          <PremiumFooter />
        </div>
      </div>
    </LightSpeedEntry>
  );
};

export default Index;
