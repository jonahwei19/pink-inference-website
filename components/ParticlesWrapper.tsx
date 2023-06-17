'use client'

import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { Fahkwang } from "next/font/google";

export default function ParticlesWrapper() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Initialize the tsParticles instance
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // tsParticles container loaded
  }, []);

  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setMobile(!isMobile);
    };

    handleResize(); // Check on initial load

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Particles
      className="-z-10 w-full h-full"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // Default options
        background: {
          color: "#FFFFFF",
        },
        fpsLimit: mobile ? 60 : 120,
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: mobile,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 3,
            },
          },
        },
        particles: {
          color: {
            value: "#FD5DA8",
          },
          links: {
            color: "#000000",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: .4,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
        fullScreen: {
          enable: false,
        },
      }}
    />
  );
}
