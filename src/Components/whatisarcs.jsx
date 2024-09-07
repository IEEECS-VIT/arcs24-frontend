import React from 'react';

const WhatIsArcs = () => {
  return (
    <div className="relative w-full min-h-screen animated-gradient flex overflow-hidden text-white font-serif flex-col md:flex-col lg:flex-row items-center justify-center">
      {/* Image section for mobile screens */}
      <div className="absolute inset-y-0 left-0">
        <img src="Ellipse 5.svg" alt="Left decoration" />
      </div>
      <div className="absolute inset-y-0 right-0">
        <img src="Ellipse 6.svg" alt="Right decoration" />
      </div>

      {/* Image section for mobile and iPad screens */}
      <div className="w-full md:w-[98vw] lg:w-1/4 justify-center items-center p-4 md:mb-24 md:p-0 order-1 lg:order-2">
        <img 
          src="two.svg"  
          alt="Image for mobile and iPad" 
          className="object-cover w-full h-auto md:block lg:hidden" // Show on mobile and iPad, hide on large screens
        />
      </div>

      {/* Text content section */}
      <div className="flex-2 flex-col relative p-2 md:p-4 lg:p-0 order-2 lg:order-1 lg:flex lg:flex-col lg:justify-end lg:items-end lg:pl-10 md:ml-10 lg:ml-20 md:mt-[150px]">
        <div className='flex flex-col'>
          <h1 className="text-3xl md:text-5xl lg:text-4xl font-bold mb-6 md:mb-8 text-nowrap font-rugen">
            WHAT IS ARCS?
          </h1>
          
          <div className="mb-8 max-w-[100%] md:max-w-[80%] lg:max-w-[80%] leading-relaxed text-lg md:text-base lg:text-lg font-source-serif">
            <p>
              {`Join us for this year's edition of ARCS, the prestigious flagship event brought to you by IEEE Computer Society.`}
            </p>
            <p>
              {`Over three captivating days, immerse yourself in the realm of technology's finest, as we pave the way for novel ideas.`}
            </p>
          </div>
          
          <div className="mb-6 max-w-full md:max-w-[80%] lg:max-w-[85%] leading-relaxed text-lg md:text-base lg:text-lg">
            <p>
              {`ARCS'24 is the ultimate celebration of technology's transformative power, uniting visionaries, pioneers, and enthusiasts alike.`}
            </p>
            <p>
              {`This grand event fosters a dynamic platform for innovation to flourish.`}
            </p>
          </div>
        </div>
        <div className="flex justify-center md:justify-start p-6 md:pl-10 lg:pl-15 lg:mt-10">
          <img src='arrow2.svg' className='md:block animated-arrow' alt="Arrow" />
        </div>
      </div>
      
      {/* Large screen view (hidden on mobile screens) */}
      <div className="hidden lg:flex lg:w-screen lg:h-screen p-5 lg:p-0 order-3">
        <img 
          src="two.svg" 
          alt="Image for large screen" 
          className="w-full h-full object-cover shadow-blur"
        />
      </div>
    </div>
  );
};

export default WhatIsArcs;
