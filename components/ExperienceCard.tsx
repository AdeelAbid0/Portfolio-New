import React from "react";
import { motion } from "framer-motion";
type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 sm:w-[500px] md:w-[600px] xl:w-[900px] opacity-40 hover:opacity-100 snap-center bg-[#292929] p-10 transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-32 w-32  bg-white rounded-full flex justify-center items-center"
      >
        <img
          className="h-32 w-32 object-contain"
          src="https://static.wixstatic.com/media/3b6f6e_a95585e687e6434c8aa68559fed066b2~mv2.png/v1/fill/w_208,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo_transparent_background.png"
          alt=""
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Frontend Software Engineer</h4>
        <p className="font-bold text-2xl mt-1">Cybernetic Controls Limited</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png"
          />
          <img
            className="h-10 w-10 rounded-full object-contain"
            src="https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work - Ended</p>
        <ul className="list-disc space-y-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
