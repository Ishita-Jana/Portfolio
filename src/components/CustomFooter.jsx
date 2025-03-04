
"use client";


import React from 'react'
import { IconBrandGithub, IconBrandHackerrank, IconBrandLinkedin } from '@tabler/icons-react'
import { socialLinks } from '@/data';



const socials = [
  { title: "LinkedIn", icon: <IconBrandLinkedin className="w-6 h-6 text-white " />, href: `${socialLinks.linkedin}` },
  { title: "Github", icon: <IconBrandGithub className="w-6 h-6 text-white " />, href: `${socialLinks.github}` },
  { title: "HackerRank", icon: <IconBrandHackerrank className="w-6 h-6 text-white " />, href: `${socialLinks.hackerrank}` },
]

const CustomFooter = () => {
  return (
    <div className='flex-col mb-20 ' id='socials'>
      {/* <div>
        Newsletter
      </div> */}
      

      <div className='flex justify-between'>
        <div>
          <p>© 2025 Ishita Jana</p>
        </div>
        <div className='flex gap-3'>
            {socials.map((s, index) => {
              return (
                
                <a
                  key={index}
                  href={s.href}
                  target='_blank'
                  rel="noopener noreferrer"
                  className="text-black-200 hover:text-black-300"
                >
                  {s.icon}
                  {/* {console.log(s.href)} */}
                </a>
              )
          })}
        </div>
          
        </div>
      
    </div>
  )
}

export default CustomFooter