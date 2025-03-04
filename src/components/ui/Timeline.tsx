"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HoverEffect } from "./HoverEffect";


interface TimelineEntry {
  title: string;
  id: number;
  year: string;
  desc: string;
  className: string;
  thumbnail: string;
  
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white-100  font-sans md:px-10"
      ref={containerRef}
    >
      
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative  flex justify-start pt-10 md:pt-20   border-green w-[50%] ${index % 2==0 ? "left-[48.5%]":"flex-row-reverse left-[1.8%] "}`}
          >
            <div className={`sticky flex flex-col  ${index % 2==0 ? "md:flex-row":"md:flex-row-reverse  md:items-center md:justify-between  "} z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full`}>
              <div className="h-10  left-3 md:left-3 w-10 rounded-full bg-white dark:bg-transparent  flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-slate-400 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-indigo-900 ">
                {item.year}
              </h3>
            </div>


            <div className="max-w-5xl mx-auto px-8">
              <HoverEffect {...item} />
            </div>
            {/* <div className="relative pl-20 pr-4 md:pl-4 w-full bg-slate-100 p-4 rounded-sm ">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.year}
              </h3>
              <div>
                  <p className="text-indigo-800  font-bold text-xs md:text-xl md:pt-4 text-center mb-4">
                    {item.title}
                  </p>
                  <p className="text-neutral-800 text-center  text-xs md:text-sm font-normal mb-8">
                    {item.desc}
                  </p>
                 
              </div>
            </div> */}
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-[50%] left-8 top-0 overflow-hidden w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-emerald-500 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[3px] bg-gradient-to-t from-purple-500 via-indigo-600 to-transparent from-[0%] via-[20%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};















// "use client";
// import {
//   useMotionValueEvent,
//   useScroll,
//   useTransform,
//   motion,
// } from "framer-motion";
// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";

// interface TimelineEntry {
//   title: string;
//   id: number;
//   year: string;
//   desc: string;
//   className: string;
//   thumbnail: string;
  
// }

// export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [height, setHeight] = useState(0);

//   useEffect(() => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect();
//       setHeight(rect.height);
//     }
//   }, [ref]);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 10%", "end 50%"],
//   });

//   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

//   return (
//     <div
//       className={`w-full font-sans md:px-10 pt-10`}
//       ref={containerRef}
//     >
     

//       <div ref={ref} className="relative max-w-7xl mx-auto  ">
//         {data.map((item, index) => (
//           <div
//             key={index}
//             className={`relative ${index % 2==0 ? "left-[52%] justify-start":"left-0 flex-row-reverse justify-items-end "}    md:gap-10  w-[48%] flex    `}
//           >
//             <h1 className={`sticky w-[30%] text-xl md:text-5xl h-[100%]  ${index % 2==0 ? "flex justify-center ":" flex justify-center "} text-neutral-500 font-bold `}>{item.year}</h1>
            
//             <div
//             className={`flex flex-col  ${index % 2==0 ? "w-[50%]":"items-end "}    `}
//             >
//                 <div className=" flex flex-col  items-center ">
                    
//                     <h1>
//                       {item.title}
//                     </h1>
//                     <div className="">
//                         <Image
//                         src={item.thumbnail}
//                         alt="hero template"
//                         width={100}
//                         height={100}
//                         // className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
//                         />
                        
//                     </div>

//                 </div>
                
                
//             </div>
            
//           </div>
//         ))}
//         <div
//           style={{
//             height: height + "px",
//           }}
//           className="absolute  left-[50%] top-0 mt-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
//         >
 
//           <motion.div
//             style={{
//               height: heightTransform,
//               opacity: opacityTransform,
//             }}
//             className="absolute inset-x-0   w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
//           />
//         </div>
        
//       </div>
//     </div>
//   );
// };
