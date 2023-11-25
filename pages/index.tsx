import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import data from "../data.json";

const Home: NextPage = () => {
  return (
    <div className="overflow-x-hidden bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory z-0 sm:scrollbar sm:scrollbar-track-gray-400/20 sm:scrollbar-thumb-[#F7AB0A]">
      <Head>
        <title>{"Ak's"} Portfolio</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Header />

      <section id="home" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About about={data.about} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={data.experiences} />
      </section>

      <section id="skills" className="snap-center">
        <Skills skills={data.skills} />
      </section>

      <section id="projects" className="snap-center">
        <Projects projects={data.projects} />
      </section>

      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
