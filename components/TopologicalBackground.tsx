import "../public/animations/topological/style.css";
import Script from "next/script";

export default function TopologicalBackground() {
  return (
    <div className='absolute w-full h-full top-0 left-0'>
      <Script src='/animations/includes.js' strategy='beforeInteractive' />
      <Script src='/animations/canvas.js' strategy='beforeInteractive' />
      <Script src='/animations/frag.js' strategy='beforeInteractive' />
      {/* Rest of your component */}
    </div>
  );
}
