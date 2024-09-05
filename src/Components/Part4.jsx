import React from "react";
import "../index.css";

export default function Part4() {
  return (
    <div className="div1 m-0 lg:ml-[2.26vw] lg:mr-[10vw] lg:mt-[12.7vh] lg:flex">
      {/* Top Image for mobile view */}
      <img
        className="img10 order-1 ml-[22.5vw] mt-[5vh] h-[25vh] lg:mt-0 lg:hidden"
        src="Group119.svg"
        alt="Decorative Graphic"
      />

      {/* Content Section */}
      <div className="d2 order-2 mt-[2.5vh] flex lg:order-1 lg:ml-[2.5vw] lg:mt-[2vw]">
        {/* Left Icon Image */}
        <img
          className="img2 ml-[1vw] h-[6.8vh] w-[7.2vw] lg:mr-0 lg:h-[8.1vh] lg:w-[4vw]"
          src="Group111.svg"
          alt="Left Icon"
        />

        {/* Text Content */}
        <div className="d6 mt-[8vw] w-[81.75vw] text-center lg:mt-[5.85vh] lg:w-[51.75vw] lg:text-start">
          <p className="p2 m-0 font-source-serif text-sm font-semibold tracking-[0.26vw] lg:ml-0 lg:text-3xl">
            Welcome to the game where only the brave and the brilliant dare
            tread. Cicada 3310 is not for the faint of heart — it's a hacker’s
            playground, a cryptographer's nightmare, and a genius’s proving
            ground.
          </p>
          {/* <p className="p2 m-0 mt-[0.5vw] font-source-serif text-sm font-semibold leading-[151%] tracking-[0.26vw] lg:ml-0 lg:text-3xl">
            Hidden messages, encrypted codes, and unsolvable puzzles guard a
            secret that only the worthy will discover. Every click is a risk,
            every riddle a step deeper into the rabbit hole.
          </p> */}
          <p className="p2 m-0 mt-[0.5vw] font-source-serif text-sm font-semibold leading-[151%] tracking-[0.26vw] lg:ml-0 lg:text-3xl text-purple-400">
            "Not all who wander are lost… some are hunted." - team 3310
          </p>
        </div>

        {/* Right Icon Image */}
        <img
          className="img3 mt-[40vw] h-[6.8vh] w-[7.2vw] lg:mr-[5.9vw] lg:mt-[37.93vh] lg:h-[8.1vh] lg:w-[4vw]"
          src="/Group112.svg"
          alt="Right Icon"
        />
      </div>

      {/* Large Image for Desktop View */}
      <img
        className="img1 order-3 ml-[2vw] mt-[2vh] h-0 w-0 lg:order-2 lg:ml-0 lg:h-[51.46vh] lg:w-[46vw]"
        src="Group118.svg"
        alt="Large Decorative Graphic"
      />
    </div>
  );
}
