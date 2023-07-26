import { useEffect } from 'react';
import Script from 'next/script';

export default function TopologicalBackground() {
  useEffect(() => {
    import('../scripts/canvas.js').then(({ default: startAnimation }) => {
      startAnimation();
    });
  }, []);

  return (
    <div className='absolute w-full h-full top-0 left-0 z-50 bg-blue-100'>
      <Script src='/animations/topological/assets/glslcanvas.min.js' strategy="beforeInteractive" />
      {/* Rest of your component */}
    </div>
  );
}
