import Image from 'next/image';
import React,{useState} from 'react'
import { SliderData } from './SliderData'
import {FaArrowCircleLeft} from 'react-icons/fa'
import {FaArrowCircleRight} from 'react-icons/fa'

function Gallery() {
    const [current,setCurrent] = useState(0)
    const [slides, setSlides] = useState(SliderData)
    const length = slides.length

    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () =>{
        setCurrent(current ===  0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.lenght <= 0) {
        return null
    }
  return (
    <div id='gallery' className='max-w-[1240px] mx-auto '>
      <h1 className='text-center text-2xl font-bold p-4'>Gallery</h1>
      <div className='relative flex justify-center p-4'>      
        {SliderData.map((item,index) => {
            return (
             <div key={item.id} className={index === current ?  'opacity-[1] ease-in duration-1000' : 'opacity-0'}>

             <FaArrowCircleLeft 
             onClick={prevSlide}
             className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]' size={30}/>


              {index === current &&  
              <Image src={item.image} 
                alt="/"  
                width='1440' 
                height='600' 
                objectFit='cover'/>}

             <FaArrowCircleRight 
             onClick={nextSlide}
             className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]' size={30}/>

                </div>
                




            )
        })}
      </div>
      </div>
  )
}

export default Gallery