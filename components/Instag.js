import React from 'react'
import Image from 'next/image'
import {FaInstagram} from 'react-icons/fa'
function Instag({socialImg}) {
  return (
    <div className='relative'>
        
        <Image src={socialImg} 
        alt='/' 
        className='w-full h-full' 
        layout='responsive'/>
        <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center w-full h-full items-center hover:bg-block/50 group'>
        <p className='text-gray-300 hidden group-hover:block'>
            <FaInstagram size={30} className='z-10'/>
            </p>
    </div>
    </div>
  )
}

export default Instag