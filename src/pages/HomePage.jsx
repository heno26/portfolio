import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Focus from "../sections/Focus/Focus";
import Skills from "../sections/Skills/Skills";
import Projects from "../sections/Projects/Projects";
import Labs from "../sections/Labs/Labs";
import Education from "../sections/Education/Education";
import Training from "../sections/Training/Training";
import Contact from "../sections/Contact/Contact";

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Focus />
        <Skills />
        <Projects />
        <Labs />
        <Education />
        <Training />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
