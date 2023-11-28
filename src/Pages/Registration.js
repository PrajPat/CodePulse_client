import React, { useState } from 'react'
import { Image, Container, Form, Button, Modal } from 'react-bootstrap'
import Regi from '../Assets/Image/result.png'
import '../Registration.css'
import { Slide } from 'react-awesome-reveal'

import { BsFillCheckCircleFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import requestInstance from '../Utils/axios_instance'
import { UserRegister } from '../Utils'
import { register } from '../Reduxwork/UserSlice'



function Registration() {
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Mobno, setMobno] = useState("")
  const [Pass, setPass] = useState("")
  const navi = useNavigate()

  
  const dispatcher = useDispatch()

  const [show, setshow] = useState(false)

  function onshowModel() {
    setshow(true)
  }

  function onHideModel() {
      setshow(false)
      navi("/Login")
    }


  function registerUser() {
    const userData = {
      name: Name,
      email: Email,
      mobileno: Mobno,
      pass: Pass
    }


    requestInstance().post(UserRegister, userData)
      .then((result) => {
        // console.log(result.data)

        let userData = result.data.registerduser
        userData.idToken = result.data.token

        dispatcher(register(userData))
        
        // alert("Registration")

      }).catch((err) => {
        console.log(err)
      });



    // axios.post("http://localhost:5000/addregister",Registration)
    // .then((result) => {
    //   console.log(result.data)
    //   onshowModel()  
    // }).catch((err) => {
    //   console.log(err)
    // });
  }

  return (

    <div >
      <div>
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,700 C 0,700 0,350 0,350 C 151.10714285714283,424.3928571428571 302.21428571428567,498.7857142857143 409,470 C 515.7857142857143,441.2142857142857 578.2499999999999,309.25 681,282 C 783.7500000000001,254.75 926.7857142857142,332.2142857142857 1060,361 C 1193.2142857142858,389.7857142857143 1316.607142857143,369.8928571428571 1440,350 C 1440,350 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="#fcbe03" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 350)"></path></svg>
      </div>

      <div className='regcontainer'>
        <Slide direction='right'> <div>
          <Image className='imge' src={Regi} />
        </div></Slide>
        <Slide>
          <div className='mainnn'>

            <Container className='reg'>
              <h3 style={{ color: '#303392' }} className='mb-3 textR'>Registration Form</h3>
              <Form>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type='text' className='regi' placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='text'className='regi' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Mobile No</Form.Label>
                  <Form.Control type='number' className='regi' placeholder='Enter your number' onChange={(e) => setMobno(e.target.value)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' className='regi' placeholder='Enter your password' onChange={(e) => setPass(e.target.value)}></Form.Control>
                </Form.Group>
              </Form>
              <Button className='mt-3 w-100' variant='warning' onClick={() =>{ registerUser()
                                                                    onshowModel()}}>Submit</Button>
             <div className='mt-2 ms-4'>  <Link  to="/Login">AlreadyRegi</Link></div>
            </Container>
          </div>
        </Slide>
      </div>
      
      <Modal show={show} onHide={onHideModel}>
        <Modal.Header closeButton><h1></h1><BsFillCheckCircleFill className='regicon'/></Modal.Header>
        <Modal.Body>
          <h4 className='regtext'>Thank You For Registration</h4>
        </Modal.Body>
      </Modal>


    </div>
  )
}

export default Registration
