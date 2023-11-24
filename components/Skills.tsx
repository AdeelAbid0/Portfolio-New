import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
type Props = {};
const skills = [
  {
    title: "Languages",
    set: [
      { name: "c++", proficiency: 65 },
      { name: "python", proficiency: 70 },
      { name: "javaScript", proficiency: 85 },
      { name: "typeScript", proficiency: 80 },
    ],
  },
  {
    title: "Teachnologies",
    set: [
      { name: "nextjs", proficiency: 80, bg: true },
      { name: "reactjs", proficiency: 90 },
      { name: "redux", proficiency: 80 },
      { name: "mobx", proficiency: 80 },
      { name: "jotai", proficiency: 75 },
      { name: "emotion", proficiency: 80 },
      { name: "styled-components", proficiency: 80, bg: true },
      { name: "sass", proficiency: 85 },
      { name: "tailwind", proficiency: 80 },
      { name: "storybook", proficiency: 70 },
      { name: "frammer-motion", proficiency: 65, bg: true },
      { name: "firebase", proficiency: 80 },
    ],
  },
  {
    title: "Tools",
    set: [
      { name: "vscode", proficiency: 65 },
      { name: "git", proficiency: 75 },
      { name: "github", proficiency: 80 },
      { name: "xd", proficiency: 70 },
      { name: "photoshop", proficiency: 60 },
      { name: "figma", proficiency: 85 },
    ],
  },
];
function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current profiency
      </h3>
      <div>
        {skills.map((skill, index) => (
          <div key={index}>
            <h3 className="top-36 uppercase tracking-[3px] text-white text-sm mb-3 mt-5 text-center">
              {skill.title}
            </h3>
            <div className="grid grid-cols-5 gap-5 ">
              {skill.set.map((skillSet, index) => (
                <Skill
                  bg={skillSet.bg}
                  img={skillSet.name}
                  proficiency={skillSet.proficiency}
                  key={index}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
