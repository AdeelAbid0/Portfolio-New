import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left  pt-24 sm:pt-10 md:flex-row md:pt-0 max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
        }}
        src="https://avatars.githubusercontent.com/u/101820380?s=400&u=622c5ae10172a3738daea1c249a1e8edf7cc372a&v=4"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
      />
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
        }}
        className="space-y-10 px-0 md:px-10"
      >
        <h4 className="text-2xl  sm:text-4xl lg:text-5xl font-semibold text-center">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          Background
        </h4>
        <p className="text-xs sm:text-sm text-center lg:text-lg">
          {`🚀 Greetings! I'm AK, a nocturnal frontend sorcerer boasting expertise
          in NextJS, ReactJS, Redux, jotai, and the enchanting arts of Tailwind
          CSS and SASS. With a magical coding journey spanning over 5 years,
          I've summoned responsive, user-friendly web spells that deliver a
          seamless user experience. My quest through the realms of frontend
          libraries and frameworks has been a thrilling adventure, crafting
          pixel-perfect designs and unraveling the secrets of UI/UX magic. In
          this ever-evolving tech cosmos, I thrive on staying ahead, embracing
          the latest enchantments. Armed with 5 years of coding mastery, my
          mission is to conjure spells of clean, maintainable code—a testament
          to my commitment to creating digital experiences that transcend time.
          Let's embark on a journey together, where code dances and user
          experiences sparkle in the mystical glow of technology! ✨🌟`}
        </p>
      </motion.div>
    </div>
  );
}

export default About;
