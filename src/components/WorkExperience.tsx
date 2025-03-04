"use client";

// import { motion } from "framer-motion";
import React from "react";
import { Timeline } from "@/components/ui/Timeline";
import { workExperience } from "@/data";
// import { AuroraBackground } from "./ui/AuroraBackground";





export function WorkExperience() {
  
  return (

    <>
    {/* <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="pt-10 pb-20 "
      > */}
              <div className=" mt-4" id="work">
                  <h1 className='heading'>
                      Work {' '}
                      <span className='text-purple'>Experience</span>
                  </h1>
                  <div className="w-full mt-10 ">
                      <Timeline data={workExperience} />
                  </div>
              </div>


        


        {/* </motion.div>
    </AuroraBackground> */}
         
    </>
    
  );
}


