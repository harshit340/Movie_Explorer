/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import "../signup/signup.css"
import axios from "axios"
import {  Form, Input } from 'antd';
import { useNavigate} from 'react-router-dom';
export default function signup() {
  const [data,setData] = React.useState({
    username:"",
    email:"",
    password:"",
    confirm_password:"",
  })
  const onChangeHandler = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  const navigate = useNavigate();
  const onSignup=async(event)=>{
    event.preventDefault;
    try {
      const response = await axios.post('http://localhost:3000/api/user/signup', data);
      if (response.data.success) {
        alert('Signup successful!');
        navigate('/');
      } else {
        alert('Signup failed! maybe user already exist');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Signup failed. Please try again later.');
    }
  }
   React.useEffect(()=>{
      console.log(data);
    },[data])

  return (
    <>
      <div className='signup-align' >
        <div className='heading-align'>
          <span className="title">SignUp</span>
          <span className="subtitle">Please fill the below detail to continue </span>
        </div>
        <div className='heading-align' >
          <Form onFinish={onSignup} layout='vertical'
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
              label={<span className='input-label'>Username</span>}
              name="username"
            >
              <Input className='input-style' name="username" onChange={onChangeHandler} value={data.username} />
            </Form.Item>
            <Form.Item
              label={<span className='input-label'>E-mail</span>}
              name="email"
            >
              <Input className='input-style'  name="email" onChange={onChangeHandler} value={data.email} />
            </Form.Item>
            

            <Form.Item
              label={<span className='input-label'>Password</span>}
              name="password"
            >
              <Input className='input-style' name="password" onChange={onChangeHandler} value={data.password}/>
            </Form.Item>
            <Form.Item
              label={<span className='input-label'> Confirm Password</span>}
              name="confirmpassword"
            >
              <Input className='input-style'  name="confirm_password" onChange={onChangeHandler} value={data.confirm_password}/>
            </Form.Item>
           <div className="button-container">
             <button type='submit' className="shadow__btn">Submit</button>
           </div>
           
          </Form>
        </div>
      </div>
    </>

  )
}
