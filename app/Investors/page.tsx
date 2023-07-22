"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MemberDisplay from "@/components/MemberDisplay";
import Image from "next/image";
import Link from "next/link";
import { robotoMonoFont, montserratFont } from "@/utilities/fonts";

export default function InvestorSection() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [currentRef, currentInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [futureRef, futureInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [invisibleRef, invisibleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [emergentRef, emergentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [sparkRef, sparkInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
          className={`mb-16 m:mb-36 text-4xl sm:text-5xl md:text-6xl ${robotoMonoFont.className} font-thin mr-auto md:ml-12`}
          ref={headerRef}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Join Our Vision
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
                  className={`text-3xl mb-24 ${montserratFont.className} font-thin`}
                >
                  Current Investors
                </h2>
                <motion.hr
                  ref={currentRef}
                  initial={{ width: 0 }}
                  animate={currentInView ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: 1, ease: "backInOut" }}
                  className='absolute -bottom-2 left-0 h-[2px] bg-[#FE5DA8] border-none'
                ></motion.hr>
              </div>

              <div className='flex flex-col  gap-24 w-full xl:px-36'>
                <motion.div
                  ref={invisibleRef}
                  initial={{ x: 100 }}
                  animate={invisibleInView ? { x: 0 } : {}}
                  transition={{ duration: 1, ease: "backInOut" }}
                  className='flex gap-8 w-full lg:w-[80%] 2xl:w-[60%]'
                >
                  <div className='relative w-1/3'>
                    <Image
                      className='object-contain object-top'
                      fill
                      alt='1517 Fund'
                      src={"/1517_logo.svg"}
                    />
                  </div>
                  <div className='flex flex-col gap-12 w-2/3'>
                    <div className='flex flex-col'>
                      <p className='text-3xl font-light'>1517 Fund</p>
                      <p className='text-sm'>Invisible College Investment</p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Autem, facilis. Saepe dignissimos accusantium natus magni
                      cupiditate soluta consequatur illum repellendus,
                      temporibus fuga! Dolorem quo vel alias iure exercitationem
                      magnam minus.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  ref={emergentRef}
                  initial={{ x: -100 }}
                  animate={emergentInView ? { x: 0 } : {}}
                  transition={{ duration: 1, ease: "backInOut" }}
                  className='ml-auto flex gap-8 w-full lg:w-[80%] 2xl:w-[60%]'
                >
                  <div className='relative w-1/3'>
                    <Image
                      className='object-contain object-top'
                      fill
                      alt='Emergent Venture Grant'
                      src={"/mercatus_logo.png"}
                    />
                  </div>
                  <div className='flex flex-col gap-12 w-2/3'>
                    <div className='flex flex-col'>
                      <p className='text-3xl font-light'>MERCATUS CENTER</p>
                      <p className='text-sm'>Emergent Venture Grant</p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Autem, facilis. Saepe dignissimos accusantium natus magni
                      cupiditate soluta consequatur illum repellendus,
                      temporibus fuga! Dolorem quo vel alias iure exercitationem
                      magnam minus.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  ref={sparkRef}
                  initial={{ x: 100 }}
                  animate={sparkInView ? { x: 0 } : {}}
                  transition={{ duration: 1, ease: "backInOut" }}
                  className='flex gap-8 w-full lg:w-[80%] 2xl:w-[60%]'
                >
                  <div className='relative w-1/3'>
                    <Image
                      className='object-contain object-top'
                      fill
                      alt='Ann Arbor Spark'
                      src={"/spark_logo.svg"}
                    />
                  </div>
                  <div className='flex flex-col gap-12 w-2/3'>
                    <div className='flex flex-col'>
                      <p className='text-3xl font-light'>Ann Arbor Spark</p>
                      <p className='text-sm'>Accelerator Grant</p>
                    </div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Autem, facilis. Saepe dignissimos accusantium natus magni
                      cupiditate soluta consequatur illum repellendus,
                      temporibus fuga! Dolorem quo vel alias iure exercitationem
                      magnam minus.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div>
              <div className='relative w-fit mx-auto'>
                <Link
                  href={"#"}
                  className={`text-5xl mb-24 ${montserratFont.className} font-thin`}
                >
                  Want to Join?
                </Link>
                <motion.hr
                  ref={futureRef}
                  initial={{ width: 0 }}
                  animate={futureInView ? { width: "100%" } : {}}
                  transition={{ duration: 1, delay: 1, ease: "backInOut" }}
                  className='absolute -bottom-2 left-0 h-[2px] bg-[#FE5DA8] border-none'
                ></motion.hr>
              </div>
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
