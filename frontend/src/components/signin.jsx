/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import "../style/login.css";
import React from "react";
import {  Input,Form } from "antd";
import { useNavigate} from 'react-router-dom';
import axios from "axios"

export default function SignIn({ setLoginStatus }) {
  
  const [data,setdata] = React.useState({
      email:"",
      password:""
  })
  const navigate = useNavigate();
  const navigateto =()=> {
    navigate('/signup');
  }

  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setdata(data=>({...data,[name]:value}))
  }
  
  const onlogin=async(event) =>{
    event.preventDefault;
    try{
      const response = await axios.post('http://localhost:3000/api/user/login',data)
      console.log(response.data);
      if(response.data){
        alert('Login successfull');
        setLoginStatus(true);
        navigate('/');
      }else{
        alert('User not exist or Wrong password or email');
        
      }
    }catch(error){
          console.log('error login',error);
          alert(error)
    }
  }


  return (
    <>
 
        <div className="main-form">
        <div>
            <span className="title">Login or sign up to continue</span>
            <span className="subtitle">Enter e-mail and password to login</span>
          </div>
          <div className="input-field">
          <Form layout='vertical' onFinish={onlogin}
            name="basic"
            labelCol={{
              span: 8,
            }}
           
            style={{
              width: 600,
            }}
            initialValues={{
              remember: true,
            }}


          >
          <Form.Item
              label={<span className='input-label'>E-mail</span>}
              name="email"
            >
              <Input className='input-style' name="email" onChange={onChangeHandler} value={data.email} />
            </Form.Item>
                <Form.Item
              label={<span className='input-label'>Password</span>}
              name="password"
            >
              <Input.Password className='input-style' name="password" onChange={onChangeHandler} value={data.password} />
            </Form.Item> 
            <div className="button-container">
                <button type='submit' className="shadow__btn button-style" > Explore </button></div>
            </Form>
               

                <div style={{display:"flex" , justifyContent:"center" , marginTop:"20px"}}>Create new account?<span onClick={navigateto} style={{cursor:"pointer",fontWeight:900 , marginLeft:"10px"}}> Signup</span></div>
         
          </div>
        </div>
    
    </>
  );
}
