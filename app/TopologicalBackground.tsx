import { shaderSource } from "./frag.js";

// const canvas = document.createElement("canvas");
// const sandbox = new GlslCanvas(canvas);

// document.getElementById("hero").appendChild(canvas);

// sandbox.load(frag);
// sandbox.setUniform("seed", Math.random());

// const sizer = function () {
//   const ww = window.innerWidth;
//   const wh = window.innerHeight;
//   const dpi = window.devicePixelRatio;
//   const s = Math.max(ww, wh);

//   canvas.width = s * dpi;
//   canvas.height = s * dpi;
//   canvas.style.width = s + "px";
//   canvas.style.height = s + "px";
// };

// sizer();

// window.addEventListener("resize", sizer);

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

import { FC, useEffect, useRef, useState } from "react";
import GlslCanvas from "glslCanvas";

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
    const node = canvasRef.current;
    const container = containerRef.current;
    const sandbox = new GlslCanvas(canvasRef.current);
    sandbox.load(props.frag);
    
    for (let k in props.setUniforms) {
      sandbox.setUniform(k, props.setUniforms[k]);
    }

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
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};
