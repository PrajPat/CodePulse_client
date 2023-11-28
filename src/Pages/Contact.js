import axios from 'axios';
import React from 'react'
import { Col, Row, Image, Form, Button, Container, Modal } from 'react-bootstrap'

import '../Contact.css';
import { TbPhoneCall } from 'react-icons/tb';
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { BsFacebook } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { Slide } from 'react-awesome-reveal';
import { useState } from 'react';
import {BsFillHandThumbsUpFill} from 'react-icons/bs';
import {BsFillEmojiSmileFill} from 'react-icons/bs';
import {GiGraduateCap} from 'react-icons/gi';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navilogin= useNavigate()

  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Comment, setComment] = useState("")

  const [show, setshow] = useState(false)

  function onshowModel(){
    setshow(true)
  }

  function onHideModel(){
    setshow(false)
  }


  function addcont() {
    const contact = {
      name: Name,
      email: Email,
      comment: Comment
    }
    axios.post("http://localhost:5000/addcontact", contact)
      .then((result) => {
        console.log(result.data)
        onshowModel()  
      }).catch((err) => {
        console.log(err)
      });
  }



  return (


    <div className='mt-5'>
    
         <Row> <div className='animate-charcter dividerr'>CONTACT</div></Row>
         
        {/* <div className='sentc'> 
          < h2 className="sentence">We are
  
   
      <div className='slidingVertical'>
      <span className='slidingVertical_span' >Best</span>
    <span className='slidingVertical_span'>Successfull</span>
    <span className='slidingVertical_span'>Happy</span>
    <span className='slidingVertical_span'>Excited</span></div>
    with you

</h2>
</div> */}

 


      <div className='contact_1'>

        <Row>
          <Col>
            <Slide direction='left'>
              <div>

                <h2 style={{ color: "#303392" }} className='contact '>Contact Info</h2>
                <div className='cText'>
                  <h5><TbPhoneCall className='cicon' />+1 (234) 567-8910</h5><br />
                  <h5><AiOutlineMail className='cicon' />contact@yourmail.com</h5><br />
                  <h5><GoLocation className='cicon' />203, Code Pulse Technology, Behind<br />Alis Steet, India</h5>
                </div>
                <Slide direction='down'>
                  <div className='bicon'>
                    <BsFacebook />
                    <FaTwitterSquare />
                    <AiFillInstagram />
                    <AiFillYoutube />
                  </div>
                </Slide>
              </div>
            </Slide>

          </Col>


          <Col>
            <Slide direction='right'>
              <div>
                <Container>
                  <Form className='formm'>
                    <Form.Group className='mt-3 '>
                      <Form.Label>Name</Form.Label>
                      <Form.Control type='text' placeholder='Enter Your Name' className='frm' onChange={(e) => setName(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mt-3'>
                      <Form.Label>Email</Form.Label>
                      <Form.Control type='text' placeholder='Enter Your Email' className='frm' onChange={(e) => setEmail(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mt-3'>
                      <Form.Label>Comment</Form.Label>
                      <Form.Control type='text' placeholder='Comment' className='comment' onChange={(e) => setComment(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Button onClick={()=>{onshowModel()}} variant='warning mt-3 w-100'>Submit</Button>
                  </Form>
                </Container>

              </div>
            </Slide>
          </Col>
        </Row>
      </div>


      <div className='back'></div>

      <Modal show={show} onHide={onHideModel}>
        <Modal.Header closeButton><h1>Good!<BsFillHandThumbsUpFill className='micon'/></h1></Modal.Header>
        <Modal.Body>
          <h4>Your Form Submited<BsFillEmojiSmileFill className='micon'/></h4>
        </Modal.Body>
      </Modal>



      <div className='footer'>
  <Row>
  <svg className="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path className="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
          </svg>
  <Col><h4 className='footerhead'><GiGraduateCap  className='footericon'/>CODE PULSE</h4>
    <h6 className='footertext'>Code Pulse is one of the best free online study provider. It offers all type of
             study material in varieties of disciplines. You can browse various type of questions related coding like
             study materials, exercise, blogs, solving problems and more.</h6>
    </Col>

    <Col><h4 className='footermenu'>Menu</h4>
      <ul>
        <li className='mt-4'>
        <Link   className='footerlink ' to="home">Home</Link>
        </li>
        <li className='mt-4'>
        <Link  className='footerlink' to="about" >About</Link>
        </li>
        <li className='mt-4'>
        <Link className='footerlink'  to="contact" >Contact</Link>
        </li >
        <li className='mt-4' onClick={()=> navilogin("/Login")}>
         <h7 className='footerlink'>Login</h7>
        
        </li>
      </ul>
      
    </Col>

    <Col>
    <h4 className='footertiltle'>Social Media</h4>
    <h6 className='footersoci '> <BsFacebook /> Facebook</h6>
    <h6 className='footersoci '>  <FaTwitterSquare /> Twitter</h6>
    <h6 className='footersoci '>  <AiFillInstagram /> Instagram</h6>
    <h6 className='footersoci '> <AiFillYoutube /> Youtube</h6>
    </Col>

    <Col><h4 className='footertiltle'>Contact</h4>
    <div className='footercont'>
                  <h6><TbPhoneCall className='cicon' /> +1(234)567-8910</h6><br />
                  <h6><AiOutlineMail className='cicon' /> contact@yourmail.com</h6><br />
                  <h6><GoLocation className='cicon' /> 203, Code Pulse Technology, Behind<br />Alis Steet, India</h6>
                </div>
    </Col>
    
  </Row>
  
      </div>
    </div>
  )
}
export default Contact
