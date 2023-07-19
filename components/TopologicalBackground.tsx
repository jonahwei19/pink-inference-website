import "../public/animations/topological/style.css";
import Script from "next/script";

export default function TopologicalBackground() {
  return (
    <div className='w-full h-full'>
      <Script src='/animations/includes.js' strategy='beforeInteractive' />
      <Script src='/animations/canvas.js' strategy='beforeInteractive' />
      <Script src='/animations/frag.js' strategy='beforeInteractive' />
      {/* Rest of your component */}
    </div>
  );
}
