"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    id: number;
    img: string;
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-12 py-2 w-max flex-nowrap ",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[90vw] max-w-full relative rounded-2xl border flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[70vw] dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2]"
            style={{
              background: "rgb(2,0,36)",
              backgroundColor:
                "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 35%, rgba(98,108,111,1) 100%)",
            }}
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="flex flex-col z-20 items-center">
                <div className="flex flex-col md:justify-start">
                <span className="text-xl leading-[1.6] text-white font-semibold">
                  {item.name}
                </span>
                <span className="text-sm -mt-2 px-2 leading-[1.6] text-white-200 font-normal">
                  {item.title}
                </span>


                </div>
                <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between z-20 mt-6">
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-md w-[206px] h-[101px] md:w-[412px] md:h-[201px] mb-4 md:mb-0 md:mr-6"
                />
                <span className="relative mt-2 z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                  {item.quote}
                </span>


                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
