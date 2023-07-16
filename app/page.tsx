"use client";

import ParticlesWrapper from "@/components/ParticlesWrapper";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const HEADER_DESCRIPTION =
  "Wetware Architecture for the Next Generation of Robotics.";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center w-full bg-[#111111] text-white`}
    >
      <div className='h-screen relative w-full bg-topological p-6 sm:p-16 bg-center bg-cover'>
        <div className='flex items-center gap-4 top-0 left-0'>
          <div className='relative h-12 w-12'>
            <Image src={"/logo_thick.svg"} fill alt='logo' />
          </div>
          <h1 className='text-white font-thin text-2xl'>
            <span className='text-[#FE5DA8]'>PINK</span> INFERENCE
          </h1>
        </div>

        <div className='relative md:w-[800px] lg:w-[900px] aspect-square sm:-top-10 md:-top-52 lg:-top-80 left-[40%] sm:left-[35%] xl:left-[45%] 2xl:left-[50%]'>
          <Image fill src={"/logo.svg"} alt='logo' />
        </div>

        <div className='w-full relative -top-16 md:-top-80 flex flex-col gap-8 font-thin text-white break-words'>
          <h1 className='text-[32px] md:text-[64px]'>
            SCALABLE <br />
            & POWERFUL <br />
            WETWARE COMPUTING
          </h1>
          <p className='text-sm md:text-2xl'>
            Wetware architecture for the next generation of robotics
          </p>
          <div className='text-sm md:text-2xl flex gap-4 sm:gap-12 flex-wrap'>
            <button className='border-solid border-white border-spacing-3 border px-4 sm:px-7 py-2 rounded-md hover:opacity-70'>
              ABOUT
            </button>
            <button className='border-solid border-white border-spacing-3 border px-4 sm:px-7 py-2 rounded-md hover:opacity-70'>
              TEAM
            </button>
            <button className='border-solid border-white border-spacing-3 border px-4 sm:px-7 py-2 rounded-md hover:opacity-70'>
              INVESTORS
            </button>
          </div>
        </div>
      </div>

      <footer className='flex flex-col justify-around items-center my-8'>
        <Image
          src={"/pink-inference-icon.png"}
          width={30}
          height={30}
          alt='Pink Inference Logo'
        />
        <p>&copy; 2023 Pink Inference</p>
        <p>Designed and Built by Hunter Samoy</p>
      </footer>
    </main>
  );
}
