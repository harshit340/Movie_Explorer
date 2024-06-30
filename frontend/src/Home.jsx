
import GenreMovieList from './components/GenreMovieList.jsx'
import Header from './components/Headers.jsx'
import Production from './components/Production.jsx'
import Slider from './components/Slider.jsx'

function Home() {
 

  return (
    
       <div className='background'>
      
        <Header/>
        <Slider/>
        <Production/>
        <GenreMovieList/>
        
       </div>
    
  )
}

export default Home
