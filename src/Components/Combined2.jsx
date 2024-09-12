import React from 'react';
import Part4 from './Part4';
import Part5 from './Part5';
import "../index.css"

export default function Combined2() {
  return (
    <>
    <div className="relative animated-gradient">
      <div className="absolute inset-y-0 left-0 ">
        <img className='h-[32.99620733249052vh]' src="Ellipse 5.svg" alt="Left decoration" />
      </div>
      <div className="absolute inset-y-0 right-0 ">
        <img  src="Ellipse 6.svg" alt="Right decoration" />
      </div>
      
      <div className='relative z-10'>
      <div className="absolute">
        <Part4 />
        <Part5 />
      </div>
      </div>
    </div>
    </>
  );            
}