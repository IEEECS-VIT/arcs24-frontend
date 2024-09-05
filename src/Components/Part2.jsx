import React from "react";

export default function Part2() {
  return (
    <div className="mt-[2.5vh] lg:flex">
      <div className="content1 ml-[17vw] mt-[4vh] w-[61.3828125vw] lg:ml-[8.5vw] lg:mt-[5.7926675094816686vh] lg:w-[27.799479166666668vw]">
        <p className="p1 ml-[5vw] w-[57.3828125vw] font-source-serif text-[1.463rem] font-bold leading-[145%] tracking-[0.3604166666666667vw] lg:ml-[0] lg:mt-[0.6321112515802781vh] lg:w-[27.799479166666668vw] lg:text-xl">
          <span className="t1 text-blurple">Date: </span>To be announced
        </p>
        <p className="p1 ml-[7vw] w-[57.3828125vw] font-source-serif text-2xl font-bold leading-[145%] tracking-[0.3604166666666667vw] lg:ml-[0] lg:mt-[0.6321112515802781vh] lg:w-[27.799479166666668vw] lg:text-xl">
          <span className="t1 text-blurple">Venue: </span>To be announced..
        </p>
        <p className="p1 ml-[5vw] w-[77.3828125vw] font-source-serif text-2xl font-bold leading-[145%] tracking-[0.3604166666666667vw] lg:ml-[0] lg:mt-[0.6321112515802781vh] lg:w-[27.799479166666668vw] lg:text-xl">
          <span className="t1 text-blurple">Price: </span>To be announced..
        </p>
      </div>

      <button className="flex items-center justify-center font-normal uppercase no-underline transition-all duration-200 ease-in-out">
        <svg
          className="img5 mb-[10vh] ml-[7.5vw] mt-[2vw] h-[16.321112515802781vh] w-[85.182291666666668vw] lg:ml-[10.067708333333334vw] lg:mt-[9.578002528445005vh] lg:h-[6.826801517067004vh] lg:w-[35.807291666666664vw]"
          preserveAspectRatio="xMidYMid meet"
        >
          <image
            href="./reg.svg"
            width="100%"
            height="100%"
            className="glow-on-hover"
          />
          <text
            x="50%"
            y="50%"
            dx="4"
            dy="-3"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            className="font-rugen text-[3vh]"
          >
            Register Now
          </text>
        </svg>
      </button>
    </div>
  );
}
