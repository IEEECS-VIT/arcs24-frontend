import React from 'react';
import Part1 from './Part1';
import Part2 from './Part2';

export default function Combined() {
  return (
    <>
      <div className='d15 absolute'>
      <div className='d4 relative'>
        <Part1 />
        <Part2 />
        </div>
      </div>
      
    </>
  );            
}
