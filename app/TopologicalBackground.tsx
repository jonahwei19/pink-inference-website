import { shaderSource } from "./frag.js";
import { FC, useEffect, useRef, useState } from "react";

export default function TopologicalBackground() {
  const [randomState, setRandomState] = useState(0);

  useEffect(() => {
    setRandomState(Math.random());
  }, [setRandomState])

  return (
    <div id='hero'>
      <ShaderCanvas frag={shaderSource} setUniforms={{seed: randomState.toString()}} />
    </div>
  );
}

interface ShaderCanvasProps {
  frag: string;
  setUniforms?: { [key: string]: string };
}

export const ShaderCanvas: FC<ShaderCanvasProps> = (props): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const resizer = (
    canvas: HTMLCanvasElement,
    container: HTMLDivElement
  ): void => {
    canvas.width = container.clientWidth + window.devicePixelRatio;
    canvas.height = container.clientHeight + window.devicePixelRatio;
    canvas.style.width = container.clientWidth + "px";
    canvas.style.height = container.clientHeight + "px";
  };

  useEffect(() => {
    if(typeof window === 'undefined') return

    const createAndUpdateCanvas = async () => {
      // We need to import glslCanvas only on the client side since
      // it breaks with a window is undefined issue when being rendered
      // on the server. 

      // We utilize lazy loading for external libraries as discussed here:
      // https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#with-external-libraries
      // This fixes the window issue without causing any hydration problems.
      const GlslCanvas = (await import('glslCanvas')).default;

      const sandbox = new GlslCanvas(canvasRef.current);
      sandbox.load(props.frag);
      
      for (let k in props.setUniforms) {
        sandbox.setUniform(k, props.setUniforms[k]);
      }
    }

    const node = canvasRef.current;
    const container = containerRef.current;

    createAndUpdateCanvas();

    resizer(node!, container!);

    const handler = () => {
      if (
        node!.clientWidth !== container!.clientWidth ||
        node!.clientHeight !== container!.clientHeight
      )
        resizer(canvasRef.current!, containerRef.current!);
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, [props.frag, props.setUniforms]);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};
