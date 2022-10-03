import React from 'react'
import IgImg1 from '../public/ig-img-1.jpeg';
import IgImg2 from '../public/ig-img-2.jpeg';
import IgImg3 from '../public/ig-img-3.jpeg';
import IgImg4 from '../public/ig-img-4.jpeg';
import IgImg5 from '../public/ig-img-5.jpeg';
import IgImg6 from '../public/ig-img-6.jpeg';
import Instag from './Instag'
function Insta() {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24 px-4'>
      <p className='text-2xl font-bold'>Follow me on instagram</p>
      <p className='pb-4'>@Capture</p>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-6 p-4'>
        <Instag socialImg={IgImg1}/>
        <Instag socialImg={IgImg2}/>
        <Instag socialImg={IgImg3}/>
        <Instag socialImg={IgImg4}/>
        <Instag socialImg={IgImg5}/>
        <Instag socialImg={IgImg6}/>
      </div>
    </div>
  )
}

export default Insta