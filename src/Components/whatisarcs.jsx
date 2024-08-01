import React from 'react';


const WhatIsArcs = () => {
  return (
    <div className="relative w-full min-h-screen animated-gradient flex overflow-hidden text-white font-serif flex-col md:flex-row items-center justify-center">
      {/* Image section for mobile screens */}
      <div className="absolute inset-y-0 left-0">
                <img src="Ellipse 5.svg" />
            </div>
            <div className="absolute inset-y-0 right-0">
                <img src ="Ellipse 6.svg" />
            </div>
      <div className="w-full md:w-1/4 flex justify-center items-center p-4 md:p-0 order-1 md:order-2">
        <img 
          src="two.svg"  // Use appropriate image for mobile screens
          alt="Image for mobile" 
          className="object-cover w-full h-auto md:hidden" // Hide on medium and large screens
        />
      </div>

      {/* Text content section */}
      <div className="flex-2 flex-col relative p-2 md:p-0 order-2 md:order-1 lg:flex lg:flex-col lg:justify-end lg:items-end lg:pl-10 md:ml-10 lg:ml-20">  {/* Added margin to shift right */}
        <div className='flex flex-col'>
          <h1 className="text-4xl md:text-6xl lg:text-4xl font-bold mb-6 md:mb-8 text-nowrap font-rugen">  {/* Adjusted text sizes */}
            WHAT IS ARCS?
          </h1>
          
          <div className="mb-8 max-w-[100%] md:max-w-[80%] lg:max-w-[80%] leading-relaxed text-lg md:text-lg lg:text-lg font-source-serif ">  {/* Adjusted text sizes and max widths */}
            <p>
              {`Join us for this year's edition of ARCS, the prestigious flagship event brought to you by IEEE Computer Society.`}
            </p>
            <p>
              {`Over three captivating days, immerse yourself in the realm of technology's finest, as we pave the way for novel ideas.`}
            </p>
          </div>
          
          <div className="mb-6 max-w-full md:max-w-[80%] lg:max-w-[85%] leading-relaxed text-lg md:text-lg lg:text-lg">  {/* Adjusted text sizes and max widths */}
            <p>
              {`ARCS'24 is the ultimate celebration of technology's transformative power, uniting visionaries, pioneers, and enthusiasts alike.`}
            </p>
            <p>
              {`This grand event fosters a dynamic platform for innovation to flourish.`}
            </p>
          </div>
        </div>
        <div className="flex justify-center md:justify-start p-6 md:pl-10 lg:pl-15 lg:mt-10">  {/* Added margin-top to shift arrow down */}
          <img src='arrow2.svg' className='md:block animated-arrow' alt="Arrow" />
        </div>
      </div>
      
      {/* Large screen view (hidden on mobile screens) */}
      <div className="hidden md:flex md:w-screen md:h-screen p-5 md:p-0 order-3 lg:w-full">
        <img 
          src="two.svg" 
          alt="Image for large screen" 
          className="w-full h-full object-cover shadow-blur"  // Added class for blurring
        />
      </div>
    </div>
  );
};

export default WhatIsArcs;
