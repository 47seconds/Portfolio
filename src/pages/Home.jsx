import React from 'react';
import {MY_SUMMARY} from '../constants';
import { FaReact } from "react-icons/fa";
import {BackgroundVideo} from '../components';
import HomeVideo from '../assets/particals.webm';
import {motion} from 'framer-motion';
import {slideInFromTop, slideInFromLeft} from '../utils/slideIn';
import '../styles/applyGradient.scss';
import useIsMobile from '../hooks/useIsMobile';

function Home() {
  const isMobile = useIsMobile();

  return (
    <section id='home' className='min-h-screen h-full w-full flex items-center justify-center cursor_section_home trail_home'>
      <div className="min-h-screen relative flex flex-col w-full h-full justify-center">
        <BackgroundVideo videoSrc={HomeVideo} videotype='video/webm'/>

        <motion.div
        className="z-20 p-4"
        initial="hidden"
        animate="visible"
        variants={slideInFromTop}
        >
          <span className='inline-flex rounded-3xl p-2 border-2 border-white shadow-md apply-gradient text-[12px] items-center'>
          <FaReact className='mr-2 text-purple-400'/> Full Stack Developer
          </span>
        </motion.div>
        <motion.div 
        initial='hidden'
        animate='visible'
        variants={slideInFromLeft(1)}
        className='z-20 text-6xl text-white flex flex-col gap-6 m-6'
        >
          Providing
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
            the best
            </span>
          project experience
        </motion.div>
        
        <motion.div
        className='z-20 p-4 w-full pt-8'
        initial='hidden'
        animate='visible'
        variants={slideInFromLeft(1.5)}
        >
          <div className={`${isMobile ? `justify-center` : ``}  w-full text-gray-400 flex text-lg`}>
            <span className={`${isMobile ? `w-3/4 text-justify` : `w-1/2`}`}>Building Scalable and Robust Applications from Concept to Completion. Crafting End-to-End Solutions with Precision and Passion</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home