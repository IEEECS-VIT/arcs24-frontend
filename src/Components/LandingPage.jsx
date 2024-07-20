function LandingPage() {
  return (
    <div className="relative h-screen overflow-hidden bg-[#01061B]">
      <div className="absolute inset-0 z-0">
        <img 
          className="absolute bottom-60 -left-6 z-10 lg:w-5/12 hidden lg:block select-none pointer-events-none"
          src="public/Ellipse 2.svg"
        />
        <img
          className="absolute right-1 top-72 z-10 lg:w-2/12 hidden lg:block select-none pointer-events-none"
          src="public/Ellipse 1.svg"
        />
        <img
          className="absolute lg:hidden "
          src="/MobileEllipse.svg"
        />
         <img
          className="absolute lg:hidden top-32 right-0"
          src="/MobileEllipse2.svg"
        />
      
      </div>

      <div className="relative z-20 lg:mt-28 text-center mt-20">
        <h1 className="font-rugen lg:text-[18vh] text-white text-[10vh] select-none pointer-events-none">ARCS</h1>
        <p className="lg:block hidden text-[2vh] font-rugen lg:text-[4.5vh] lg:-mt-5 text-white select-none pointer-events-none">
          OUR FLAGSHIP EVENTS
        </p>
        <p className="text-white lg:hidden font-rugen text-[3.8vh] leading-tight mt-12">
          OUR
        </p>
        <p className="text-white lg:hidden font-rugen text-[3.8vh] leading-tight ">
          FLAGSHIP
        </p>
        <p className="text-white lg:hidden font-rugen text-[3.8vh] leading-tight">
          EVENTS
        </p>
        <p className="font-rugen lg:text-[4.5vh] text-white text-[3.8vh] leading-tight select-none pointer-events-none">
          ARE{" "}
          <span className="bg-gradient-to-r from-[#DC55FF] from-25% via-[#D735B3] via-65% to-[#FF001F] to-100% bg-clip-text text-transparent">
            BACK
          </span>
        </p>
      </div>
      <div className="relative z-20 lg:flex justify-center items-center mx-5 gap-x-8 lg:mt-10 mt-14 lg:mx-96">
  <button className="flex justify-center items-center ">
    <img src="/LeftButton.svg" className="lg:h-[12vh] hidden lg:block select-none pointer-events-none " />
    <img src="/MobileLanding1.svg" className="lg:hidden block h-[10vh] mx-[20vh]" />
  </button>
  <button className="flex justify-center items-center align-">
    <img src="/RightbuttonLandingPage.svg" className="lg:h-[12vh] hidden lg:block select-none pointer-events-none " />
    <img src="/MobileLanding2.svg" className="lg:hidden block h-[10vh] mx-[19vh]" />
  </button>
</div>

      <div className="absolute bottom-9 z-20  w-full rotate-3 border border-dashed border-gray-400 bg-gradient-to-r from-[#01061B] via-100% to-[#073543]">
        <span className="inline-block whitespace-nowrap font-rugen text-xl text-white text-center select-none pointer-events-none">
          EXCITING PRIZE POOL | INTERESTING SPEAKER SESSION | EXCITING PRIZE
          POOL | INTERESTING SPEAKER SESSION | EXCITING PRIZE POOL | INTERESTING
          SPEAKER SESSION
        </span>
      </div>
      <div className="absolute bottom-9 z-20  w-full -rotate-3 bg-gradient-to-r from-[#9F9DFF] via-[#682FED] to-[#9070f8] opacity-90 backdrop-opacity-15">
        <span className="inline-block whitespace-nowrap font-rugen text-xl text-white text-center select-none pointer-events-none">
          HACKBATTLE | CICADA | HACKBATTLE | CICADA | HACKBATTLE | CICADA |
          HACKBATTLE | CICADA | HACKBATTLE | CICADA | HACKBATTLE
        </span>
      </div>
    </div>
  );
}

export default LandingPage;
