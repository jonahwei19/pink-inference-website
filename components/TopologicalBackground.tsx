import Script from "next/script";
import { useEffect } from 'react';
import startAnimation from '././public/animations/topological/canvas.js';
import { frag } from '././public/animations/topological/frag.js';

export default function TopologicalBackground() {
  useEffect(() => {
    startAnimation(frag);
  }, []);

  return (
    <div className='absolute w-full h-full top-0 left-0 z-50 bg-blue-100'>
      <Script
        src='/animations/topological/includes.js'
        strategy='beforeInteractive'
      />
      <Script
        src='/animations/topological/assets/glslcanvas.min.js'
        strategy='beforeInteractive'
      />
      {/* Rest of your component */}
    </div>
  );
}
