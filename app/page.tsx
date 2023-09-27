"use client";

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
      className={`flex min-h-screen flex-col items-center w-full bg-[#111111] text-white`}
    >
      <TopologicalBackground />
      <div className='relative h-screen flex flex-col w-full p-6 sm:p-16 bg-center bg-cover'>
        <Link href={"/"} className='flex items-center gap-4'>
          <div className='relative h-12 w-12'>
            <Image src={"/logo.svg"} fill alt='logo' />
          </div>
          <h1
            className={`text-white font-thin text-2xl ${robotoMonoFont.className}`}
          >

        <div className='relative w-[90vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] 3xl:w-[45vw] aspect-square sm:-top-36 md:-top-52 left-[40%] lg:left-[50%] xl:left-[60%]'>
        </div>

        <div className='w-full relative -top-8 sm:top-5 md:-top-16 md:-bottom-1/2 flex flex-col gap-2 sm:gap-8 font-thin text-white break-words'>
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${robotoMonoFont.className} font-thin `}
          >
            <p data-aos='fade-up'>
              ALRT
            </p>
          </h1>
          <div
            data-aos='fade-right'
            data-aos-delay={2400}
            className='flex flex-col gap-2 sm:gap-8'
          >
            <p
              className={`text-sm sm:text-base md:text-2xl ${montserratFont.className} font-light lg:max-w-[60vw]`}
            >
            </p>
            <div
              className={`text-sm sm:text-base md:text-2xl flex gap-4 sm:gap-12 flex-wrap lg:max-w-[60vw] ${robotoMonoFont.className} font-thin`}
            >
            </div>
          </div>
        </div>

        <hr className='absolute bottom-0 left-0 w-full border-8 border-[#FE5DA8]' />
      </div>

      <div className='flex flex-col w-full py-10 gap-12'>
        <div className='flex flex-col w-full px-[15%] sm:px-[25%]'>
          <div className='flex flex-col gap-8'>
            <div className='relative h-28 w-28 md:h-40 md:w-40 bg-[#FE5DA8]'>
              <Image
                className='p-4'
                src={"/wetware.png"}
                fill
                alt='wetware symbol'
              />
            </div>
            <h1
              className={`font-thin text-4xl ${robotoMonoFont.className} font-thin`}
            >
              What is wetware?
            </h1>
            <p
              className={`font-light text-sm ${montserratFont.className} font-light`}
            >
              Wetware, a term coined by science fiction novelist Rudy Rucker in
              his titular novel, is a blanket term referring to the utilization
              of biological neurons for computation, sensory tasks, and medical
              applications. Wetware describes the interface used to stimulate
              and record activity of in-vitro neuronal networks.
            </p>
          </div>
        </div>

        <div className='w-screen h-8 bg-cover bg-center bg-topological-2' />
    </main>
  );
}
