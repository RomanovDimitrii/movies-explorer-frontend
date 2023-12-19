import { useState, useEffect } from 'react';

import { lARGE_SCREEN_SIZE, MEDIUM_SCREEN_SIZE } from './constants';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = event => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenMd: width >= MEDIUM_SCREEN_SIZE,
    isScreenLg: width >= lARGE_SCREEN_SIZE
  };
};
