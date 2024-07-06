import React from 'react';

const WhatIsArcs = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#01061B] flex overflow-hidden text-white font-inter flex-col md:flex-row items-center justify-center">
      {/* Image section for mobile screens */}
      <navbar></navbar>
      <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-0 order-1 md:order-2">
        <img 
          src="two.svg"  // Use appropriate image for mobile screens
          alt="Image for mobile" 
          className="object-cover w-full h-auto md:hidden" // Hide on medium and large screens
        />
      </div>

      {/* Text content section */}
      <div className="flex-1 flex-col  relative p-2 md:p-0 order-2 md:order-1 lg:flex lg:flex-col lg:justify-bottom lg:items-end lg:pl-40">
      <div className='flex flex-col '>
        <h1 className="text-4xl md:text-8xl lg:text-5xl font-bold mb-6 md:mb-8 text-nowrap ">
          WHAT IS ARCS?
        </h1>
        
        <div className="mb-8 max-w-[100%] md:max-w-[90%] lg:max-w-[105%] leading-relaxed text-lg md:text-xl lg:text-2xl line-clamp-8 ">
          <p className=" ">
            Join us for this year's edition of ARCS, the prestigious flagship event brought to you by IEEE Computer Society. Over three captivating days, immerse yourself in the realm of technology's finest, as we pave the way for novel ideas.
          </p>
        </div>
        
        <div className="mb-6 max-w-full md:max-w-[90%] lg:max-w-[95%] leading-relaxed text-lg md:text-xl lg:text-2xl line-clamp-8 ">
          <p className=" ">
            ARCS'24 is the ultimate celebration of technology's transformative power, uniting visionaries, pioneers, and enthusiasts alike. This grand event fosters a dynamic platform for innovation to flourish.
          </p>
        </div>
        </div>
        <div className="flex justify-center md:justify-start p-6 md:pl-10">
          <img src='arrow.svg' className='md:block'></img>
        </div>
      </div>
     
      
      {/* Large screen view (hidden on mobile screens) */}
      <div className="hidden md:flex md:w-screen md:h-screen  p-5 md:p-0 order-2  object lg:w-full lg:w-full ">
        <img 
          src="two.svg" 
          alt="Image for large screen" 
          className=" w-full h-full object-cover   "
        />
      </div>
    
    </div>
  );
};

export default WhatIsArcs;
