"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MemberDisplay from "@/components/MemberDisplay";
import Image from "next/image";
import Link from "next/link";
import { robotoMonoFont, montserratFont } from "@/utilities/fonts";

export default function TeamSection() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [ourTeamRef, ourTeamInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [foundersRef, foundersInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [advisorsRef, advisorsInView] = useInView({
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
            <span className='text-[#FE5DA8]'>PINK</span> INFERENCE
          </h1>
        </Link>
        <motion.h1
          className='mb-16 m:mb-36 text-6xl lg:text-7xl font-thin w-max mr-auto md:ml-12'
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
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.5,
              when: "beforeChildren",
            }}
          >
            <div className='relative w-max'>
              <h2
                className={`text-3xl sm:text-4xl mb-12 ${robotoMonoFont.className} font-thin`}
              >
                Founders
              </h2>
              <motion.hr
                ref={foundersRef}
                initial={{ width: 0 }}
                animate={foundersInView ? { width: "100%" } : {}}
                transition={{ duration: 1, delay: 0.5, ease: "backInOut" }}
                className='absolute -bottom-2 left-0 h-[2px] bg-[#FE5DA8] border-none'
              ></motion.hr>
            </div>

            <div
              className={`flex justify-around flex-wrap w-full px-12 gap-10 mb-12 ${montserratFont.className} font-light`}
            >
              <MemberDisplay
                name='Michael Loftus'
                role='CSO'
                image='/Michael-Loftus-Pic.jpg'
                linkedIn={
                  "https://www.google.com/url?q=https://www.linkedin.com/in/michael-loftus-6376531a3/&sa=D&source=docs&ust=1689786987788504&usg=AOvVaw2Ku3dUq-vFR88LdQS3lAE8"
                }
              />
              <MemberDisplay
                name='Jonah Weinbaum'
                role='CEO'
                image='/Jonah-Weinbaum-Pic.jpg'
                linkedIn={
                  "https://www.google.com/url?q=https://www.linkedin.com/in/weinbaumjonah/&sa=D&source=docs&ust=1689786987788323&usg=AOvVaw2tngPMkzzrqKf5xVCb1RW5"
                }
              />
              <MemberDisplay
                name='Zan Huang'
                role='Scientist I'
                image='/Zan-Huang-Pic.png'
                linkedIn={
                  "https://www.google.com/url?q=https://www.linkedin.com/in/zan-huang-36a69a110/&sa=D&source=docs&ust=1689786987788563&usg=AOvVaw0V_rHlgLn_CAkCScVmvo47"
                }
              />
            </div>

            <div className='relative w-max'>
              <h2
                className={`text-3xl sm:text-4xl mb-12 ${robotoMonoFont.className} font-thin`}
              >
                Advisors
              </h2>
              <motion.hr
                ref={advisorsRef}
                initial={{ width: 0 }}
                animate={advisorsInView ? { width: "100%" } : {}}
                transition={{ duration: 1, delay: 0.5, ease: "backInOut" }}
                className='absolute -bottom-2 left-0 h-[2px] bg-[#FE5DA8] border-none'
              ></motion.hr>
            </div>

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
