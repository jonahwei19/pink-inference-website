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
  useEffect(() => {
    AOS.init({
      duration: 1600,
      once: false,
    });
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.5, // Percentage of section visible in the viewport to trigger the animation
  });

  // const [wetwareRef, wetwareInView] = useInView({
  //   triggerOnce: false,
  //   threshold: 0.05,
  // });

  // const [innovativeSolutionsRef, innovativeSolutionsInView] = useInView({
  //   triggerOnce: false,
  //   threshold: 0.05,
  // });

  // const [excitingDiscoveriesRef, excitingDiscoveriesInView] = useInView({
  //   triggerOnce: false,
  //   threshold: 0.05,
  // });

  return (
    <AnimatePresence mode='wait'>
      <motion.main
        className={`flex min-h-screen flex-col items-center mx-auto w-full relative bg-gradient-to-b from-white to-[#FECEE5] `}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <header className='bg-opacity-90 bg-white rounded-b-3xl fixed left-0 top-0 z-10 flex items-center justify-between w-full px-6 py-4 sm:px-16 sm:py-12'>
          <Link
            href={"/"}
            className='text-4xl font-avenirbold flex flex-col sm:flex-row gap-x-2'
          >
            <span className='text-[#FD5DA8]'>Pink</span>Inference
          </Link>

          <Link
            href={"/TeamSection"}
            className='hover:opacity-70 transition-all duration-150'
          >
            <Image
              alt='View team'
              width={50}
              height={50}
              src={"/team-image.svg"}
            ></Image>
          </Link>
        </header>
        <div className='w-full h-screen flex flex-col items-center gap-6 sm:gap-10 md:gap-12 lg:gap-16 relative mt-32 overflow-hidden'>
          <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={inView ? { duration: 0.5 } : {}}
            className='z-10 relative h-28 sm:h-32 md:h-36 lg:h-40 aspect-square animate-[spin_30s_linear_infinite]'
          >
            <Image
              className=''
              src={"/pink-inference-icon.png"}
              fill
              alt='Pink Inference Logo'
            />
          </motion.section>

          <section className='z-10 w-full flex flex-col gap-4 items-center'>
            <motion.h3
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-5xl md:text-6xl text-center font-normal'
            >
              <span className='font-extrabold'> Scalable &amp; Powerful</span>{" "}
              <br />
              Wetware Computing
            </motion.h3>
            <motion.div
              ref={ref}
              className='mt-2 px-1 text-center text-lg md:text-2xl'
            >
              <TypewriterComponent
                onInit={(typewriter) =>
                  typewriter
                    .changeDelay(40)
                    .typeString(HEADER_DESCRIPTION)
                    .start()
                }
              />
            </motion.div>

            {/* <a 
            href="#ProblemStatement"
            data-smooth-scroll
            className='w-max h-max bg-[#3772FF] text-[#f0f0f0] px-3 py-2 border border-solid
            rounded-tl-[1.4rem] rounded-tr-[0.3rem] rounded-bl-[0.5rem] rounded-br-[1.4rem] hover:opacity-70 rotate-90'>
              {`--->`}</a> */}
          </section>

          <div className='absolute top-0 w-full h-full'>
            <ParticlesWrapper />
          </div>
          {/* <hr className='border border-black border-opacity-60 h-[1px] shadow-2xl shadow-black border-solid w-full absolute bottom-0' /> */}
        </div>

        <div className='w-full md:p-12 h-min'>
          <motion.section
            id='Wetware'
            // initial={{ x: 100 }}
            // animate={wetwareInView ? { x: 0 } : {}}
            // transition={{ duration: 0.3, ease: "easeOut" }}
            className='px-2 sm:px-4 py-10 w-full text-lg flex flex-col gap-8'
          >
            <div className='flex flex-col px-6 gap-8 md:items-center md:text-center'>
              <h2
                data-aos='fade-up'
                data-aos-duration='1200'
                className='text-5xl md:text-7xl font-bold tracking-tight'
              >
                What <span className=''>Is</span>{" "}
                <span className=''>Wetware?</span>
              </h2>
              <p
                data-aos='fade-left'
                className='md:w-2/3 lg:w-1/2 font-semibold text-xl md:text-2xl'
              >
                Wetware computing is a blanket term referring to the utilization
                of biological neurons for computationally difficult problems,
                sensory functions, and life science applications. Wetware
                describes the interface used to stimulate and record activity in
                in-vitro neural networks.
              </p>
            </div>

            <div
              data-aos='zoom-in'
              className='relative aspect-square w-40 sm:w-52 mx-auto'
            >
              <Image src={"/wetware.png"} fill alt='stopwatch' />
            </div>

            <div className='flex flex-col gap-10 px-6'>
              <div>
                <h1 className='text-3xl font-extrabold'>
                  Unlocking the Power of Wetware
                </h1>
                <div className='mt-4 flex flex-col gap-4'>
                  <p>
                    Neurons, with over ~525 million years of evolution, are
                    advanced problem solvers. Yet, modern AIs consume the energy
                    of hundreds of households for training, while the human
                    brain uses only about 12 watts.
                  </p>
                  <p>
                    At Pink Inference, we&apos;re making wetware scalable and
                    powerful. By bypassing traditional electrode interfaces,
                    we&apos;re bringing wetware computing into reality. Our goal
                    is to provide wetware computing as a cloud service. Through
                    our open API, users can conduct wetware research and solve
                    AI problems in various fields, from robotics to the life
                    sciences.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        <div className={`h-[30vh] w-full`} />

        <div className='b-[#00bcd4] w-full md:p-12'>
          <motion.section
            id='ProblemStatement'
            // initial={{ x: -100 }}
            // animate={innovativeSolutionsInView ? { x: 0 } : {}}
            // transition={{ duration: 0.3, ease: "easeOut" }}
            className='px-2 sm:px-4 py-10 w-full text-lg flex flex-col gap-24'
          >
            <div className='flex flex-col px-6 gap-8 md:items-center md:text-center'>
              <h2 className='text-5xl md:text-7xl font-bold tracking-tighter'>
                Innovative Solutions for the Future
              </h2>
              <p className='md:w-2/3 lg:w-1/2 font-semibold text-xl md:text-2xl'>
                Current approaches to wetware systems focus on electrical
                interfaces with metallic electrodes. However, these designs are{" "}
                <strong>inflexible and challenging</strong> to scale. We are
                designing wetware computing to be{" "}
                <strong>scalable and powerful</strong>.
              </p>
            </div>

            <div className='flex flex-wrap justify-center sm:gap-16'>
              <div className='flex flex-col justify-center items-center'>
                <div className='relative aspect-square w-40 sm:w-52'>
                  <Image
                    src={"/lab_tubes3.png"}
                    width={200}
                    height={200}
                    alt='lab tubes'
                  />
                </div>
                <p>Pharmaceutical Testing</p>
              </div>

              <div className='flex flex-col justify-center items-center'>
                <div className='relative aspect-square w-40 sm:w-52'>
                  <Image
                    src={"/brain-icon.png"}
                    width={200}
                    height={200}
                    alt='brain study'
                  />
                </div>
                <p>Brain Study</p>
              </div>
            </div>

            <div className='flex flex-col lg:flex-ro justify-center items-center gap-16 rounded-3xl bord border-sold p-4'>
              <div className='flex flex-col gap-2 lg:w-1/2'>
                <h1 className='text-3xl font-extrabold'>Current Models</h1>
                {/* <ul>
                <li>Inflexible and costly</li>
                <li>Significant scalability issues</li>
                <li>High energy consumption</li>
                <li>Large amounts of data required</li>
                <li>Neurological drug testing is difficult to replicate</li>
              </ul> */}
                <p>
                  Current wetware models are inflexible and costly. AI faces
                  significant scalability issues in terms of data required and
                  energy consumption. Neurological drug testing is difficult and
                  faces severe replicability issues. Psychological research, due
                  to measurement and stimulation constraints has had to focus on
                  artifacts as opposed to source.
                </p>
              </div>
              <div className='flex flex-col gap-2 lg:w-1/2'>
                <h1 className='text-3xl font-extrabold'>Our Solution</h1>
                {/* <ul>
                <li>Yields the potential for less training time and energy consumption</li>
                <li>Faster testing of neurological drugs</li>
                <li>Offers more reliable method to study the brain</li>
              </ul> */}
                <p>
                  Our model improves on the industry standard. Wetware, due to
                  greater complexity and parallelization, yields the potential
                  for less training time and energy consumption (theoretically).
                  With our system, pharma companies will be able to more quickly
                  and decisively test the effect of neurological drugs and their
                  effects on neuronal cultures. Cognition experts will be able
                  to use our system to study the brain in a more reliable
                  method.
                </p>
              </div>
            </div>
          </motion.section>
        </div>

        <div className={`h-[30vh] w-full`} />

        <div className='w-full md:p-12'>
          <motion.section
            // initial={{ x: 100 }}
            // animate={excitingDiscoveriesInView ? { x: 0 } : {}}
            // transition={{ duration: 0.3, ease: "easeOut" }}
            className='px-2 sm:px-4 py-10 w-full text-lg flex flex-col gap-8'
          >
            <div className='flex flex-col px-6 gap-8 md:items-center md:text-center'>
              <h2 className='text-5xl md:text-7xl font-bold tracking-tighter'>
                Powerful Features
                <p className='mb-4 ml-8'>Exciting Discoveries</p>
              </h2>
              <p className='md:w-2/3 lg:w-1/2 font-semibold text-xl md:text-2xl'>
                We&apos;ve been able to sidestep these flaws by developing a
                system that skips the electrode interface altogether. We are
                making wetware a computational reality.
              </p>
            </div>
            <ul className='text-xl list-disc px-6 mx-auto p-4'>
              <li>Versatile</li>
              <li>Scalable</li>
              <li>
                Sustainable
                <ul className='ml-4'>
                  <li>- Long-lasting neuron life</li>
                  <li>- Lower energy consumption</li>
                </ul>
              </li>
              <li>Cost-Effective</li>
            </ul>
            <div className='flex flex-wrap justify-center sm:gap-16'>
              <div className='flex flex-col justify-center items-center'>
                <div className='relative aspect-square w-40 sm:w-52'>
                  <Image
                    src={"/stopwatch_300x300_nobg.png"}
                    fill
                    alt='stopwatch'
                  />
                </div>
                <p>Save Time</p>
              </div>

              <div className='flex flex-col justify-center items-center'>
                <div className='relative aspect-square w-40 sm:w-52'>
                  <Image
                    className='opacity-[.84]'
                    src={"/resources.png"}
                    width={200}
                    height={200}
                    alt='stopwatch'
                  />
                </div>
                <p>Save Resources</p>
              </div>
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
      </motion.main>
    </AnimatePresence>
  );
}
