import React from "react";
import { motion } from "framer-motion";
interface Props {
  experience: ExperienceT;
}
interface ExperienceT {
  img: string;
  companyName: string;
  role: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  summary: string[];
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-2 md:space-y-7 flex-shrink-0 w-[80vw] sm:w-[400px] md:w-[500px] xl:w-[800px] opacity-40 hover:opacity-100 snap-center bg-[#292929] p-10 transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-20 w-20 md:h-32 md:w-32   bg-white rounded-full flex justify-center items-center overflow-hidden"
      >
        <img
          className={`h-20 w-20 md:h-32 md:w-32 object-contain `}
          src={`./experience/${experience.img}`}
          alt=""
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-light">
          {experience.role}
        </h4>
        <p className="font-bold text-lg sm:text-xl md:text-2xl mt-1">
          {experience.companyName}
        </p>
        <div className="flex space-x-2 my-2">
          {experience.techStack.map((tech, index) => (
            <img
              className={`h-6 w-6 md:h-10  md:w-10 rounded-full object-contain ${
                tech === "nextjs" ||
                tech === "styled-components" ||
                tech === "frammer-motion"
                  ? "bg-white"
                  : "bg-transparent"
              }`}
              src={`./skills/${tech}.png`}
              key={index}
            />
          ))}
        </div>
        <p className="uppercase py-2 md:py-5 text-xs text-gray-300">
          {experience.startDate} - {experience.endDate}
        </p>
        <ul className="list-disc space-y-2 md:space-y-5 text-xs md:text-lg">
          {experience.summary.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
