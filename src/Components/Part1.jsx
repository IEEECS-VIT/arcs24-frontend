import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Part1() {
  AOS.init();
  return (
    <div
      className="div1 relative m-0 h-full sm:ml-[5vw] md:ml-[2.2552083333333335vw] md:mt-0 md:flex"
      id="events"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <img
        className="img1 z-5 absolute ml-[2vw] mt-0 h-[0] w-[0] md:ml-[4vw] lg:h-[51.45891276864728vh] lg:w-[27vw] lg:mt-[0] md:h-[41vh] md:w-[27vw] md:mt-[12vh]"
        src="Group222.png"
        alt=""
      />
      <img
        className="img25 relative z-10 ml-[2.5vw] h-0 lg:h-[25vw] md:h-[30vw] md:w-[25vw] md:mt-[12vh] lg:mt-[0]"
        src="Group223.png"
        alt=""
      />
      <img
        className="imh26 z-15 relative mr-[5vw] mt-[8vh] lg:mt-[6vh] sm:mt-[0vh] h-0 lg:h-[35vh] md:h-[30vh] md:mt-[15vh]"
        src="Group141.png"
        alt=""
      />
      <img
        className="img10 ml-[20.5vw] mt-[0vh] h-[25vh] sm:ml-[30vw] md:hidden"
        src="Group117.svg"
        alt=""
      />
      <div className="d2 mt-[2.5vh] flex md:ml-[5vw] sm:ml-[10vw] md:mt-[2vw]">
        <img
          className="img2 ml-[1vw] h-[6.7926675094816686vh] w-[7.2135416666666665vw] md:m-[0.3255208333333333vw] md:mr-[0] md:h-[8.099873577749683vh] md:w-[3.958984375vw]"
          src="Group111.svg"
          alt=""
        />
        <div className="d6 mt-[8vw] w-[81.744791666666668vw] text-center sm:w-[50vw] sm:text-[0.8rem] md:mt-[5.849557522123893vh] md:w-[51.744791666666668vw] md:text-start md:text-[1.5rem] lg:text-[1.875rem]">
          <p className="p2 text-md m-0 font-source-serif font-semibold tracking-[0.2604166666666667vw] md:ml-[0] md:text-3xl">
            Join the adrenaline-pumping 36-hour
          </p>
          <p className="p2 m-0 font-source-serif text-md font-semibold tracking-[0.2604166666666667vw] md:ml-[0] md:text-3xl">
            HackBattle by IEEECS-VIT, where
          </p>
          <p className="p2 m-0 mt-[0.5vw] font-source-serif text-md font-semibold leading-[151%] tracking-[0.2604166666666667vw] md:ml-[0] md:text-3xl">
            tech innovators gather for
          </p>
          <p className="p2 m-0 mt-[0.5vw] font-source-serif text-md font-semibold leading-[151%] tracking-[0.2604166666666667vw] md:ml-[0] md:text-3xl">
            groundbreaking challenges, keynote
          </p>
          <p className="p2 m-0 mt-[0.5vw] font-source-serif text-md font-semibold leading-[151%] tracking-[0.2604166666666667vw] md:text-3xl">
            sessions, and engaging activities that ignite creativity and drive
            innovation.
          </p>
        </div>
        <img
          className="img3 mt-[40vw] sm:mt-[22.5vh] h-[6.7926675094816686vh] w-[7.2135416666666665vw] md:mr-[5.25625vw] md:mt-[37.92667509481669vh] md:h-[8.099873577749683vh] md:w-[3.958984375vw]"
          src="/Group112.svg"
          alt=""
        />
      </div>
    </div>
  );
}
