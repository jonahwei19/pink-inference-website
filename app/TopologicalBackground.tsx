import { useEffect } from 'react';

export default function TopologicalBackground() {
  useEffect(() => {
    import('./canvas.js')
      .then((module) => {
        const startAnimation = module.default;

        return startAnimation('./frag.js');
      })
      .then(() => {
        console.log('Animation started successfully.');
      })
      .catch((error: any) => {
        console.error('Failed to start animation:', error);
      });
  }, []);

  return (
    <div id="hero" className='absolute w-full h-full top-0 left-0 z-50 bg-blue-100'>
      {/* Rest of your component */}
    </div>
  );
}
