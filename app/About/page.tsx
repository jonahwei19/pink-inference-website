"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SubscribeForm from "@/components/SubscribeForm";
import Image from "next/image";
import Link from "next/link";
import { robotoMonoFont, montserratFont } from "@/utilities/fonts";

export default function AboutSection() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [controlRef, controlInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [differenceRef, differenceInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <main
      className={`flex min-h-screen flex-col items-center w-full bg-[#111111] text-white`}
    >
      <div
        className={`relative min-h-screen h-max flex flex-col gap-12 w-full p-6 sm:p-16 bg-center bg-cover font-thin ${robotoMonoFont.className}`}
      >
        <Link href={"/"} className='flex items-center gap-4'>
          <div className='relative h-12 w-12'>
            <Image src={"/logo.svg"} fill alt='logo' />
          </div>
          <h1
            className={`text-white font-thin text-2xl ${robotoMonoFont.className}`}
          >
            <span className='text-[#FE5DA8]'>EXPERIENT</span>
          </h1>
        </Link>
        <motion.h1
          className={`mb-16 m:mb-36 text-4xl sm:text-5xl md:text-6xl ${robotoMonoFont.className} font-thin mr-auto md:ml-12`}
          ref={headerRef}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Where Venture Studio Things <br className='hidden sm:block' /> Truly
          Happen
        </motion.h1>
        <div className='w-full md:px-12'>
          <motion.section
            className='flex flex-col gap-24'
            id='About'
            ref={contentRef}
            initial={{ y: 50, opacity: 0 }}
            animate={contentInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.5,
            }}
          >
            <div>
              <div className='relative w-fit'>
                <h2
                  className={`text-3xl sm:text-4xl mb-12 ${robotoMonoFont.className} font-thin`}
                >
                  Wetware For Control Applications
                </h2>
                <motion.hr
                  ref={controlRef}
                  initial={{ width: 0 }}
                  animate={controlInView ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: 1, ease: "backInOut" }}
                  className='absolute -bottom-2 left-0 h-[2px] bg-[#FE5DA8] border-none'
                ></motion.hr>
              </div>

              <p className={`${montserratFont.className} font-light`}>
                Pink Inference is focused on solving continuous control reinforcement learning problems.
                We aim to utilize the massive data and energy efficiency of biological neural networks
                for these ends.
              </p>
            </div>

            <div>
              <div className='relative w-fit'>
                <h2
                  className={`text-3xl sm:text-4xl mb-12 ${robotoMonoFont.className} font-thin`}
                >
                  How Pink Inference Differs
                </h2>
                <motion.hr
                  ref={differenceRef}
                  initial={{ width: 0 }}
                  animate={differenceInView ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: 1, ease: "backInOut" }}
                  className='absolute -bottom-2 left-0 h-[2px] bg-[#FE5DA8] border-none'
                ></motion.hr>
              </div>

              <p className={`${montserratFont.className} font-light`}>
                Current approaches to wetware systems focus on electrical
                interfaces with multielectrode arrays &#40;MEAs&#41;. However,
                these designs could be more flexible and challenging to scale,
                both in terms of cost and size constraints. <br />
                We&apos;ve sidestepped these flaws by developing a system that
                skips the electrode interface altogether. We are making wetware
                a computational reality.
              </p>
            </div>

            <SubscribeForm />
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
