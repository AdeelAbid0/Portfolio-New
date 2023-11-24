import React from "react";
import { motion } from "framer-motion";
type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        {Array.from([1, 2, 3, 4]).map((_, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src="https://w7.pngwing.com/pngs/723/165/png-transparent-responsive-web-design-web-development-mockup-web-design-gadget-electronics-search-engine-optimization.png"
              className="w-[600px] object-contain"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7Ab0A]/50">
                  Case Study {i + 1} of {4}:
                </span>
                Tag Line
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                provident modi distinctio consequuntur a maiores ipsum commodi
                praesentium! Placeat, quae, nisi ducimus eius harum dolores rem
                aut doloremque nesciunt enim cupiditate minus, velit quos!
              </p>
            </div>
          </div>
        ))}
        {/* project */}
        {/* project */}
        {/* project */}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
