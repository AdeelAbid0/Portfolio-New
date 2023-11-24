import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div className="overflow-x-hidden bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory z-0">
      <Head>
        <title>Ak's Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* Projects */}

      {/* Contact me */}
    </div>
  );
};

export default Home;
