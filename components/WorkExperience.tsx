import React from "react";
import ExperienceCard from "./ExperienceCard";
type Props = {};

function WorkExperience({}: Props) {
  return (
    <div className="relative h-screen flex overflow-hidden flex-col md:flex-row max-w-full px-10 justify-evenly max-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory ">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
}

export default WorkExperience;
