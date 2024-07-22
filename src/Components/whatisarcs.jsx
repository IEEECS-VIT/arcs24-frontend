import React from "react";
import "../index.css";

const WhatIsArcs = () => {
  return (
    <div className="animated-gradient relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden font-serif text-white md:flex-row">
      {/* Image section for mobile screens */}
      <div className="absolute inset-y-0 left-0">
        <img src="Ellipse 5.svg" />
      </div>
      <div className="absolute inset-y-0 right-0">
        <img src="Ellipse 6.svg" />
      </div>
      <div className="order-1 flex w-full items-center justify-center p-4 md:order-2 md:w-1/4 md:p-0">
        <img
          src="two.svg" // Use appropriate image for mobile screens
          alt="Image for mobile"
          className="h-auto w-full object-cover md:hidden" // Hide on medium and large screens
        />
      </div>

      {/* Text content section */}
      <div className="flex-2 relative order-2 flex-col p-2 md:order-1 md:ml-10 md:p-0 lg:ml-20 lg:flex lg:flex-col lg:items-end lg:justify-end lg:pl-10">
        {" "}
        {/* Added margin to shift right */}
        <div className="flex flex-col">
          <h1 className="mb-6 text-nowrap font-rugen text-4xl font-bold md:mb-8 md:text-6xl lg:text-4xl">
            {" "}
            {/* Adjusted text sizes */}
            WHAT IS ARCS?
          </h1>

          <div className="mb-8 max-w-[100%] text-lg leading-relaxed md:max-w-[80%] md:text-lg lg:max-w-[80%] lg:text-lg">
            {" "}
            {/* Adjusted text sizes and max widths */}
            <p>
              {`Join us for this year's edition of ARCS, the prestigious flagship event brought to you by IEEE Computer Society.`}
            </p>
            <p>
              {`Over three captivating days, immerse yourself in the realm of technology's finest, as we pave the way for novel ideas.`}
            </p>
          </div>

          <div className="mb-6 max-w-full text-lg leading-relaxed md:max-w-[80%] md:text-lg lg:max-w-[85%] lg:text-lg">
            {" "}
            {/* Adjusted text sizes and max widths */}
            <p>
              {`ARCS'24 is the ultimate celebration of technology's transformative power, uniting visionaries, pioneers, and enthusiasts alike.`}
            </p>
            <p>
              {`This grand event fosters a dynamic platform for innovation to flourish.`}
            </p>
          </div>
        </div>
        <div className="lg:pl-15 flex justify-center p-6 md:justify-start md:pl-10 lg:mt-10">
          {" "}
          {/* Added margin-top to shift arrow down */}
          <img src="arrow.svg" className="md:block" alt="Arrow" />
        </div>
      </div>

      {/* Large screen view (hidden on mobile screens) */}
      <div className="order-3 hidden p-5 md:flex md:h-screen md:w-screen md:p-0 lg:w-full">
        <img
          src="two.svg"
          alt="Image for large screen"
          className="shadow-blur h-full w-full object-cover" // Added class for blurring
        />
      </div>
    </div>
  );
};

export default WhatIsArcs;
