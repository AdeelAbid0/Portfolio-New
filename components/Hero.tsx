import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      '<SonOfTheNightCode fuel="coffee" />',
      'Hi, Name\'s Abdullah "AK" Khan',
      "Steak-Devourer-and-Anime-Connoisseur.tsx",
    ],
    delaySpeed: 2000,
    loop: true,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="./profile.jpeg"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#">
            <button className="hero-button-class">About</button>
          </Link>
          <Link href="#">
            <button className="hero-button-class">Experience</button>
          </Link>
          <Link href="#">
            <button className="hero-button-class">Skills </button>
          </Link>
          <Link href="#">
            <button className="hero-button-class">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
