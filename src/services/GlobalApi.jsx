
  import axios from "axios"

 // eslint-disable-next-line no-unused-vars
 const movieBaseUrl = "https://api.themoviedb.org/3"
 const api_key = 'e3175a586b53eee67383a00808fc87aa'
 const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

 const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
 const getMovieByGenreId=(id)=>
   axios.get(movieByGenreBaseURL+"&with_genres="+id)

 export default {
    getTrendingVideos,
    getMovieByGenreId
 }
 