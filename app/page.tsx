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
            <span className='text-[#FE5DA8]'>EXPERIEST</span>
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
              An Experential<br />
            </p>
            <p data-aos='fade-up' data-aos-delay={1200}>
               Venture Studio 
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
              Building Things That Should Exist
            </p>
            <div
              className={`text-sm sm:text-base md:text-2xl flex gap-4 sm:gap-12 flex-wrap lg:max-w-[60vw] ${robotoMonoFont.className} font-thin`}
            >
              <Link
                href={"/About"}
                className='border-solid border-white border-spacing-3 border px-4 sm:px-7 py-2 rounded-md hover:opacity-70'
              >
                ABOUT
              </Link>
              <Link
                href='/TeamSection'
                className='border-solid border-white border-spacing-3 border px-4 sm:px-7 py-2 rounded-md hover:opacity-70'
              >
                TEAM
              </Link>
              <Link
                href={"/Investors"}
                className=' border-solid border-white border-spacing-3 border px-4 sm:px-7 py-2 rounded-md hover:opacity-70'
              >
                INVESTORS
              </Link>
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
              Why EXPERIEST?
            </h1>
            <p
              className={`font-light text-sm ${montserratFont.className} font-light`}
            >
              We are vessels of experience, here until we are not. EXPERIEST is a collective
              focused on capatilizing on that. We use our existance for scalable creation...
              
            </p>
          </div>
        </div>

        <div className='w-screen h-8 bg-cover bg-center bg-topological-2' />

        <div className='flex flex-col w-full px-[15%] sm:px-[25%]'>
          <div className='flex flex-col gap-8'>
            <h1
              className={`font-thin text-4xl ${robotoMonoFont.className} font-thin`}
            >
              Why Us?
            </h1>
            <p
              className={`font-light text-sm ${montserratFont.className} font-light`}
            >
              Because we are super cool.
            </p>
            <p
              className={`font-light text-sm ${montserratFont.className} font-light`}
            >
            </p>
          </div>
        </div>
      </div>

      <footer
        className={`flex flex-col gap-2 justify-around items-center my-8 ${robotoMonoFont.className} font-light`}
      >
        <Image
          src={"/logo.svg"}
          width={48}
          height={48}
          alt='Pink Inference Logo'
        />
        <p>&copy; 2023 Pink Inference</p>
        <p>Designed and Built by Hunter Samoy</p>
      </footer>
    </main>
  );
}
