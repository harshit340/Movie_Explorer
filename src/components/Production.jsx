/* eslint-disable react/jsx-key */
import React from 'react'
import disney from "../assets/disney.png"
import marvel from "../assets/marvel.png"
import nationalG from "../assets/nationalG.png"
import pixar from "../assets/pixar.png"
import starwar from "../assets/starwar.png"


import starwarV from './../assets/Videos/star-wars.mp4'
import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import nationalGeographicV from './../assets/Videos/national-geographic.mp4'
import pixarV from './../assets/Videos/pixar.mp4'


export default function Production() {

    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGeographicV
        },

    ]
  return (
    <div className='flex gap-8 p-5 pt-10'>
      {productionHouseList.map((item)=>(
        <div key={item.index} className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in cursor-pointer ' 
        onMouseEnter={(e) => e.currentTarget.querySelector('video').play()}
        onMouseLeave={(e) => e.currentTarget.querySelector('video').pause()}>
            <video src={item.video} autoPlay loop playsInline></video>
            <img src={item.image} className='w-full'></img> 
           
            
        </div>
      ))}
        
      
    </div>
  )
}
