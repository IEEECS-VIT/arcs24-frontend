import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const WhatIsArcs = ({ className = "" }) => {
  const [days, setDays] = useState(14);
  const [hours, setHours] = useState(56);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(2);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setSeconds(prev => {
        if (prev > 0) return prev - 1;
        if (minutes > 0) {
          setMinutes(prev => prev - 1);
          return 59;
        }
        if (hours > 0) {
          setHours(prev => prev - 1);
          setMinutes(59);
          return 59;
        }
        if (days > 0) {
          setDays(prev => prev - 1);
          setHours(23);
          setMinutes(59);
          return 59;
        }
        return 0;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [seconds, minutes, hours, days]);

  return (
    <div className={`relative w-full min-h-screen bg-#01061B overflow-hidden text-white font-inter ${className} bg-[#01061B]`}>
      <div className="absolute inset-0 z-0">
        <img
          className="absolute w-2/5 left-8 z-10 -mt-2"
          src="/Ellipse 2.svg"
          alt="Ellipse 2"
        />
        <img
          className="absolute w-1/5 right-2.5 bottom-10 z-10"
          src="/Ellipse 1.svg"
          alt="Ellipse 1"
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div
          className="text-xl font-jost"
          style={{
            fontSize: '1.7vw',
            whiteSpace: 'nowrap',
            position: 'absolute',
            left: '20vw',
            top: '13vw'
          }}
        >
          Get READY to attend the event
        </div>
        <div
          className="text-[3vw] font-semibold font-jost w-[50vw] h-[15vw]"
          style={{
            position: 'absolute',
            left: '18vw',
            top: '15vw',
            textAlign: 'center',
            whiteSpace: 'nowrap'
          }}
        >
          Where innovation meets Aspiration
        </div>
      </div>

      {/* Adjusted a.svg */}
      <img
        src="a.svg"
        alt="a"
        className="absolute w-[20vw] h-[15vw] right-[82%] bottom-[12%] transform translate-x-1/2 -translate-y-1/2"
      />

      <div className="absolute top-[16vw] left-[5%] text-[13vw] font-black text-center inline-block w-[60vw] h-[30vw]">
        RCS
      </div>

      <div className="absolute top-[35vw] left-[19vw]">
        <div className="border-4 border-white rounded-lg p-12">
          <div className="w-[674px] text-center font-rugen text-[1vw] whitespace-nowrap">
            Explore more
          </div>
        </div>
      </div>

      <div className="absolute bottom-[10%] left-2/3 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-[8vw]">
  <div className="flex space-x-6 mt-4">
    {[days, hours, minutes, seconds].map((value, index) => (
      <div
        key={index}
        className="rounded-xl bg-gainsboro w-[4vw] h-[4vw] sm:w-[25vw] sm:h-[20vw] md:w-[20vw] md:h-[7vw] lg:w-[7vw] lg:h-[7vw] flex items-center justify-center"
      >
        <span className="tracking-[0.01em] font-rugen text-cornflowerblue text-[10vw] sm:text-[3vw] md:text-[3vw] lg:text-[3vw]">
          {value}
        </span>
      </div>
    ))}
  </div>
  <div className="flex space-x-20 mt-2">
    {['DAYS', 'HOURS', 'MINUTES', 'SECONDS'].map((label, index) => (
      <span key={index} className="font-black text-lg sm:text-xl md:text-6xl lg:text-6xl">
        {label}
      </span>
    ))}
  </div>
</div>


      <img src="line.svg" alt="line" className="absolute w-2/3 h-auto bottom-20 left-1/2 transform -translate-x-1/2" />
    </div>
  );
};

WhatIsArcs.propTypes = {
  className: PropTypes.string,
};

export default WhatIsArcs;
