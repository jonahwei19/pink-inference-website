'use client'

import ParticlesWrapper from "@/components/ParticlesWrapper";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContactForm from "@/components/ContactForm";


export default function Home() {

  const [ref, inView] = useInView({
    triggerOnce: false, // Animation triggers only once
    threshold: 0.5, // Percentage of section visible in the viewport to trigger the animation
  });

  
  return (
    <main className="flex min-h-screen flex-col gap-8 items-center p-8 md:p-16 max-w-[1500px] mx-auto">
      <div className="w-full h-screen sm:h-max flex flex-col items-center gap-10 relative">
        <header className='flex justify-between w-full top-4'>
          <h1 className='text-4xl font-bold flex flex-col sm:flex-row gap-x-2'><span className='text-[#e06666]'>Pink</span>Inference</h1>
          <a 
            href="#About"
            data-smooth-scroll
            className='w-max h-max bg-[#3772FF] text-[#f0f0f0] px-3 py-2 border border-solid
            rounded-tl-[1.4rem] rounded-tr-[0.3rem] rounded-bl-[0.5rem] rounded-br-[1.4rem] hover:opacity-70'>
              Let&apos;s Connect</a>
        </header>

        <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .5 }}
            className="relative aspect-square w-28 sm:w-36 animate-[spin_25s_linear_infinite]">
          <Image src={"/pink-inference-icon.png"} fill alt="Pink Inference Logo" />
        </motion.section>

        <section className='w-full flex flex-col gap-4 items-center'>
          <motion.h3
            ref={ref}
            initial={{ opacity: 0, y:20 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration: 1 }}
            className='text-5xl md:text-6xl text-center'><span className="font-bold">Scalable &amp; Powerful</span> Wetware Computing</motion.h3>
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y:20 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration: 1 }}
          className="text-center text-lg md:text-2xl">Developing wetware architecture for the next generation of computing and neuropharmacology.</motion.p>

          <a 
            href="#ProblemStatement"
            data-smooth-scroll
            className='sm:hidden w-max h-max bg-[#3772FF] text-[#f0f0f0] px-3 py-2 border border-solid
            rounded-tl-[1.4rem] rounded-tr-[0.3rem] rounded-bl-[0.5rem] rounded-br-[1.4rem] hover:opacity-70 rotate-90'>
              {`--->`}</a>

        </section>

      </div>

      <motion.section
        id="ProblemStatement"
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-[5rem] bg-gradient-to-br from-[#f0f0f0] to-[#ffffff] shadow-lg w-full p-10"
      >
        <h2 className="text-3xl mb-4 font-bold">Innovative Solutions for the Future</h2>
        <p>We are designing wetware computing to be scalable and powerful. Current approaches to wetware systems focus on electrical interfaces with metallic electrodes. However, these designs are inflexible and challenging to scale.</p>
      </motion.section>

      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-[5rem] bg-gradient-to-br from-[#f0f0f0] to-[#ffffff] shadow-lg w-full p-10"
      >
        <h2 className="text-3xl font-bold">
          Powerful Features
          <p className="mb-4 ml-8">Exciting Discoveries</p>
        </h2>
        <p>We&apos;ve been able to sidestep these flaws by developing a system that skips the electrode interface altogether. We are making wetware a computational reality.</p>
      </motion.section>

      <motion.section
        id="About"
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-[5rem] bg-gradient-to-br from-[#f0f0f0] to-[#ffffff] shadow-lg w-full p-10"
      >
        <h2 className="text-3xl mb-4 font-bold">Our Talented Team</h2>
        <div className="flex justify-center flex-wrap w-full px-12 gap-10">
          <MemberDisplay name="Michael Loftus" role="Co-founder (CSO)" image="/Michael-Loftus-Pic.jpg" />
          <MemberDisplay name="Jonah Weinbaum" role="Co-founder (CEO)" image="/Jonah-Weinbaum-Pic.jpg" />
          <MemberDisplay name="Zan Huang" role="Co-founder (CTO)" image="/Zan-Huang-Pic.png" />
          <MemberDisplay name="Sami Barmada" role="Science Advisor" image="/Sami-Barmada-Pic.jpg" />
          <MemberDisplay name="Don Stein" role="Business Advisor" image="/Don-Stein-Pic.png" />
        </div>
      </motion.section>

      {/* <motion.section
          id="contactForm"
          ref={ref}  
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center rounded-[5rem] bg-gradient-to-br from-[#f0f0f0] to-[#ffffff] shadow-lg w-full p-10 gap-6">
          <p className="text-3xl">Contact Us</p>
          <ContactForm />
      </motion.section> */}

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