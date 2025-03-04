import React from 'react'
import { Button } from '@/components/ui/MovingBorders'
import { technologies } from '@/data'
import Image from 'next/image'

export const Skills = () => {
  return (
    <div className='flex flex-col justify-center flex-wrap   items-center mb-40 mt-36 ' id='tech'>
      <h1 className='heading mb-10'>
            
            <span className='text-purple'>Technologies {" "} </span>
            I have worked with
        </h1>
        <div className='flex gap-10 mt-10 flex-wrap justify-center items-center '>
          {
            technologies.map((tech, i) => {
              return (
                <div className='flex' key={i}>
                  <Button
                    borderRadius="1.75rem"
                    className="bg-gray-900 text-black   "
                  >
                    <Image src={tech.img} alt={tech.title} width={40} height={40} className='' />
                    {/* {tech.title} */}
                    {/* <img src={tech.img} alt="" className='bg-black-100  '  /> */}
                    
                  </Button>
                </div>
              )
            })
          }
        </div>
        
    </div>
  )
}
