import React from "react";
import "../index.css";

export default function Part4() {
  return (
    <div className="div1 m-0 md:ml-[2.26vw] sm:ml-[15vw] md:mr-[10vw] md:mt-[12.7vh] md:flex">
      {/* Top Image for mobile view */}
      <img
        className="img10 order-1 ml-[20.5vw] sm:ml-[18vw]  h-[25vh] md:mt-0 md:hidden"
        src="Group119.svg"
        alt="Decorative Graphic"
      />

      {/* Content Section */}
      <div className="d2 order-2 mt-[2.5vh] flex md:order-1 md:ml-[2.5vw] md:mt-[2vw]">
        {/* Left Icon Image */}
        <img
          className="img2 ml-[1vw] h-[6.8vh] w-[7.2vw] md:mr-0 md:h-[8.1vh] md:w-[4vw]"
          src="Group111.svg"
          alt="Left Icon"
        />

        {/* Text Content */}
        <div className="d6 mt-[8vw] w-[81.75vw] sm:w-[50vw] text-center md:mt-[5.85vh] lg:w-[49.75vw] md:w-[45vw]  md:text-start">
          <p className="p2 m-0 font-source-serif font-semibold  tracking-[0.26vw] md:ml-0 md:text-3xl  lg:text-[1.875rem] md:text-[1.5rem] sm:text-[0.8rem]">
            Welcome to the game where only the brave and the brilliant dare
            tread. Cicada 3310 is not for the faint of heart — it's a hacker’s
            playground, a cryptographer's nightmare, and a genius’s proving
            ground.
          </p>  
          {/* <p className="p2 m-0 mt-[0.5vw] font-source-serif text-md font-semibold leading-[151%] tracking-[0.26vw] md:ml-0 md:text-3xl">
            Hidden messages, encrypted codes, and unsolvable puzzles guard a
            secret that only the worthy will discover. Every click is a risk,
            every riddle a step deeper into the rabbit hole.
          </p> */}
          <p className="p2 m-0 mt-[0.5vw] font-source-serif text-md font-semibold leading-[151%] tracking-[0.26vw] md:ml-0 md:text-3xl text-purple-400 lg:text-[1.875rem] md:text-[1.5rem] md:text-[1.2rem]">
            "Not all who wander are lost… some are hunted." - team 3310
        </p>
        </div>

        {/* Right Icon Image */}
        <img
          className="img3 mt-[50vw] sm:mt-[28vh]  h-[6.8vh] w-[7.2vw] md:mr-[5.9vw] md:mt-[37.93vh] md:h-[8.1vh] md:w-[4vw]"
          src="/Group112.svg"
          alt="Right Icon"
        />
      </div>

      {/* Large Image for Desktop View */}
      <img
        className="img1 order-3 ml-[2vw] mt-[2vh] h-0 w-0 md:order-2 md:ml-0 lg:h-[51.46vh] md:h-[40vh] md:w-[46vw]"
        src="Group118.svg"
        alt="Large Decorative Graphic"
      />
    </div>
  );
}
