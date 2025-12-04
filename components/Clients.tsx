"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, toolkits } from "@/data";

const Clients = () => {
  return (
    <section id="toolkits" className="py-20">
      <h1 className="heading">
        Take a look on my {" "}
        <span className="text-purple">Pentesting toolkits</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={toolkits}
            direction="right"
            speed="slow"
          />
        </div>
        <div className="flex flex-wrap items-center mt-28 justify-center gap-4 md:gap-16 max-lg:mt-20">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={img} alt={name} className="md:w-12 w-10" />
              <img src={nameImg} alt={nameImg} className="md:w-28 w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
