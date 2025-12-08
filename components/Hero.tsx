import { FaLocationArrow } from "react-icons/fa6";
import React from "react";
import { LeftSpotlight, RightSpotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FlipWords } from "./ui/FlipWords";
import { Boxes } from "./ui/Boxes";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-32 h-screen w-full">
      <div className="">
        {/* Left-facing spotlights */}
        <LeftSpotlight className="top-10 -left-10 h-screen w-52 md:w-96" fill="white" />
        <LeftSpotlight className="top-10 left-10 h-[80vh] w-52 md:w-96" fill="purple" />
        <LeftSpotlight className="bottom-10 left-10 h-full w-52 md:w-96" fill="blue" />

        {/* Right-facing spotlights pointing from right to center */}
        <RightSpotlight className="top-10 -right-60 h-screen w-52 md:w-96" fill="white" />
        <RightSpotlight className="-bottom-10 -right-40 h-full w-52 md:w-96" fill="purple" />
        <RightSpotlight className="bottom-10 -right-40 h-full w-52 md:w-96" fill="blue" />
      </div>

      <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
        <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
          {/* <Boxes className="hidden md:flex w-full h-full opacity-50" /> */}
        </div>
      </div>

      <div className="relative flex justify-center my-20 z-10 w-full">
        <div className="flex flex-col items-center justify-center w-full max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            #Dynamic Web Magic with Next.js
          </h2>
          <div className="text-center text-[40px] md:text-4xl lg:text-6xl">
            <h1 className="tracking-wider font-semibold">
              Creating Amazing User
            </h1>
            <FlipWords
              className="tracking-widest font-bold lg:mt-4"
              words={["Interfaces", "Journeys", "Interactions"]}
            />
          </div>
          <TextGenerateEffect
            className="text-center md:tracking-wider mb-4 text-sm md:text-md lg:text-lg"
            words="Hi, I'm Aleš, a Next.js Developer based in Czech Republic 🇨🇿"
          />
          <a href="#about" className="">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
