import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/Pin";


const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of my{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, img, link, iconLists }) => (
          <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] ">
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] h-[20vh] overflow-hidden">
                <div className="">
                  <img 
                    src="/bg.png"
                    alt="bg-img"
                  />
                </div>
                <img 
                  src={img}
                  alt={title}
                  className="absolute bottom-0 z-10"
                />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
