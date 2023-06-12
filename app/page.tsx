
import ParticlesWrapper from "@/components/ParticlesWrapper";
import Image from "next/image";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col gap-8 items-center p-8 md:p-16">
      <header className='flex justify-between w-full'>
        <h1 className='text-4xl font-bold flex flex-col sm:flex-row gap-x-2'><span className='text-[#e06666]'>Pink</span>Inference</h1>
        <button className='w-max h-max  border border-solid'>Let's Connect</button>
      </header>

      <section className="w-full flex flex-col gap-4">
        <h3 className="text-3xl text-center">
          <span className="font-bold">Scalable &amp; Powerful</span> Wetware
          Computing
        </h3>
        <p className="text-center">
          Developing wetware architecture for the next generation of computing
          and neuropharmacology.
        </p>
      </section>

      <section className="relative aspect-square w-24">
        <Image
          src={"/pink-inference-icon.png"}
          fill
          alt="Pink Inference Logo"
        />
      </section>

      <section className="rounded-[5rem] bg-gradient-to-br from-gray-200 to-white shadow-lg w-full p-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quia
        facere explicabo error voluptatum quidem cupiditate magnam numquam
        praesentium sit, aut quas fuga rem non voluptates repudiandae ut illum
        culpa!
      </section>

      <section className="rounded-[5rem] bg-gradient-to-br from-gray-200 to-white shadow-lg w-full p-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quia
        facere explicabo error voluptatum quidem cupiditate magnam numquam
        praesentium sit, aut quas fuga rem non voluptates repudiandae ut illum
        culpa!
      </section>

      <section className="rounded-[5rem] bg-gradient-to-br from-gray-200 to-white shadow-lg w-full p-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quia
        facere explicabo error voluptatum quidem cupiditate magnam numquam
        praesentium sit, aut quas fuga rem non voluptates repudiandae ut illum
        culpa!
      </section>

      <ParticlesWrapper />
    </main>
  )
}

