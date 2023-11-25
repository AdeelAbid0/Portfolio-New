import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-center justify-between max-w-6xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        {/* Social icons */}
        <SocialIcon
          url={"https://linkedin.com/in/akdevjs"}
          fgColor={"gray"}
          bgColor={"transparent"}
        />
        <SocialIcon
          url={"https://github.com/akdevjs"}
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        className="flex flex-row items-center text-gray-300 cursor-pointer justify-center"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        {/* <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        /> */}
        <Link
          href="#home"
          className="text-xl sm:text-2xl flex items-center text-gray-400 tracking-[-6px] uppercase font-bold"
        >
          <span className="text-[#F7AB0A]">A</span>K
        </Link>

        {/* <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          {"Let's "} Catch up
        </p> */}
      </motion.div>
    </header>
  );
}

export default Header;
