import './App.css'
import GenreMovieList from './components/GenreMovieList.jsx'
import Header from './components/Headers.jsx'
import Production from './components/Production.jsx'
import Slider from './components/Slider.jsx'
function App() {
 

  return (
    
       <div >
        <Header/>
        <Slider/>
        <Production/>
        <GenreMovieList/>
       </div>
    
  )
}

export default App
