import React from 'react'
import { HiHome ,HiMagnifyingGlass, HiStar , HiPlayCircle , HiTv} from "react-icons/hi2";
import { HiPlus , HiDotsVertical} from "react-icons/hi";
import HeaderItem from './HeaderItem.jsx'
import logo from "../assets/Disneyplus.avif"
import avatar from "../assets/pngwing.com.png"

export default function header() {
  const[toggle,settoggle] = React.useState(false);
  const menu=[
    {
      name:'HOME',
      icon:HiHome
    }, 
   
    {
      name:'SEARCH',
      icon:HiMagnifyingGlass
    }, 
    {
      name:'WATCH LIST',
      icon:HiPlus
    }, 
   
    {
      name:'STAR',
      icon:HiStar
    }, 
   
    {
      name:'MOVIES',
      icon:HiPlayCircle
    }, 
   
    {
      name:'SERIES',
      icon:HiTv
    }, 
   
  ]
  return (
    <div className="flex justify-between p-[8px]">
      <div className="flex items-center gap-8 ">
      <img src={logo} className='w-[60px] md:w-[80px] object-cover'></img>
      <div className="hidden md:flex gap-8">
      {menu.map((item)=>(
        <HeaderItem name={item.name} Icon={item.icon}/>
      ))}
      </div>

      <div className="flex md:hidden gap-8">
      {menu.map((item,index)=>index<3&&(
        <HeaderItem name={''} Icon={item.icon}/>
      ))}
      <div className="md:hidden" onClick={()=>settoggle(!toggle)}>
        <HeaderItem name={''} Icon={HiDotsVertical}/>
       {toggle?  <div className="absolute mt-3  border-[1px] border-gray-700 p-3 px-5 py-4">
         {menu.map((item,index)=>index>2&&(
          <HeaderItem name={item.name} Icon={item.icon}/>
         ))}
        </div>:null}
      </div>
      </div>
      </div>
      <img src={avatar} className="w-[50px] rounded-full"></img>
    </div>
  )
}
