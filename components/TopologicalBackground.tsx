import { useEffect } from 'react';
import Script from "next/script";

export default function TopologicalBackground() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/animations/topological/canvas.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className='w-full h-full top-0 left-0 z-[-1]'>
      <Script
        src='/animations/topological/assets/glslcanvas.min.js'
        strategy='beforeInteractive'
      />
      <Script
        src='/animations/topological/includes.js'
        strategy='beforeInteractive'
      />
      <Script
        src='/animations/topological/frag.js'
        strategy='beforeInteractive'
      />
      <canvas id="yourCanvasId" />
    </div>
  );
}
