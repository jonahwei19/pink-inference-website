'use client'

import ParticlesWrapper from "@/components/ParticlesWrapper";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContactForm from "@/components/ContactForm";
import { useRef } from "react";


export default function Home() {

  const [ref, inView] = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.5, // Percentage of section visible in the viewport to trigger the animation
  });

  const [innovativeSolutionsRef, innovativeSolutionsInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [excitingDiscoveriesRef, excitingDiscoveriesInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [ourTeamRef, ourTeamInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  return (
    <main className="flex min-h-screen flex-col gap-24 items-center p-8 md:p-16 max-w-[1500px] mx-auto w-full">
      <div className="w-full h-screen flex flex-col items-center gap-10 relative overflow-hidden">
        <header className='flex justify-between w-full top-4'>
          <h1 className='text-4xl font-bold flex flex-col sm:flex-row gap-x-2'><span className='text-[#FD5DA8]'>Pink</span>Inference</h1>
          {/* <a 
            href="#About"
            data-smooth-scroll
            className='w-max h-max bg-[#3772FF] text-[#f0f0f0] px-3 py-2 border border-solid
            rounded-tl-[1.4rem] rounded-tr-[0.3rem] rounded-bl-[0.5rem] rounded-br-[1.4rem] hover:opacity-70'>
              Let&apos;s Connect</a> */}
        </header>

        <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={inView ? { duration: .5 } : {}}
            className="relative h-60 aspect-square animate-[spin_30s_linear_infinite]">
          <Image className="" src={"/pink-inference-icon.png"} fill alt="Pink Inference Logo" />
        </motion.section>

        <section className='w-full flex flex-col gap-4 items-center'>
          <motion.h3
            ref={ref}
            initial={{ opacity: 0, y:20 }}
            animate={inView ? { opacity: 1, y:0 } : {}}
            transition={{ duration: 1 }}
            className='text-5xl md:text-6xl text-center'><span className="font-bold">Scalable &amp; Powerful</span> Wetware Computing</motion.h3>
          <motion.p
            ref={ref}
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
          className="text-center text-lg md:text-2xl">Developing wetware architecture for the next generation of computing and neuropharmacology.</motion.p>

          <a 
            href="#ProblemStatement"
            data-smooth-scroll
            className='w-max h-max bg-[#3772FF] text-[#f0f0f0] px-3 py-2 border border-solid
            rounded-tl-[1.4rem] rounded-tr-[0.3rem] rounded-bl-[0.5rem] rounded-br-[1.4rem] hover:opacity-70 rotate-90'>
              {`--->`}</a>

        </section>
            
        <div className=" -z-10 absolute top-0 w-full h-full">
          <ParticlesWrapper />
        </div>
      </div>

      <motion.section
        id="ProblemStatement"
        ref={innovativeSolutionsRef}
        initial={{ x: -100, opacity: 0 }}
        animate={innovativeSolutionsInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="rounded-[5rem] bg-gradient-to-br from-[#f0f0f0] to-[#ffffff] shadow-lg w-full p-10 text-lg flex flex-col gap-8"
      >
        <h2 className="text-3xl mb-4 font-bold">Innovative Solutions for the Future</h2>
        <p>Current approaches to wetware systems focus on electrical interfaces with metallic electrodes. However, these designs are <strong>inflexible and challenging</strong> to scale. We are designing wetware computing to be <strong>scalable and powerful</strong>.</p>
        <div className="flex flex-col lg:flex-row justify-center items-start gap-6 rounded-lg border-2 border-solid p-4">
          <div className="flex flex-col gap-2 lg:w-1/2">
            <h1 className="text-2xl font-semibold">Current Models</h1>
            {/* <ul>
              <li>Inflexible and costly</li>
              <li>Significant scalability issues</li>
              <li>High energy consumption</li>
              <li>Large amounts of data required</li>
              <li>Neurological drug testing is difficult to replicate</li>
            </ul> */}
            <p>Current wetware models are inflexible and costly. - AI faces significant scalability issues in terms of data required and energy consumption. - Neurological drug testing is difficult and faces severe replicability issues. - Psychological research, due to measurement and stimulation constraints has had to focus on artifacts as opposed to source.</p>
          </div>
          <div className="flex flex-col gap-2 lg:w-1/2">
            <h1 className="text-2xl font-semibold">Our Solution</h1>
            {/* <ul>
              <li>Yields the potential for less training time and energy consumption</li>
              <li>Faster testing of neurological drugs</li>
              <li>Offers more reliable method to study the brain</li>
            </ul> */}
            <p>Our model improves on the industry standard. Wetware, due to greater complexity and parallelization, yields the potential for less training time and energy consumption (theoretically). With our system, pharma companies will be able to more quickly and decisively test the effect of neurological drugs and their effects on neuronal cultures. Cognition experts will be able to use our system to study the brain in a more reliable method.</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        ref={excitingDiscoveriesRef}
        initial={{ x: 100, opacity: 0 }}
        animate={excitingDiscoveriesInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="rounded-[5rem] bg-gradient-to-br from-[#f0f0f0] to-[#ffffff] shadow-lg w-full p-10 text-lg flex flex-col gap-8"
      >
        <h2 className="text-3xl font-bold">
          Powerful Features
          <p className="mb-4 ml-8">Exciting Discoveries</p>
        </h2>
        <p>We&apos;ve been able to sidestep these flaws by developing a system that skips the electrode interface altogether. We are making wetware a computational reality.</p>
        <ul className="text-xl list-disc">
          <li>Versatile</li>
          <li>Scalable</li>
          <li>
            Sustainable
            <ul className="ml-4">
              <li>- Long-lasting neuron life</li>
              <li>- Lower energy consumption</li>
            </ul>
          </li>
          <li>Cost-Effective</li>
        </ul>
      </motion.section>

      <motion.section
        id="About"
        ref={ourTeamRef}
        initial={{ x: -100, opacity: 0 }}
        animate={ourTeamInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="rounded-[5rem] bg-gradient-to-br from-[#f0f0f0] to-[#ffffff] shadow-lg w-full p-10 text-lg"
      >
        <h2 className="text-3xl mb-4 font-bold">Our Team</h2>
        <div className="flex justify-center flex-wrap w-full px-12 gap-10">
          <MemberDisplay name="Michael Loftus" role="Co-founder (CSO)" image="/Michael-Loftus-Pic.jpg" />
          <MemberDisplay name="Jonah Weinbaum" role="Co-founder (CEO)" image="/Jonah-Weinbaum-Pic.jpg" />
          <MemberDisplay name="Zan Huang" role="Co-founder (CTO)" image="/Zan-Huang-Pic.png" />
          <MemberDisplay name="Sami Barmada" role="Science Advisor" image="/Sami-Barmada-Pic.jpg" />
          <MemberDisplay name="Don Stein" role="Business Advisor" image="/Don-Stein-Pic.png" />
        </div>
      </motion.section>

      <hr className="border border-opacity-10 border-solid border-black w-full"/>

      <footer className="flex flex-col justify-around items-center">
        <Image src={"/pink-inference-icon.png"} width={30} height={30} alt="Pink Inference Logo" />
        <p>&copy; 2023 Pink Inference</p>
        <p>Designed and Built by Hunter Samoy</p>
      </footer>

    </main>
  )
}

function MemberDisplay({name, role, image}:{
  name: string,
  role: string,
  image: string,
  
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative overflow-hidden rounded-3xl w-60 h-60 sm:w-72 sm:h-72">
        <Image fill alt={name} src={image} />
      </div>
      <p className="text-2xl font-bold">{name}</p>
      <p className="text-base">{role}</p>
    </div>
  )
}