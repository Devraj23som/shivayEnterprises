'use client'
import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('none');
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
   const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      console.log('Scrolling down');
      if (currentScrollY > prevScrollY) {
        setScrollDirection('down');
        setVisible(true);
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection('up');
        setVisible(false);
      }
      
      // Remember current scroll position
      setPrevScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
//   useEffect(() => {
   
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [prevScrollY]);
  
  return { scrollDirection, visible };
}