import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

const Clients = () => {
  return (
    <div>
      <div className="py-20">
        <h1 className="heading">
          Grateful testimonials from{" "}
          <span className="text-purple">Happy clients</span>
        </h1>
        <div className="flex flex-col items-center">
          <div className="relative flex flex-col items-center rounded-md overflow-hidden antialiased h-[50vh] md:h-[30rem]">
            <InfiniteMovingCards 
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
