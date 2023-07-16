import Image from "next/image";
import { robotoMonoFont, montserratFont } from "@/utilities/fonts";
import "aos/dist/aos.css";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center w-full bg-[#111111] text-white`}
    >
      <div className='relative h-screen flex flex-col w-full bg-topological p-6 sm:p-16 bg-center bg-cover'>
        <div className='flex items-center gap-4'>
          <div className='relative h-12 w-12'>
            <Image src={"/logo_thick.svg"} fill alt='logo' />
          </div>
          <h1
            className={`text-white font-thin text-2xl ${robotoMonoFont.className}`}
          >
            <span className='text-[#FE5DA8]'>PINK</span> INFERENCE
          </h1>
        </div>

        <div className='relative w-[300px] sm:w-[500px] md:w-[800px] lg:w-[1000px] aspect-square sm:-top-10 md:-top-36 left-[40%] sm:left-[35%] xl:left-[45%] 2xl:left-[50%]'>
          <Image fill src={"/logo.svg"} alt='logo' />
        </div>

        <div className='w-full relative top-5 md:-top-16 md:-bottom-1/2 flex flex-col gap-8 font-thin text-white break-words'>
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${robotoMonoFont.className} font-thin`}
          >
            SCALABLE <br />
            & POWERFUL <br />
            WETWARE COMPUTING
          </h1>
          <p
            className={`text-sm sm:text-base md:text-2xl ${montserratFont.className} font-light max-w-[50vw]`}
          >
            Wetware architecture for the next generation of robotics
          </p>
          <div
            className={`text-sm sm:text-base md:text-2xl flex gap-4 sm:gap-12 flex-wrap max-w-[50vw] ${robotoMonoFont.className} font-thin`}
          >
            <button className='border-solid border-white border-spacing-3 border px-4 sm:px-7 py-2 rounded-md hover:opacity-70'>
              ABOUT
            </button>
            <button className='border-solid border-white border-spacing-3 border px-4 sm:px-7 py-2 rounded-md hover:opacity-70'>
              TEAM
            </button>
            <button className=' border-solid border-white border-spacing-3 border px-4 sm:px-7 py-2 rounded-md hover:opacity-70'>
              INVESTORS
            </button>
          </div>
        </div>

        <hr className='absolute bottom-0 left-0 w-full border-8 border-[#FE5DA8]' />
      </div>

      <div className='flex flex-col w-full py-10 gap-12'>
        <div className='flex flex-col w-full px-[15%] sm:px-[30%]'>
          <div className='flex flex-col gap-8'>
            <div className='relative h-24 w-24 sm:h-36 sm:w-36'>
              <Image
                className='invert opacity-90'
                src={"/wetware.png"}
                fill
                alt='wetware symbol'
              />
            </div>
            <h1
              className={`font-thin text-4xl ${robotoMonoFont.className} font-thin`}
            >
              What is wetware?
            </h1>
            <p
              className={`font-light text-sm ${montserratFont.className} font-light`}
            >
              Wetware computing is a blanket term referring to the utilization
              of biological neurons for computationally difficult problems,
              sensory functions, and life science applications. Wetware
              describes the interface used to stimulate and record activity in
              in-vitro neural networks.
            </p>
          </div>
        </div>

        <div className='w-screen h-8 bg-cover bg-center bg-topological-2' />

        <div className='flex flex-col w-full px-[15%] sm:px-[30%]'>
          <div className='flex flex-col gap-8'>
            <h1
              className={`font-thin text-4xl ${robotoMonoFont.className} font-thin`}
            >
              Unlocking the power of wetware
            </h1>
            <p
              className={`font-light text-sm ${montserratFont.className} font-light`}
            >
              Neurons, with over ~525 million years of evolution, are advanced
              problem solvers. Yet, modern AIs consume the energy of hundreds of
              households for training, while the human brain uses only about 12
              watts.
              <br />
              <br />
              At Pink Inference, we are making wetware scalable and powerful. By
              bypassing traditional electrode interfaces, we are bringing
              wetware computing into reality. Our goal is to provide wetware
              computing as a cloud service. Through our open API, users can
              conduct wetware research and solve AI problems in various fields,
              from robotics to the life sciences.
            </p>
          </div>
        </div>
      </div>

      <footer className='flex flex-col justify-around items-center my-8'>
        <Image
          src={"/logo_thick.svg"}
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
