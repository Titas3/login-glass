import{FacebookFilled,GoogleOutlined,TwitterOutlined} from "@ant-design/icons"
import React from "react";
import {Button ,Form,Divider, Input, Typography, message} from 'antd'
import './App.css';

function App() {
  const login=()=>{
    message.success("login Successful")
  }
  return (
    <div className="appBg">
    <form className='loginForm' onSubmit={ login }>
    <Typography.Title>Welcome Back!</Typography.Title>
    <Form.Item rules={[
    {
      required:true,
      type:"email",
      message: "Please enter valid email",
    }

    ]} 
    label='Email' 
    name={'myEmail'}>

    <Input placeholder='Enter Your Email'/>
    </Form.Item>
    <Form.Item rules={[
      {
        required:true,
        message: "Please enter your password",
      },
  
      ]} label='Password' name={'myPassword'}>
    <Input.Password placeholder='Enter Your Password'/>
    </Form.Item>
    <Button type='primary' htmlType="submit" block>Login</Button>
    <Divider style={{borderColor:"black"}}>or Log In With</Divider>
    <div className="sociallogin">
    <GoogleOutlined className="socialIcon" onClick={login} style={{color:"red"}}/>
    <FacebookFilled className="socialIcon" onClick={login} style={{color:"blue"}}/>
    <TwitterOutlined className="socialIcon" onClick={login} style={{color:"cyan"}}/> 
    </div>
    </form>
      
    </div>
  );
}

export default App;
