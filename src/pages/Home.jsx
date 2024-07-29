import React, { useEffect, useRef, useState } from 'react';
import { FaReact } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import {BackgroundVideo} from '../components';
import HomeVideo from '../assets/videos/particals.webm';
import {motion} from 'framer-motion';
import {slideInFromTop, slideInFromLeft} from '../utils/slideIn';
import '../styles/applyGradient.scss';
import useIsMobile from '../hooks/useIsMobile';
import myResume from '../assets/documents/Vaibhav_Lakshkar.pdf'

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Adjust as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id='home' className='min-h-screen h-full w-full flex items-center justify-center cursor_section_home trail_home' ref={sectionRef}>
      <div className="min-h-screen relative flex flex-col w-full h-full justify-center">
        <BackgroundVideo videoSrc={HomeVideo} videotype='video/webm'/>

        {isVisible && (
          <>
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
        className='z-20 text-6xl text-white flex flex-col m-6 font-bold'
        >
          <span>
          Providing
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> the best </span></span>
          project experience
        </motion.div>
        
        <motion.div
        className='z-20 p-4 w-full pt-8'
        initial='hidden'
        animate='visible'
        variants={slideInFromLeft(1.5)}
        >
          <div className={`${isMobile ? `justify-center` : ``}  w-full text-gray-400 flex text-lg`}>
            <span className={`${isMobile ? `w-3/4` : `w-1/2`}`}>Building Scalable and Robust Applications from Concept to Completion. Crafting End-to-End Solutions with Precision and Passion</span>
          </div>
        </motion.div>

        <motion.div
        className='z-20 p-4 w-full pt-8'
        initial='hidden'
        animate='visible'
        variants={slideInFromLeft(2)}
        >
          <div className={`${isMobile ? `justify-center` : ``}  w-full text-gray-400 flex text-lg`}>
            <a href={myResume} download='Vaibhav_Lakshkar.pdf'>
              <button className='px-3 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full inline-flex items-center text-white'>Resumé <MdDownload/></button>
            </a>
          </div>
        </motion.div>
          </>
        )}
      </div>
    </section>
  )
}

export default Home