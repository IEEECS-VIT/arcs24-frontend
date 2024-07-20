import React from 'react';
import Part4 from './Part4';
import Part5 from './Part5';

export default function Combined() {
  return (
    <>
    <img className="d56 absolute" src="Ellipse1.svg"/>
    <img className="d57 absolute right-0" src="Ellipse2.svg"/>
      <div className='d4 text-white relative'>
        <Part4 />
        <Part5 />
        </div>
    </>
  );            
}
