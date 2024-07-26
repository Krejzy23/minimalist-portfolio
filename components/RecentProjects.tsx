"use client";

import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/Pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of my{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, link, iconLists }) => (
          <div
            key={id}
            className="sm:h-[41rem] lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[570px] w-[80vw] "
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center mb-10 sm:w-[570px] sm:h-[40vh] w-[80vw] h-[30vh] overflow-hidden">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="absolute bottom-0 z-10" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      className="flex justify-center items-center w-8 h-8 lg:w-10 lg:h-10 border border-white/[0.2] rounded-full bg-black"
                      key={index}
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2 " />
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center items-center">
                  <p className="flex text-sm lg:text-xl md:text-xs text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
