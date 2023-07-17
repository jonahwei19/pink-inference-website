"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MemberDisplay from "@/components/MemberDisplay";
import Image from "next/image";
import Link from "next/link";
import { robotoMonoFont, montserratFont } from "@/utilities/fonts";

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
    <main
      className={`flex min-h-screen flex-col items-center w-full bg-[#111111] text-white`}
    >
      <div
        className={`relative min-h-screen h-max flex flex-col gap-12 w-full bg-topological p-6 sm:p-16 bg-center bg-cover font-thin ${robotoMonoFont.className}`}
      >
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
            <h2
              className={`text-3xl mb-12 ${montserratFont.className} font-thin`}
            >
              Founders
            </h2>

            <div
              className={`flex justify-around flex-wrap w-full px-12 gap-10 mb-12 ${montserratFont.className} font-light`}
            >
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

            <h2
              className={`text-3xl mb-12 ${montserratFont.className} font-thin`}
            >
              Advisors
            </h2>

            <div
              className={`flex justify-around w-full px-12 gap-10 ${montserratFont.className}`}
            >
              <MemberDisplay
                name='Sami Barmada'
                role='Science Advisor'
                image='/Sami-Barmada-Pic.jpg'
              />
            </div>
          </motion.section>
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
