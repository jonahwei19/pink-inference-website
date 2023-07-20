"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MemberDisplay from "@/components/MemberDisplay";
import Image from "next/image";
import Link from "next/link";
import { robotoMonoFont, montserratFont } from "@/utilities/fonts";

export default function AboutSection() {
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
          className='mb-16 m:mb-36 text-4xl sm:text-5xl md:text-6xl ${robotoMonoFont.className} font-thin tracking-tighter w-max mr-auto md:ml-12'
          ref={headerRef}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Where Biological Neurons <br /> Truly Shine
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
            }}
          >
            <div className='relative w-max'>
              <h2
                className={`text-3xl mb-12 ${montserratFont.className} font-thin`}
              >
                Wetware For Control Applications
              </h2>
              <motion.hr
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.3, delay: 1, ease: "backInOut" }}
                className='absolute -bottom-2 left-0 h-[2px] bg-[#FE5DA8] border-none'
              ></motion.hr>
            </div>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate eum ipsum exercitationem architecto ipsam, fugit error
              nam nesciunt temporibus sit ex consequatur, dignissimos nobis
              tempore iste ab cum explicabo magni!
            </p>

            <div className='relative w-max'>
              <h2
                className={`text-3xl mb-12 ${montserratFont.className} font-thin`}
              >
                How Pink Inference Differs
              </h2>
              <motion.hr
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.3, delay: 1.5, ease: "backInOut" }}
                className='absolute -bottom-2 left-0 h-[2px] bg-[#FE5DA8] border-none'
              ></motion.hr>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis fugiat eveniet cumque saepe ab nisi soluta debitis sunt
              atque numquam dicta facere quis tempore ad at, quidem praesentium.
              Similique, nisi?
            </p>
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
