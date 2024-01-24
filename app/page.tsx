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
      style={{ height: '100vh' }}
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
            <span className='text-[#FE5DA8]'>PINK</span> INFERENCE
          </h1>
        </Link>

        <div className='relative w-[90vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] 3xl:w-[45vw] aspect-square sm:-top-36 md:-top-52 left-[40%] lg:left-[50%] xl:left-[60%]'>
          <Image
            className='overflow-visible object-cover'
            fill
            src={"/logo.svg"}
            alt='logo'
          />
        </div>

        <div className='w-full relative -top-8 sm:top-5 md:-top-16 md:-bottom-1/2 flex flex-col gap-2 sm:gap-8 font-thin text-white break-words'>
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${robotoMonoFont.className} font-thin `}
          >
            <p data-aos='fade-up'>
              The World&apos;s Most
            </p>
            <p data-aos='fade-up' data-aos-delay={1200}>
              Accessible MEA
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
              Accelerating cardiology & neurodegenerative diseases research, in vitro. 
            </p>  
            <div
              className={`text-sm sm:text-base md:text-2xl flex gap-4 sm:gap-12 flex-wrap lg:max-w-[60vw] ${robotoMonoFont.className} font-thin`}
            >
              <a
                href="https://getwaitlist.com/waitlist/13224"
                target="_blank"
                rel="noopener noreferrer"
                className='border-solid border-white border-spacing-3 border px-4 sm:px-7 py-2 rounded-md hover:opacity-70'
              >
                Join our Email List
              </a>
            </div>
          </div>
        </div>

        <hr className='absolute bottom-0 left-0 w-full border-8 border-[#FE5DA8]' />
      </div>
    </main>
  );
}