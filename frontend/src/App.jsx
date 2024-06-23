import Home from './Home';
import Signin from './components/Signin.jsx';
import SignUp from './signup/Signup.jsx'
import {  Route, Routes } from 'react-router-dom';

function App() {
 

  return (
    
       <div >
       
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<SignUp/>} />
        </Routes>
       </div>
    
  )
}

export default App
