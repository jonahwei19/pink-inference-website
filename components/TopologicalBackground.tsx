import Script from "next/script";

export default function TopologicalBackground() {
  return (
    <div className='absolute w-full h-full top-0 left-0 z-50 bg-blue-100'>
      <Script
        src='/animations/topological/assets/glslcanvas.min.js'
        strategy='beforeInteractive'
      />
      <Script
        src='/animations/topological/includes.js'
        strategy='beforeInteractive'
      />
      <Script
        src='/animations/topological/canvas.js'
        strategy='beforeInteractive'
      />
      <Script
        src='/animations/topological/frag.js'
        strategy='beforeInteractive'
      />
      <canvas id="yourCanvasId" />
      {/* Rest of your component */}
    </div>
  );
}
