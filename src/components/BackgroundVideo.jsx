import React from 'react';

function BackgroundVideo({videoSrc, videotype='video/mp4'}) {
  return (
    <video autoPlay muted loop className='absolute top-0 left-0 w-full h-full object-cover z-10'>
        <source src={videoSrc} type={videotype}/>
        Your browser dows not support the video tag.
    </video>
  )
}

export default BackgroundVideo