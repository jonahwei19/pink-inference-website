import Script from "next/script";

export default function TopologicalBackground() {
  return (
    <div className='w-full h-full top-0 left-0 z-[-1]'>
      <canvas id="myCanvas" className='w-full h-full' />
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
    </div>
  );
}
