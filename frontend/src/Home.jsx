/* eslint-disable react/prop-types */

import GenreMovieList from './components/GenreMovieList.jsx'
import Header from './components/Headers.jsx'
import Production from './components/Production.jsx'
import Slider from './components/Slider.jsx'

function Home({ LoginStatus, setLoginStatus }) {
 

  return (
    
       <div className='background'>
      
        <Header LoginStatus={LoginStatus} setLoginStatus={setLoginStatus}/>
        <Slider/>
        <Production/>
        <GenreMovieList/>
        
       </div>
    
  )
}

export default Home
