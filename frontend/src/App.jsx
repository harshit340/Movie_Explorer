/* eslint-disable no-undef */
import Home from './Home';
import React from 'react';
import Signin from './components/Signin.jsx';
import SignUp from './signup/Signup.jsx'
import {  Route, Routes } from 'react-router-dom';

function App() {
 
  const [LoginStatus, setLoginStatus] = React.useState(false);
  return (
    
       <div >
       
        <Routes>
        <Route path="/" element={<Home LoginStatus={LoginStatus} setLoginStatus={setLoginStatus}/>} />
        <Route path="/signin" element={<Signin setLoginStatus={setLoginStatus}/>} />
        <Route path="/signup" element={<SignUp/>} />
        </Routes>
       </div>
    
  )
}

export default App
