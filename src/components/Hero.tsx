import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { MagicButton } from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'


const Hero = () => {
  return (
    
    <div className='border-white-100' id='home'>
      <div>
        <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
            />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
            />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div className=" w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          </div>
        </div>

        <div className="flex justify-center relative mt-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            {/* <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 ">
              Dynamic Web Magic with Next.js
            </p> */}
            <TextGenerateEffect 
              // words="Transforming Concepts into Seamless User Experiences"
              words="Hi, I am Ishita Jana"
              className="text-center text-[40px] md:text-5xl lg:text-6xl  w-full md:mt-5"
            />
            {/* <TextGenerateEffect 
              // words="Transforming Concepts into Seamless User Experiences"
              words="I am a Full Stack Developer based in India."
              className="text-center text-[40px] md:text-5xl lg:text-6xl  w-full md:mt-5"
            /> */}
          </div>
        </div>

        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl ">
            {/* Hi! I&apos;m Ishita, a Full Stack Developer based in India. */}
            I am a Full Stack Developer based in India.
          </p>

          <a href="#work">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

      </div>

      

      
    
  )
}

export default Hero