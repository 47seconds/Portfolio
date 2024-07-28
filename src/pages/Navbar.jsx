import React, {useState} from 'react';
import { Link } from 'react-scroll';
import {motion} from 'framer-motion';
import { slideInFromRight } from '../utils/slideIn';
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { menuOpen, menuClose } from '../utils/navbarMenu';

function Navbar() {
  const [status, setStatus] = useState(false);

  const handleMenu = () => {
    if (status) {
      
    }
  }

  return (
    <motion.div
  initial='hidden'
  animate='visible'
  variants={slideInFromRight(0.5)}
  className='fixed top-0 right-0 z-50 px-4 py-2'
  >
    <nav className='w-full'>
      {status && (
        <motion.ul
        className='flex flex-row w-full h-10 items-center text-[12px] text-black border-white border-2 rounded-full bg-white'
        initial='hidden'
        animate='visible'
        variants={menuClose(0.5)}
        >
          <li><Link to='home' smooth={true} duration={500} className='mx-2 cursor-pointer'>Home</Link></li>
          <li><Link to='about' smooth={true} duration={500} className='mx-2 cursor-pointer'>About</Link></li>
          <li><Link to='skills' smooth={true} duration={500} className='mx-2 cursor-pointer'>Skills</Link></li>
          <li><Link to='projects' smooth={true} duration={500} className='mx-2 cursor-pointer'>Projects</Link></li>
          <li><Link to='experience' smooth={true} duration={500} className='mx-2 cursor-pointer'>Experience</Link></li>
          <li><Link to='contact' smooth={true} duration={500} className='mx-2 cursor-pointer'>Contact</Link></li>
          {/* <button className='text-white bg-purple-500 text-[30px] p-1 rounded-full '><CiMenuFries/></button> */}
          <li><button className='text-white bg-purple-500 text-[30px] p-1 rounded-full' onClick={() => setStatus(!status)}><RxCross2/></button></li>
        </motion.ul>
      )}
      {!status && (
        <motion.button
        className='text-white bg-purple-500 text-[30px] p-1 rounded-full'
        initial='hidden'
        animate='visible'
        variants={menuOpen(0.5)}
        onClick={() => setStatus(!status)}
        >
          <TiThMenu/>
        </motion.button>
      )}
    </nav>
  </motion.div>
  )
}

export default Navbar