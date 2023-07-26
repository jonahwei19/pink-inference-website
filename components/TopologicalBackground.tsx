import { useEffect } from 'react';

export default function TopologicalBackground() {
  useEffect(() => {
    const startAnimation = require('../scripts/canvas.js');

    startAnimation('../scripts/frag.js')
      .then(() => {
        console.log('Animation started successfully.');
      })
      .catch((error) => {
        console.error('Failed to start animation:', error);
      });
  }, []);

  return (
    <div className='absolute w-full h-full top-0 left-0 z-50 bg-blue-100'>
      {/* Rest of your component */}
    </div>
  );
}
