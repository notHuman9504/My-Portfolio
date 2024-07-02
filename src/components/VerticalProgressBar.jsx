// components/ProgressBar.js

import { useState, useEffect, useRef } from 'react';

const ProgressBar = ({ targetRef ,topic}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (targetRef.current) { 
      const scrollTop = window.scrollY -300;
      const elementTop = targetRef.current.offsetTop;
      const elementHeight = targetRef.current.clientHeight;
      const windowHeight = window.innerHeight;

      const scrollFraction = (scrollTop - elementTop + windowHeight) / (elementHeight + windowHeight);
      const scrollPercentage = Math.min(Math.max(scrollFraction * 100, 0), 100);
      setScrollProgress(scrollPercentage);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="progressContainer">
      <div
        className="progressBar"
        style={{ height: `${scrollProgress}%` }}
      />
      <div className='flex justify-center relative'>
      
      <div className='absolute right-12 w-96 text-right text-3xl  top-[-6px]'>{topic}</div>
      <div className='w-8 h-8 border-8 border-[#6a6a6a] bg-[white] rounded-full'></div>
      </div>
    </div>
  );
};

export default ProgressBar;
