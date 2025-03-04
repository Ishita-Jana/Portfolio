import { projects } from '@/data'
import React from 'react'
import { AnimatedPinDemo } from './ui/PinContainer'
import { PinContainer } from './ui/3d-pin'


const RecentProjects = () => {
  return (
    <div id='projects' >
        <h1 className='heading'>
            A small section of {' '}
            <span className='text-purple'>recent projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-12 mt-2 '>
            {projects.map(({id,title,des,img,iconLists,link}) => {
                return (
                    <div key={id} className={`lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center  sm:w-96  `}>

                        <AnimatedPinDemo 
                            title={title}
                            des={des}
                            href={link}
                            iconLists={iconLists}
                            img={img}
                        />
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default RecentProjects