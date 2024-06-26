import React from 'react'
import img2 from '../image/Group111.svg';
import img3 from '../image/Group112.svg';
import img5 from '../image/ssss.svg';
export default function Part2() {
  return (
    <>
    <div>
    <div className='d2'>
        <img className='img2' src={img2} alt=''/>
        <div className='d6'>
        <p className='p2'>Lorem ipsum dolor sit amet</p>
        <p className='p2'>consectetur. Eget sem cursus</p>
        <p className='p2'>interdum in eros. Iaculis iaculis</p>
        <p className='p2'>turpis sit enim dictum interdum quis.</p>
        <p className='p2'>Tortor sed et sed pretium ultrices. Et</p>
        <p className='p2'>sit amet egestas <txt1 className='t1'>aliquam nunc</txt1>.</p>
        </div>
        <img className='img3' src={img3} alt=''/>
    </div>
    <img className='img5' src={img5} alt=''/>
    </div>
    </>
  )
}
