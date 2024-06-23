import "../style/login.css";
import {  Input } from "antd";
import { useNavigate} from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();
  const navigateto =()=> {
    navigate('/signup');
  }
  return (
    <>
   <div className="page-background"></div>
        <div className="main-form">
        <div>
            <span className="title">Login or sign up to continue</span>
            <span className="subtitle">enter email address to login</span>
          </div>
          <div className="input-field">
            
                <Input className="input-style" />
                <div className="button-container">
                <button  className="shadow__btn button-style" onClick={navigateto}> Explore </button></div>
         
          </div>
        </div>
    
    </>
  );
}
