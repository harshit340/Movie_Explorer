import React from 'react'
import GlobalApi from '../services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
export default function Slider() {
    const [movieList,setMovieList]= React.useState([]);
    const elementRef = React.useRef();
    React.useEffect(()=>{
        getTrendingMovies()
    },[])
    
    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp =>{
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }

    const SliderRight=(element)=>{
      element.scrollLeft+=screenWidth-90
    }
    const SliderLeft=(element)=>{
      element.scrollLeft-=screenWidth-90
    }

  return (
    <>
    <div>
        <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={()=>SliderLeft(elementRef.current)}/>
        <HiChevronRight  className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0' onClick={()=>SliderRight(elementRef.current)}/>
    <div className='flex overflow-x-auto w-full px-10 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
      {movieList.map((item,index)=>index>3&&(
         // eslint-disable-next-line react/jsx-key
         <img src={IMAGE_BASE_URL+item.backdrop_path} className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md'></img>
      ))}
    </div>
    </div>
    </>
  )
}
