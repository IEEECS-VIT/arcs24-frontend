function LandingPage() {
  return (
    <div className="relative h-screen overflow-hidden bg-[#01061B]">
      <div className="absolute inset-0 z-0">
        <img
          className="absolute bottom-40 left-5 z-10 w-6/12"
          src="public/Ellipse 2.svg"
        />
        <img
          className="absolute right-1 top-44 z-10 w-3/12"
          src="public/Ellipse 1.svg"
        />
      </div>

      <div className="relative z-20 mt-14 p-12 text-center">
        <h1 className="p-3 font-rugen text-9xl text-white">ARCS</h1>
        <p className="px-0 py-2 font-rugen text-3xl text-white">
          OUR FLAGSHIP EVENTS
        </p>
        <p className="font-rugen text-3xl text-white">
          ARE{" "}
          <span className="bg-gradient-to-r from-[#DC55FF] from-25% via-[#D735B3] via-65% to-[#FF001F] to-100% bg-clip-text text-transparent">
            BACK
          </span>
        </p>
      </div>
      <div className="relative z-20 flex justify-center gap-x-5">
        <button className="m-2 rounded-lg border-2 border-[#7839EE] px-10 py-4 font-rugen text-2xl text-white shadow-md shadow-[#D9D9D9]">
          Hackbattle
        </button>
        <button className="m-2 rounded-lg border-2 border-[#7839EE] bg-[#422578] px-24 py-4 font-rugen text-2xl text-white shadow-md shadow-[#D9D9D9]">
          Cicada
        </button>
      </div>
      <div className="absolute bottom-9 z-20 h-8 w-full rotate-3 border border-dashed border-gray-400 bg-gradient-to-r from-[#01061B] via-100% to-[#073543]">
        <span className="inline-block whitespace-nowrap font-rugen text-xl text-white">
          EXCITING PRIZE POOL | INTERESTING SPEAKER SESSION | EXCITING PRIZE
          POOL | INTERESTING SPEAKER SESSION | EXCITING PRIZE POOL | INTERESTING
          SPEAKER SESSION
        </span>
      </div>
      <div className="absolute bottom-9 z-20 h-8 w-full -rotate-3 bg-gradient-to-r from-[#CD29E9] via-[#682FED] to-[#9070f8] opacity-90 backdrop-opacity-15">
        <span className="inline-block whitespace-nowrap font-rugen text-xl text-white">
          HACKBATTLE | CICADA | HACKBATTLE | CICADA | HACKBATTLE | CICADA |
          HACKBATTLE | CICADA | HACKBATTLE | CICADA | HACKBATTLE
        </span>
      </div>
    </div>
  );
}

export default LandingPage;
