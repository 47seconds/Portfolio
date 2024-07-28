import React from 'react';
import { Link } from 'react-scroll';
import {motion} from 'framer-motion';
import { slideInFromRight } from '../utils/slideIn';

function Navbar() {
  return (
    <motion.div
    initial='hidden'
    animate='visible'
    variants={slideInFromRight(0.5)}
    className='fixed top-0 right-0 z-50 px-4 py-2'
    >
      <nav className='w-full'>
      <ul className='flex flex-row w-full h-10 items-center text-[12px] text-black border-white border-2 rounded-full bg-white'>
        <li><Link to='home' smooth={true} duration={500} className='mx-2 cursor-pointer'>Home</Link></li>
        <li><Link to='about' smooth={true} duration={500} className='mx-2 cursor-pointer'>About</Link></li>
        <li><Link to='skills' smooth={true} duration={500} className='mx-2 cursor-pointer'>Skills</Link></li>
        <li><Link to='projects' smooth={true} duration={500} className='mx-2 cursor-pointer'>Projects</Link></li>
        <li><Link to='experience' smooth={true} duration={500} className='mx-2 cursor-pointer'>Experience</Link></li>
        <li><Link to='contact' smooth={true} duration={500} className='mx-2 cursor-pointer'>Contact</Link></li>
      </ul>
    </nav>
    </motion.div>
  )
}

export default Navbar