import React from 'react';
import Part4 from './Part4';
import Part5 from './Part5';
import "../index.css"

export default function Combined() {
  return (
    <>
      <div className="relative min-h-screen animated-gradient">
      <div className="absolute inset-y-0 left-0">
        <img src="Ellipse 5.svg" alt="Left decoration" />
      </div>
      <div className="absolute inset-y-0 right-0">
        <img src="Ellipse 6.svg" alt="Right decoration" />
      </div>
      <div className="relative z-10">
        <Part4 />
        <Part5 />
      </div>
    </div>
    </>
  );            
}