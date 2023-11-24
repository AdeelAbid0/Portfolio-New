import React from "react";
import ExperienceCard from "./ExperienceCard";
type Props = {};

function WorkExperience({}: Props) {
  return (
    <div className="pt-10  h-screen flex flex-col items-center justify-center">
      <h3 className="uppercase tracking-[20px] text-gray-500 sm:text-red-500 text-xl sm:text-2xl">
        Experience
      </h3>
      <div className="relative flex overflow-hidden flex-col md:flex-row max-w-full px-10 justify-evenly max-auto items-center">
        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
