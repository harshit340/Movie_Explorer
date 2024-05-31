/* eslint-disable react/jsx-key */

import React from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from '../components/MovieCard'
import '../App.css'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const screenWidth = window.innerWidth;
export default function MovieList({genreId}) {
    const [movielist , setMovieList] = React.useState([])
    const elementRef = React.useRef();
    React.useEffect(()=>{
        getMovieByGenreId();
    },[])
    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }
    const SliderRight=(element)=>{
      element.scrollLeft+=screenWidth-90
    }
    const SliderLeft=(element)=>{
      element.scrollLeft-=screenWidth-90
    }
  return (
 
    <div ref={elementRef} className='flex flex-nowrap overflow-auto scrollbar-none scroll-smooth'>
    {movielist.length > 0 && movielist.map((item,index)=>(
      <>
            <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-10 mt-[150px] cursor-pointer' onClick={()=>SliderLeft(elementRef.current)}/>
            <HiChevronRight  className='hidden md:block text-white text-[30px] absolute mx-10 mt-[150px] cursor-pointer right-0' onClick={()=>SliderRight(elementRef.current)}/>
          <MovieCard key={item.id} movie={item}/>
            </>
        ))}
    </div>
  )
}
