import { useEffect } from 'react';

export default function TopologicalBackground() {
  useEffect(() => {
    import('../scripts/canvas.js').then(({ default: startAnimation }) => {
      startAnimation();
    });
  }, []);

  return (
    <div id="hero" className='absolute w-full h-full top-0 left-0 z-50 bg-blue-100'>
      <script src='/animations/topological/assets/glslcanvas.min.js' />
      {/* Rest of your component */}
    </div>
  );
}
