"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MemberDisplay from "@/components/MemberDisplay";
import Image from "next/image";
import Link from "next/link";

export default function TeamSection() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });

  const [ourTeamRef, ourTeamInView] = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });

  return (
    <main className='flex min-h-screen flex-col items-center mx-auto w-full relative'>
      <header className='flex justify-between w-full px-6 py-4 sm:px-16 sm:py-12'>
        <Link
          href={"/"}
          className='text-4xl font-bold flex flex-col sm:flex-row gap-x-2'
        >
          <span className='text-[#FD5DA8]'>Pink</span>Inference
        </Link>
      </header>

      <motion.h1
        className='mb-36 text-6xl w-max mr-auto md:ml-12 tracking-[-0.075em]'
        ref={headerRef}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        OUR TEAM
      </motion.h1>

      <div className='w-full md:px-12'>
        <motion.section
          id='About'
          ref={ourTeamRef}
          initial={{ y: 50, opacity: 0 }}
          animate={ourTeamInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        >
          <h2 className='text-2xl mb-4'>Founders</h2>
          <hr className='border-black w-full mb-8' />

          <div className='flex justify-around flex-wrap w-full px-12 gap-10 mb-12'>
            <MemberDisplay
              name='Michael Loftus'
              role='Co-founder (CSO)'
              image='/Michael-Loftus-Pic.jpg'
            />
            <MemberDisplay
              name='Jonah Weinbaum'
              role='Co-founder (CEO)'
              image='/Jonah-Weinbaum-Pic.jpg'
            />
            <MemberDisplay
              name='Zan Huang'
              role='Co-founder (CTO)'
              image='/Zan-Huang-Pic.png'
            />
          </div>

          <h2 className='text-2xl mb-4'>Advisors</h2>
          <hr className='border-black w-full mb-8' />

          <div className='flex justify-around w-full px-12 gap-10'>
            <MemberDisplay
              name='Sami Barmada'
              role='Science Advisor'
              image='/Sami-Barmada-Pic.jpg'
            />
          </div>
        </motion.section>
      </div>
      <div className={`h-[30vh] w-full`} />

      <hr className='border border-opacity-10 border-solid border-black w-full' />

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
