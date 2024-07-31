import React, {useState, useEffect, useRef} from 'react';
import {useIsMobile} from '../hooks/useIsMobile';
import {motion} from 'framer-motion';
import { slideInFromTop } from '../utils/slideIn';
import { BackgroundVideo } from '../components';
import {HomeVideo} from '../assets/videos/particals.webm';

function Projects() {
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
    <section id='projects'>
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
            Full Stack Developer
          </span>
        </motion.div>
          </>
        )}
        </div>
    </section>
  )
}

export default Projects