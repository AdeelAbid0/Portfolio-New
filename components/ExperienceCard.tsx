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
    <article className="flex flex-col rounded-lg items-center space-y-2 md:space-y-7 flex-shrink-0 w-[80vw] sm:w-[400px] md:w-[500px] xl:w-[600px] opacity-40 hover:opacity-100 snap-center bg-[#292929] p-5 transition-opacity duration-200 overflow-hidden overflow-y-auto">
      <motion.div
        initial={{
          y: -50,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-14 w-14 sm:h-20 sm:w-20 md:h-32 md:w-32   bg-white rounded-full flex justify-center items-center overflow-hidden"
      >
        <img
          className={`h-16 w-16 md:h-20 md:w-20 object-contain `}
          src={`./experience/${experience.img}`}
          alt=""
        />
      </motion.div>
      <div className="px-3 md:px-5">
        <h4 className="text-xl sm:text-2xl md:text-3xl font-light">
          {experience.role}
        </h4>
        <p className="font-bold text-base sm:text-lg md:text-xl mt-1">
          {experience.companyName}
        </p>
        <div className="flex space-x-2 my-2">
          {experience.techStack.map((tech, index) => (
            <img
              className={`h-4 w-4 md:h-6  md:w-6 rounded-full object-contain ${
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
        <ul className="list-disc space-y-2 md:space-y-5 text-xs md:text-base">
          {experience.summary.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
