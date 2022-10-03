import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
function Navbar() {
const [nav,setNav] = useState(false)
const [color, setColor] = useState('transparent')
const [textColor, setTextColor] = useState('white')
const toggle = () => {
    setNav(!nav)
}
useEffect(() => {
    const changeColor = () => {
        if(window.scrollY >= 90){
            setColor('#ffffff')
            setTextColor('#000000')
        }else{
            setColor('transparent')
            setTextColor('#ffffff')
        }
    }
    window.addEventListener('scroll', changeColor)
}, [])
    return (
    <div style={{backgroundColor:`${color}`}} className='fixed left-0 top-0 w-full  z-40 ease-in duration-300 text-white '>
        <div  className='max-w-[1240px]  mx-auto flex justify-between  items-center p-4 text-white'>
       <Link href='/'>
      <h1 style={{color:`${textColor}`}} className='font-bold text-4xl'>Capture</h1>
      </Link>
      <ul style={{color:`${textColor}`}} className='hidden md:flex'>
        <li className='p-4'>
            <Link href='/'>Home</Link>
        </li>
        <li className='p-4'>
            <Link href='/#gallery'>Gallery</Link>
        </li>
        <li className='p-4'>
            <Link href='/work'>Work</Link>
        </li>
        <li className='p-4'>
            <Link href='/contact'>Contact</Link>
        </li>
        </ul>  
       {/* {mobile button} */}
       <div onClick={toggle} className='md:hidden block cursor-pointer z-30 text-white'>
       {!nav ? 
        <AiOutlineMenu size={20} style={{color:`${textColor}`}}/> : <AiOutlineClose size={20} style={{color:`white`}}/> }
       </div>

       {/* mobile menu */}
        
       <div  className={nav ? 'absolute top-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300' : 
       
       'absolute top-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
        <ul>
        <li onClick={toggle} className='p-4 text-xl hover:text-gray-500'>
            <Link href='/'>Home</Link>
        </li>
        <li onClick={toggle} className='p-4 text-xl hover:text-gray-500'>
            <Link href='/#gallery'>Gallery</Link>
        </li>
        <li onClick={toggle} className='p-4 text-xl hover:text-gray-500'>
            <Link href='/work'>Work</Link>
        </li>
        <li onClick={toggle} className='p-4 text-xl hover:text-gray-500'>
            <Link href='/contact'>Contact</Link>
        </li>
        </ul>
       </div>
      </div>
    </div>
  )
}

export default Navbar