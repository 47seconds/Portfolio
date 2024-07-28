import React from 'react';
import dnavideo from '../assets/dna.mp4';
import {BackgroundVideo} from '../components';

function About() {
  return (
    <section id='about' className='bg-white'>
      <div className="min-h-screen relative flex flex-col w-full h-full cursor_section_about">
      < BackgroundVideo videoSrc={dnavideo} videotype='video/mp4'/>
      </div>
    </section>
  )
}

export default About