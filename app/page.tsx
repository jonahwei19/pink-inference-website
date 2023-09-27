import Image from "next/image";
import Link from "next/link";
import { robotoMonoFont, montserratFont } from "@/utilities/fonts";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TopologicalBackground from "@/app/TopologicalBackground";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center w-full bg-[#111111] text-white`}
    >
      <TopologicalBackground />
      <h1
        className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl ${robotoMonoFont.className} font-bold`}
        data-aos='fade-up'
      >
        ALRT
      </h1>
    </main>
  );
}
