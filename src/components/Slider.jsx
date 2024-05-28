import React from 'react'
import GlobalApi from '../services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
export default function Slider() {
    const [movieList,setMovieList]= React.useState([]);
    React.useEffect(()=>{
        getTrendingMovies()
    },[])
    
    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp =>{
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }

  return (
    <>
    <div>
        <HiChevronLeft className='text-white'/>
        <HiChevronRight/>
    <div className='flex overflow-x-auto w-full px-10 py-4 scrollbar-none'>
      {movieList.map((item,index)=>index>3&&(
         // eslint-disable-next-line react/jsx-key
         <img src={IMAGE_BASE_URL+item.backdrop_path} className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md'></img>
      ))}
    </div>
    </div>
    </>
  )
}
