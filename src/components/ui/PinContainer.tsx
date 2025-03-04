"use client";
import React from "react";
import { PinContainer } from "./3d-pin";
import {  FaLocationArrow } from "react-icons/fa6";

export function AnimatedPinDemo({title,href, des,iconLists,img}:{title?:string,href?:string, des:string,iconLists:string[],img:string}) {
  return (
    <div className="w-[22rem] h-full py-0  flex items-center justify-center  ">
      <PinContainer
        title={title}
        href={href}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[26rem]  ">
          
          
            
            <h3 className="flex justify-center text-center max-w-xs  !m-0 font-bold text-[1.2rem]  text-base text-slate-100">
                {title}
            </h3>
            <div className="py-3">
                <img src={img} alt="bg.png" className="flex flex-1 w-full rounded-lg mt-4" />
            </div>
            
            

            
            <div className="text-base !m-0 !p-0 font-normal my-2 ">
                <span className="text-slate-500 ">
                {des}
                </span>
            </div>

            <div className="flex items-center justify-between mt-3 ">
                <div className="flex flex-2">
                {iconLists.map((icon, i) => {
                        return (
                            <div key={i} className="border-[0.5px] md:w-[27] md:h-[24]  border-gray-800 rounded-full bg-black-200  p-1 flex justify-center items-center" style={{transform:`translateX(-${6*i*2}px)`}}>
                                <img src={icon} alt="icon" className="p-0.5 " /> 
                                
                            </div>
                        )
                    })}
                </div>
                <div className=" w-[50%] p-1 flex justify-center gap-1 border-gray-500 border-[1.5px] rounded bg-black-200">
                    <button className="text-xs text-slate-300  bg-black-200 rounded-lg  ">Live Site</button>
                    <FaLocationArrow className="text-slate-100" />
                </div>
                
            </div>
            
        </div>
      </PinContainer>
    </div>
  );
}
