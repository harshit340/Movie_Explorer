
import { Button, Card, Form, Input } from 'antd'

import '../signin/login.css'

import google from '../assets/google.png'
import facebook from '../assets/facebook.png'

export default function page() {
  return (
    <>
    
    <header className='header-style'>
      <span style={{padding:"30px 0 0 60px" , fontSize:"20px"}}>LOGO-SPACE</span>
      <div style={{padding:"30px 60px 0 0"  }}>
      <Button type='primary' style={{padding:"5px 20px 5px 20px"}}><span>SignUp</span></Button>
      </div>
    </header>
   <div  className='main-style'>
    <Card   className='Login-card'>
     <h5 style={{color:"whitesmoke", fontSize:"20px", margin:"auto" ,textAlign:"center"}}>Welcome</h5>
     
      <Form style={{paddingTop:"40px"}}>
     <Form.Item
      label={<span style={{color:'white'}}>Username</span>}
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label={<span style={{color:'white'}}>Password</span>}
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>
    </Form>
    <h5 style={{textAlign:"right",cursor:"pointer"}}>Forgot Password ?</h5>
    <div style={{display: "flex", justifyContent: "center"}}>
    <Button style={{backgroundColor:"#87CEEB",display:"flex" , alignItems:"center" , verticalAlign:"middle"}} > <span style={{color:"black", fontWeight:"700", padding:"5px 50px 5px 50px",letterSpacing:"5px" }}>EXPLORE</span></Button></div>

    <div style={{padding:"20px" , paddingTop:"70px"}}>
    <Button style={{margin:"5px"}}  className='button-google' block>
      <img src={google.src} style={{width:"25px"}}></img>
     <span style={{color:"#1B2730",fontWeight:"600"}}>SIGN IN WITH GOOGLE</span>
    </Button>
    <Button style={{margin:"5px"}}  className='button-google' block>
      <img src={facebook.src} style={{width:"30px"}}></img>
    <span style={{color:"#1B2730" , fontWeight:"600"}}>SIGN IN WITH FACEBOOK</span>
    </Button>
    <span style={{display:"flex" , justifyContent:"center" , paddingTop:"10px" , fontSize:"15px"}}>Don't account ? <span style={{color:"blue" , paddingLeft:"5px" , cursor:"pointer"}}> create one</span></span>
    </div>
    
   </Card>

    
  </div>
  
   </>
  )
}
