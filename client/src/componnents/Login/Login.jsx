import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'


import {React,useState} from 'react'


function Login() {

  const mynav = useNavigate()
    
    const [loginInfo,setLoginInfo] = useState({
        email:"",
        password:""
    })
    const[erros,setErrors] = useState([])


    const hadnleChange = (e) => {
        setLoginInfo({
            ...loginInfo,[e.target.name]:e.target.value
        })
    }

    async function loginHand(e){
      e.preventDefault()
      axios.post('http://localhost:8000/api/user/login',loginInfo,{withCredentials:true})
          .then((data) => {
              console.log('login in successfully')
              console.log(data)
              mynav('/Main')
          })
          .catch((err) => {
              console.log(err)
              setErrors(err.response.data.message)
              console.log(err.response.data.message)
          })


  }

  return (
    <div className='modal-40w'>
        <Form onSubmit={loginHand}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) =>hadnleChange(e)} name="email" value={loginInfo.email} />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) =>hadnleChange(e)} name="password" value={loginInfo.passowrd} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </div>
  )
}

export default Login