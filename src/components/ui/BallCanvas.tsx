// "use client"
// import React, {Suspense} from 'react'
// import { Canvas } from '@react-three/fiber'
// import {Decal,Preload,useTexture, Stars} from '@react-three/drei'
// import { extend } from '@react-three/fiber'
// // import { OrbitControls, TransformControls } from 'three-stdlib'
// // extend({ OrbitControls, TransformControls })
// // import {CanvasLoader} from './CanvasLoader'

// const Ball = ({id,title,img}:{id?:string, title?:string , img:string }) => {
//     const [decal] = useTexture([img]);
//   return (
//     <div>Ball changes</div>
    
//   )
// }

// const BallCanvas = ({title,icon}:{title?:string,icon:string}) => {
//     return (
//         <Canvas
//             frameloop='demand'
//             shadows
//             camera={{position:[20,3,5]}}
//             gl={{preserveDrawingBuffer:true}}
//         >
//             <Suspense fallback={null}>
                
//                 <Ball img={icon} title={title}/>

//             </Suspense>
//             <Preload all/>
//         </Canvas>
//     )
// }

// export default BallCanvas





