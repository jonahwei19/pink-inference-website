'use client'

import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e: any) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
        });
      }
    };

    const links = document.querySelectorAll('a[data-smooth-scroll]');
    links.forEach((link) => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return null;
};

export default SmoothScroll;
