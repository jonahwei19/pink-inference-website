import { useEffect } from 'react';
import startAnimation from '../scripts/canvas.js';
import { frag } from '../scripts/frag.js';

export default function TopologicalBackground() {
  useEffect(() => {
    startAnimation(frag);
  }, []);

  return (
    <div id="hero" className='absolute w-full h-full top-0 left-0 z-50 bg-blue-100'>
      {/* You can add more elements or components here if needed */}
    </div>
  );
}
