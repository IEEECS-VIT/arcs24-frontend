function LandingPage() {
  return (
    <div className="relative h-screen overflow-hidden bg-[#01061B]" id="hero">
      <div className="absolute inset-0 z-0">
        <img
          className="pointer-events-none absolute -left-6 bottom-60 z-10 hidden select-none lg:block lg:w-5/12"
          src="Ellipse 2.svg"
        />
        <img
          className="pointer-events-none absolute right-1 top-72 z-10 hidden select-none lg:block lg:w-2/12"
          src="Ellipse 1.svg"
        />
        <img className="absolute lg:hidden" src="MobileEllipse.svg" />
        <img
          className="absolute right-0 top-32 lg:hidden"
          src="MobileEllipse2.svg"
        />
      </div>

      <div className="relative z-20 mt-20 text-center lg:mt-28">
        <h1 className="pointer-events-none select-none font-rugen text-[10vh] text-white lg:text-[18vh]">
          ARCS
        </h1>
        <p className="pointer-events-none hidden select-none font-rugen text-[2vh] text-white lg:-mt-5 lg:block lg:text-[4.5vh]">
          OUR FLAGSHIP EVENTS
        </p>
        <p className="mt-12 font-rugen text-[3.8vh] leading-tight text-white lg:hidden">
          OUR
        </p>
        <p className="font-rugen text-[3.8vh] leading-tight text-white lg:hidden">
          FLAGSHIP
        </p>
        <p className="font-rugen text-[3.8vh] leading-tight text-white lg:hidden">
          EVENTS
        </p>
        <p className="pointer-events-none select-none font-rugen text-[3.8vh] leading-tight text-white lg:text-[4.5vh]">
          ARE{" "}
          <span className="bg-gradient-to-r from-[#DC55FF] from-25% via-[#D735B3] via-65% to-[#FF001F] to-100% bg-clip-text text-transparent">
            BACK
          </span>
        </p>
      </div>
      <div className="relative z-20 grid w-full place-items-center items-center justify-center lg:mt-10 lg:flex lg:gap-x-8">
        <button className="items-center justify-center font-normal uppercase text-white no-underline transition-all duration-200 ease-in-out lg:flex">
          <svg
            className="\\ my-8 h-[10vh] lg:my-0 lg:h-[20vh] lg:w-[30vw]"
            preserveAspectRatio="xMidYMid meet"
          >
            <a
              href="https://gravitas.vit.ac.in/events/e748d506-415c-4166-b45f-7485c25406aa"
              target="_blank"
            >
              <image
                href="./Group 135.svg"
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
                className="font-rugen text-[3.5vh] lg:text-[5vh]"
              >
                HACKBATTLE
              </text>
            </a>
          </svg>
        </button>

        <button className="items-center justify-center font-normal uppercase no-underline transition-all duration-200 ease-in-out lg:flex">
          <svg
            className="h-[10vh] lg:h-[20vh] lg:w-[30vw]"
            preserveAspectRatio="xMidYMid meet"
          >
            <a
              href="https://gravitas.vit.ac.in/events/5387f16e-b092-470a-b918-e89307526ebf"
              target="_blank"
            >
              <image
                href="./Group 114.svg"
                width="100%"
                height="100%"
                className="glow-on-hover transform"
              />

              <text
                x="50%"
                y="50%"
                dx="4"
                dy="-3"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                className="font-rugen text-[3.5vh] lg:text-[5vh]"
              >
                CICADA
              </text>
            </a>
          </svg>
        </button>
      </div>
      <div className="absolute bottom-9 z-20 w-full rotate-[4deg] border border-dashed border-gray-400 bg-gradient-to-r from-[#01061B] via-100% to-[#073543] sm:rotate-3">
        <div className="overflow-hidden">
          <div className="marquee-container-left whitespace-nowrap font-rugen text-base sm:text-2xl">
            <div className="marquee-content inline-block">
              {Array.from({ length: 1 }).map((_, i) => (
                <span key={i} className="px-4">
                  EXCITING PRIZE POOL | INTERESTING SPEAKER SESSION | EXCITING
                  PRIZE POOL | INTERESTING SPEAKER SESSION | EXCITING PRIZE POOL
                  |
                </span>
              ))}
            </div>
            <div className="marquee-content inline-block">
              {Array.from({ length: 1 }).map((_, i) => (
                <span key={i} className="px-4">
                  EXCITING PRIZE POOL | INTERESTING SPEAKER SESSION | EXCITING
                  PRIZE POOL | INTERESTING SPEAKER SESSION | EXCITING PRIZE POOL
                  |
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-9 z-20 w-full -rotate-[4deg] bg-gradient-to-r from-[#9F9DFF] via-[#682FED] to-[#9070f8] opacity-90 backdrop-opacity-15 sm:-rotate-3">
        <div className="overflow-hidden">
          <div className="marquee-container-right whitespace-nowrap font-rugen text-base sm:text-2xl">
            <div className="marquee-content inline-block">
              {Array.from({ length: 1 }).map((_, i) => (
                <span key={i} className="px-4">
                  HACKBATTLE | CICADA | HACKBATTLE | CICADA | HACKBATTLE |
                  CICADA | HACKBATTLE | CICADA |
                </span>
              ))}
            </div>
            <div className="marquee-content inline-block">
              {Array.from({ length: 1 }).map((_, i) => (
                <span key={i} className="px-4">
                  HACKBATTLE | CICADA | HACKBATTLE | CICADA | HACKBATTLE |
                  CICADA | HACKBATTLE | CICADA |
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
