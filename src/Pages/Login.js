import React, { useState } from 'react'
import { Button, Container, Form, Modal, Row } from 'react-bootstrap'
import {  useNavigate } from 'react-router-dom';
import '../Login.css';
import mainimg from '../Assets/Image/c1.jpeg';
import girl from '../Assets/Image/girl.png';
import { Slide } from 'react-awesome-reveal';
import { useDispatch } from 'react-redux';
import requestInstance from "../Utils/axios_instance"
import { login } from '../Reduxwork/UserSlice'
import { UserLogin } from '../Utils';
import {CgProfile} from 'react-icons/cg'

function Login() {
  const [userEmail, setuserEmail] = useState("")
  const [userPassword, setuserPassword] = useState("")

  const navi = useNavigate()
  const dispatcher = useDispatch()

  const [show, setshow] = useState(false)

  function onshowModel() {
    setshow(true)
  }

  function onHideModel() {
      setshow(false)
      navi("/")
    }


  function loginUser() {
    const userData = {
      email: userEmail,
      pass: userPassword
    }
    requestInstance().post(UserLogin, userData)
      .then((result) => {
        console.log(result.data)
        let userData = result.data.user
         userData.idToken = result.data.token
         onshowModel()
         dispatcher(login(userData))
        
        // alert("Login Success")
       
      }).catch((err) => {
        console.log(err)
        alert(err.response.data)
      })
  }

  return (
    <div>
      <div><svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,700 C 0,700 0,350 0,350 C 106.64285714285714,296.3928571428571 213.28571428571428,242.78571428571428 335,272 C 456.7142857142857,301.2142857142857 593.5000000000001,413.25 704,449 C 814.4999999999999,484.75 898.7142857142856,444.2142857142857 1017,415 C 1135.2857142857144,385.7857142857143 1287.6428571428573,367.8928571428571 1440,350 C 1440,350 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="#fcbe03" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 350)"></path></svg></div>
      <div className='loginnn'>
        <Slide direction='up'> <div >
          <img className='girl' src={girl} alt="pic" />
        </div></Slide>
        <div className='main '>
          <Slide direction='left'><div className='img'>
            <img src={mainimg} alt="pic" />
          </div></Slide>


          <div className='cont'>
            <Container>
              <h1 style={{ color: "#303392" }} className='text'>Login</h1>
              <h6>Welcome back.Please login in to your account.</h6>
              <Row>
                <Form>
                  <Form.Label>Enter Username</Form.Label>
                  <Form.Control type="Email" className='log' onChange={(e) => setuserEmail(e.target.value)} />
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="Password"  className='log' onChange={(e) => setuserPassword(e.target.value)} />

                  <div className='d-grid gap-2 mt-3' >
              <div>      <Button variant='warning' className='w-75' onClick={() => loginUser()} >Login</Button></div>
                   <div> <Button  variant='success' className='w-75' onClick={() => navi('/registration')} >Registration</Button></div>
                    <div className='mt-3'><a href='#' >Forget Password?</a></div>
                  </div>

                  <p className="mt-3">
                    <span>Or Login With</span>
                    <span><a href="#" className='me-2 ms-2'>FaceBook</a></span>
                    <span><a href="#" className='me-2'>Gmail</a></span>
                    <span><a href="#" className='me-2'>LinkedIn</a></span>
                  </p>
                </Form>
              </Row>
            </Container>
          </div>

        </div>
      </div>
      <Modal show={show} onHide={onHideModel}>
        <Modal.Header closeButton><h1 className='logicon'><CgProfile /></h1></Modal.Header>
        <Modal.Body>
          <h3 className='logtext'>Welcome....</h3>
        </Modal.Body>
      </Modal>


    </div>
  )
}

export default Login