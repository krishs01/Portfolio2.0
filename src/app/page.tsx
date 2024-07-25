import About from "@/components/About";
import Achivements from "@/components/Achivements";
import Coding_Profiles from "@/components/Coding_Profiles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
  <main  className="min-h-screen dark:bg-black antialiased bg-grid-white/[0.02]">
    <About />
    <Skills />
    < Coding_Profiles />
    <Projects />
    <Achivements />
    <Contact />
    <Footer />
  </main>
  );
}
