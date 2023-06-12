'use client'

import ParticlesWrapper from "@/components/ParticlesWrapper";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function Home() {

  const [ref, inView] = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.5, // Percentage of section visible in the viewport to trigger the animation
  });

  
  return (
    <main className="flex min-h-screen h-max flex-col gap-8 items-center p-8 md:p-16">
      <div className="w-full h-screen flex flex-col items-center gap-6">
        <header className='flex justify-between w-full'>
          <h1 className='text-4xl font-bold flex flex-col sm:flex-row gap-x-2'><span className='text-[#e06666]'>Pink</span>Inference</h1>
          <a 
            href="#contactForm"
            data-smooth-scroll
            className='w-max h-max bg-[#3772FF] text-[#f0f0f0] px-3 py-2 border border-solid
            rounded-tl-[1.4rem] rounded-tr-[0.3rem] rounded-bl-[0.5rem] rounded-br-[1.4rem] hover:opacity-70'>
              Let&apos;s Connect</a>
        </header>

        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative aspect-square w-36 animate-[spin_25s_linear_infinite]">
          <Image src={"/pink-inference-icon.png"} fill alt="Pink Inference Logo" />
        </motion.section>

        <section className='w-full flex flex-col gap-4'>
          <motion.h3
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='text-5xl md:text-6xl text-center'><span className="font-bold">Scalable &amp; Powerful</span> Wetware Computing</motion.h3>
          <motion.p
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          className="text-center text-lg md:text-2xl">Developing wetware architecture for the next generation of computing and neuropharmacology.</motion.p>
        </section>
      </div>

      <motion.section
          ref={ref} 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-[5rem] bg-gradient-to-br from-[#f0f0f0] to-[#ffffff] shadow-lg w-full p-10">
          Problem Statement and Solution
      </motion.section>

      <motion.section
          ref={ref}  
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-[5rem] bg-gradient-to-br from-[#f0f0f0] to-[#ffffff] shadow-lg w-full p-10">
          Key Features and Benefits
      </motion.section>

      <motion.section
          ref={ref}  
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-[5rem] bg-gradient-to-br from-[#f0f0f0] to-[#ffffff] shadow-lg w-full p-10">
          Team Overview
      </motion.section>

      <motion.section
          id="contactForm"
          ref={ref}  
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-[5rem] bg-gradient-to-br from-[#f0f0f0] to-[#ffffff] shadow-lg w-full p-10">
          Contact Form
      </motion.section>

      <hr className="border border-opacity-10 border-solid border-black w-full"/>

      <footer className="flex flex-col justify-around items-center">
        <Image src={"/pink-inference-icon.png"} width={30} height={30} alt="Pink Inference Logo" />
        <p>&copy; 2023 Pink Inference</p>
        <p>Designed and Built by Hunter Samoy</p>
      </footer>

      <ParticlesWrapper />
    </main>
  )
}

