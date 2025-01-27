"use client";

import { projects } from "@/data";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/Card3d";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        A small selection of my{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-24 mt-10">
        {projects.map(({ id, title, des, img, link, iconLists }) => (
          <CardContainer
            key={id}
            className="w-[80vw] md:max-h-[35rem] h-[30rem] sm:h-[41rem]  sm:w-[570px] rounded-xl border dark:border-white/[0.2] border-black/[0.1] p-5"
          >
            <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] p-5 ">
              <div className="absolute inset-0 w-full h-full overflow-hidden lg:rounded-3xl">
                <img
                  src="/bg.png"
                  alt="bg-img"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardItem
                translateZ={100}
                className="relative z-10 flex items-center justify-center"
              >
                <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
                  <img
                    src={img}
                    alt={title}
                    className="group-hover/card:shadow-xl object-contain max-h-full"
                  />
                </div>
              </CardItem>
              <CardItem
                translateZ={80}
                className="text-xl font-bold text-neutral-600 dark:text-white mt-8 relative z-10"
              >
                {title}
              </CardItem>
              <CardItem
                as="p"
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 relative z-10"
                style={{
                  color: "#BEC1DD",
                }}
              >
                {des}
              </CardItem>
              <div className="flex items-center justify-between mt-10 mb-3 relative z-10">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <CardItem
                      key={index}
                      className="flex justify-center items-center w-8 h-8 lg:w-10 lg:h-10 border border-white/[0.2] rounded-full bg-black"
                      translateZ={40 - index * 10}
                    >
                      <Image src={icon} alt={icon} width={96} height={96} className="p-2" />
                    </CardItem>
                  ))}
                </div>
                <CardItem
                  translateZ={50}
                  as={Link}
                  href={link}
                  target="__blank"
                  className="flex justify-center items-center cursor-pointer"
                >
                  <p className="flex text-xs lg:text-xl md:text-sm text-purple underline ">
                    Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="00CCFF" />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default Projects;