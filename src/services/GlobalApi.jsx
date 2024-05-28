
  import axios from "axios"

 // eslint-disable-next-line no-unused-vars
 const movieBaseUrl = "https://api.themoviedb.org/3"
 const api_key = 'e3175a586b53eee67383a00808fc87aa'

 const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);

 export default {
    getTrendingVideos
 }
 