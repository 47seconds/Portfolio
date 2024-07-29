import React, { useEffect, useRef, useState } from 'react';
import dnavideo from '../assets/videos/particals.webm';
import useIsMobile from '../hooks/useIsMobile';
import { BackgroundVideo } from '../components';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromTop } from '../utils/slideIn';
import {MY_SUMMARY, ME} from '../constants';

function About() {
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
    <section id='about' className='bg-white' ref={sectionRef}>
      <div className="min-h-screen relative flex flex-col w-full h-full cursor_section_about">
        <BackgroundVideo videoSrc={dnavideo} videotype='video/webm' />

        // page only animate when in view
        {isVisible && (<>
            <motion.div
              className="z-20 p-4 w-full flex justify-center h-full items-center"
              initial="hidden"
              animate="visible"
              variants={slideInFromTop}
            >
              <span className={`rounded-3xl ${(isMobile) ? `w-3/4` : `w-1/2`} p-2 shadow-md text-white items-center justify-center font-bold text-3xl`}>
                I know some
                <span className='bg-clip-text text-transparent items-center bg-gradient-to-l from-purple-500 to-cyan-400'> ideas </span>
                are meant to be developed into
                <span className='bg-clip-text text-transparent items-center bg-gradient-to-r from-purple-500 to-cyan-400'> innovative </span>
                solutions
              </span>
            </motion.div>

            <motion.div
            className='z-20 ml-4 mt-5 w-full flex'
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(1)}
            >
              <div className={`text-6xl text-gray-300 font-bold pl-4 ${(isMobile) ? `w-3/4` : `w-1/2`} `}>
              {ME.name}
              </div>
            </motion.div>

            <motion.div
            className='z-20 ml-4 mt-5 w-full flex'
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(1)}
            >
              <div className={`apply-gradient pl-4 ${(isMobile) ? `w-3/4` : `w-1/2`} `}>
              <i>~ {MY_SUMMARY}</i>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}

export default About;
