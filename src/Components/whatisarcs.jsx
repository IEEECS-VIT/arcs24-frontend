import React from "react";

const WhatIsArcs = () => {
  return (
    <div
      className="animated-gradient relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden font-serif text-white md:flex-col lg:flex-row"
      id="about"
    >
      {/* Image section for mobile screens */}
      <div className="absolute inset-y-0 left-0">
        <img src="Ellipse 5.svg" alt="Left decoration" />
      </div>
      <div className="absolute inset-y-0 right-0">
        <img src="Ellipse 6.svg" alt="Right decoration" />
      </div>

      {/* Image section for mobile and iPad screens */}
      <div className="order-1 w-full items-center justify-center p-4 md:mb-24 md:w-[98vw] md:p-0 lg:order-2 lg:w-1/4">
        <img
          src="two.svg"
          alt="Image for mobile and iPad"
          className="h-auto w-full object-cover md:block lg:hidden" // Show on mobile and iPad, hide on large screens
        />
      </div>

      {/* Text content section */}
      <div className="flex-2 relative order-2 flex-col p-2 md:ml-10 md:mt-[150px] md:p-4 lg:order-1 lg:ml-20 lg:flex lg:flex-col lg:items-end lg:justify-end lg:p-0 lg:pl-10">
        <div className="flex flex-col">
          <h1 className="mb-6 text-nowrap font-rugen text-3xl font-bold md:mb-8 md:text-5xl lg:text-4xl">
            WHAT IS ARCS?
          </h1>

          <div className="mb-8 max-w-[100%] font-source-serif text-lg leading-relaxed md:max-w-[80%] md:text-base lg:max-w-[80%] lg:text-lg">
            <p>
              {`Join us for this year's edition of ARCS, the prestigious flagship event brought to you by IEEE Computer Society.`}
            </p>
            <p>
              {`Over three captivating days, immerse yourself in the realm of technology's finest, as we pave the way for novel ideas.`}
            </p>
          </div>

          <div className="mb-6 max-w-full text-lg leading-relaxed md:max-w-[80%] md:text-base lg:max-w-[85%] lg:text-lg">
            <p>
              {`ARCS'24 is the ultimate celebration of technology's transformative power, uniting visionaries, pioneers, and enthusiasts alike.`}
            </p>
            <p>
              {`This grand event fosters a dynamic platform for innovation to flourish.`}
            </p>
          </div>
        </div>
        <div className="lg:pl-15 flex justify-center p-6 md:justify-start md:pl-10 lg:mt-10">
          <img
            src="arrow2.svg"
            className="animated-arrow md:block"
            alt="Arrow"
          />
        </div>
      </div>

      {/* Large screen view (hidden on mobile screens) */}
      <div className="order-3 hidden p-5 lg:flex lg:h-screen lg:w-screen lg:p-0">
        <img
          src="two.svg"
          alt="Image for large screen"
          className="shadow-blur h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default WhatIsArcs;
