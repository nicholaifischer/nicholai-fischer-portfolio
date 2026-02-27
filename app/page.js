import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import ProjectsGrid from "../components/ProjectsGrid";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <ProjectsGrid />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
