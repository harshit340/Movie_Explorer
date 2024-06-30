import React from 'react'
import "../signup/signup.css"
import { Button, Form, Input } from 'antd';
export default function signup() {
  return (
    <>
      <div className='signup-align' >
        <div className='heading-align'>
          <span className="title">SignUp</span>
          <span className="subtitle">Please fill the below detail to continue </span>
        </div>
        <div className='heading-align' >
          <Form layout='vertical'
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
              <Input className='input-style' />
            </Form.Item>
            <Form.Item
              label={<span className='input-label'>Age</span>}
              name="Age"
            >
              <Input className='input-style'/>
            </Form.Item>

            <Form.Item
              label={<span className='input-label'>Password</span>}
              name="password"
            >
              <Input className='input-style' />
            </Form.Item>
            <Form.Item
              label={<span className='input-label'> Confirm Password</span>}
              name="confirm password"
            >
              <Input className='input-style'/>
            </Form.Item>
           <div className="button-container">
             <button className="shadow__btn">
    Submit
</button>
           </div>
           
          </Form>
        </div>
      </div>
    </>

  )
}
