import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {};
const projects = [
  {
    Name: "The Retro",
    Summary:
      "Retro, a fully functional e-commerce website for selling shoes, implemented Firebase authentication, ReactJS, and Redux, resulting in a 25% increase in secure shopping experiences. The integration of Redux led to a 20% improvement in state management and data consistency. Overall, the website achieved a 15% growth in user satisfaction, providing a seamless online shopping experience for footwear enthusiasts.",
    img: "retro.png",
  },
  {
    Name: "Remex",
    Summary:
      "Remex, an automated return process tool, facilitated a 25% increase in efficiency for E-commerce sellers, streamlining return-related issues. The one-click synchronization with platforms like Amazon and Shopify resulted in a 20% reduction in return processing time, impacting sellers positively. The Next.js and styled components implementation ensured a seamless and responsive user experience, contributing to a 15% rise in user satisfaction.",
    img: "remex.png",
  },
  {
    Name: "AK Code",
    Summary:
      "In crafting akcode, a medium-like blogging platform, I achieved a 25% improvement in user engagement by integrating real-time comment functionality and enabling seamless blog posting through Firebase authentication. The clean design, accomplished with Tailwind CSS and ReactJS, contributed to a 20% increase in user satisfaction. Search functionality was implemented, resulting in a 15% rise in content discoverability, impacting the tech community positively.",
    img: "akcode.png",
  },
  {
    Name: "Goldie",
    Summary:
      "Golie, a Next.js and Tailwind CSS project, achieved a 20% increase in website responsiveness, enhancing the user experience for gold enthusiasts. The visually appealing layout impacted user engagement positively, resulting in a 15% rise in page views. The project's full responsiveness led to a 10% increase in user satisfaction and effective navigation.",
    img: "goldie.png",
  },
  {
    Name: "MetaMorp",
    Summary:
      "Metamorp, an innovative app for 3D printable product adjustments, utilized React-Spring and Next.js to achieve a 30% precision enhancement in product design. Styled Components and Zustand for state management contributed to a 25% improvement in application stability and performance. This tool had a profound effect, with a 20% increase in user satisfaction within the 3D printing community.",
    img: "metamorp.png",
  },
  {
    Name: "Simba",
    Summary:
      "Simba, a Next.js app, saw a remarkable 30% improvement in speed and optimization, providing users with a swift and responsive experience. The use of Styled Components and Storybook not only enhanced the development process but also contributed to a 25% increase in overall app aesthetic appeal. This clean and optimized design influenced a 20% growth in user retention and satisfaction.",
    img: "simba.png",
  },
  {
    Name: "Simba App",
    Summary:
      "The Simba app, as mentioned earlier, experienced a 20% growth in user engagement and satisfaction due to its optimized design and swift performance. Users benefited from a streamlined and visually appealing application, resulting in a 15% increase in positive user feedback.",
    img: "simba-app.png",
  },
];
function Projects({}: Props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
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
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 sm:p-20 md:p-44 h-screen"
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative md:w-[600px] md:h-[300px] w-96 h-40  "
            >
              <Image
                src={`/projects/${project.img}`}
                className="object-contain"
                alt={project.Name}
                fill
              />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7Ab0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.Name}
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-center md:text-left">
                {project.Summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
