import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Workflow from "@/components/Workflow";
import TerminalSection from "@/components/TerminalSection";
import Projects from "@/components/Projects";
import Writeups from "@/components/Writeups";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col selection:bg-neon-green selection:text-black">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Workflow />
      <TerminalSection />
      <Projects />
      <Writeups />
      <Contact />
      <Footer />
    </main>
  );
}
