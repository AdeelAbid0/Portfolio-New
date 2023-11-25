import React from "react";
import ExperienceCard from "./ExperienceCard";
import SectionWrapper from "./SectionWrapper";
type Props = {};

interface ExperienceT {
  companyName: string;
  img: string;
  role: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  summary: string[];
}

const experiences: ExperienceT[] = [
  {
    img: "cybernetics.png",
    companyName: "Cybernetic Controls",
    role: "Frontend Software Engineer",
    startDate: "Aug 2023",
    endDate: "Present",
    techStack: ["reactjs", "mobx", "emotion", "storybook", "vscode"],
    summary: [
      "Frontend Software Engineer at a surveillance products company.",
      "Led transition from legacy Angular to React using a strategic bridge approach.",
      "Integrated new features seamlessly into the React portion of the application.",
      "Demonstrated adaptability and problem-solving in a complex software development environment.",
      "Implemented Agile methodologies for efficient project execution and continuous improvement.",
    ],
  },
  {
    img: "lukuku.jpg",
    companyName: "Lukuku.co",
    role: "Frontend Engineer",
    startDate: "Apr 2023",
    endDate: "Aug 2023",
    techStack: [
      "nextjs",
      "reactjs",
      "jotai",
      "styled-components",
      "frammer-motion",
      "tailwind",
      "storybook",
      "vscode",
    ],
    summary: [
      "Served as a pivotal frontend engineer, leading projects and fostering collaboration.",
      "Worked with a diverse range of projects for a Korean web agency.",
      "Ensured effective coordination with backend and frontend teams, consistently delivering optimized solutions.",
      "Provided valuable insights into project planning and optimization strategies.",
      "Applied Agile methodologies, contributing to a streamlined and adaptive project workflow.",
    ],
  },
  {
    img: "cybermodit.png",
    companyName: "CybermodIT",
    role: "UI/UX Designer and Frontend Developer",
    startDate: "Jul 2022",
    endDate: "Apr 2023",
    techStack: [
      "reactjs",
      "redux",
      "sass",
      "styled-components",
      "firebase",
      "figma",
      "xd",
    ],
    summary: [
      "Pioneered UI/UX design and React development at a dynamic startup.",
      "Actively contributed to project meetings and reviews, enhancing React and design capabilities.",
      "Elevated user experience through thoughtful design and seamless React development.",
      "Played a key role in streamlining collaborative efforts within the development team.",
    ],
  },
  {
    img: "ksoft.png",
    companyName: "KSoft",
    role: "Frontend Developer",
    startDate: "Sep 2021",
    endDate: "Sep 2023",
    techStack: ["nextjs", "redux", "tailwind", "firebase"],
    summary: [
      "Functioned as a Frontend Developer on a year-long government-sponsored project for Pakistan's defense sector.",
      "Gained valuable experience working with a government software company, contributing to national defense initiatives.",
      "Demonstrated dedication to project success through consistent and effective collaboration within a team.",
      "Played a key role in streamlining collaborative efforts within the development team.",
    ],
  },
  {
    img: "fiver.png",
    companyName: "Fiver",
    role: "Reactjs Developer",
    startDate: "Jun 2020",
    endDate: "Jul 2022",
    techStack: [
      "reactjs",
      "redux",
      "tailwind",
      "firebase",
      "vscode",
      "photoshop",
      "xd",
    ],
    summary: [
      "Completed 20+ projects as a Frontend Developer, specializing in website development and management systems.",
      "Delivered tailored solutions for small businesses, optimizing their online presence and functionality.",
      "Applied a customer-centric approach, ensuring client satisfaction and receiving positive reviews on both Fiverr and Upwork platforms.",
      "Demonstrated versatility by successfully handling a variety of projects, showcasing adaptability to different industries and client needs.",
    ],
  },
];
function WorkExperience({}: Props) {
  return (
    <SectionWrapper
      heading="Experience"
      className="relative flex overflow-hidden flex-col md:flex-row max-w-full px-2 sm:px-10 justify-evenly max-auto items-center"
    >
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        {experiences.map((experience, index) => (
          <ExperienceCard experience={experience} key={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default WorkExperience;
