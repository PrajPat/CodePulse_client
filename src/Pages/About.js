import React, { useEffect, useState } from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';
import about from '../Assets/Image/iabout.jpg';
import '../About.css';
import { Slide, slide } from 'react-awesome-reveal'
import C from '../Assets/Image/cimg.png'
import Cpp from '../Assets/Image/cpp.png'
import Python from '../Assets/Image/python.png'
import Java from '../Assets/Image/java.png'
import Javascript from '../Assets/Image/JavaScript.png'
import { GiPapers } from 'react-icons/gi';
import { BsFillQuestionSquareFill } from 'react-icons/bs';
import { BsBookHalf } from 'react-icons/bs';

import { TfiWrite } from 'react-icons/tfi';
import axios from 'axios';

function About() {


  const [blogCount, setblogCount] = useState(0)
  const [problemcount, setproblemcount] = useState(0)
  const [studymcount, setstudymcount] = useState(0)
  const [exercisecount, setexercisecount] = useState(0)

  useEffect(()=>{
    axios.get("http://localhost:5000/excersisecount")
    .then((result)=>{
      setexercisecount(result.data.Exercisecount)
    }).catch((err)=>{
      console.log(err)
    });
  },
  [])

  


  useEffect(()=>{
    axios.get("http://localhost:5000/getpostcount")
    .then((result)=>{
      setblogCount(result.data.blogsCount)
    }).catch((err)=>{
      console.log(err)
    });
  },
  [])

  useEffect(()=>{
    axios.get("http://localhost:5000/studymcount")
    .then((result)=>{
      setstudymcount(result.data.StudyMcount)
    }).catch((err)=>{
      console.log(err)
    });
  },
  [])

  useEffect(()=>{
    axios.get("http://localhost:5000/problemscount")
    .then((result)=>{
      setproblemcount(result.data.Problemscount)
    }).catch((err)=>{
      console.log(err)
    });
  },
  [])
  return (
    <div className='component'>




      <div className='about'>

        {/* <hr class="new5"/> */}
        <Row> <div className='animate-charcter divider'>ABOUT</div></Row>

        <Row>


          <Col className='abouttext   p-4 '>



            <Slide direction='left'>
              <h4 className='mt-4'> Code Pulse is one of the best free online study provider. It offers all type of
                study material in varieties of disciplines. You can browse various type of questions related coding like
                study materials, exercise, blogs, solving problems and more.

                This site is always available for you. It includes all study material like pdf, books
                with learning exercises. The platform provides all type of problems for practicing. which are similar
                to the on-campus discussion group and a textbook. It has an online discussion where
                students can post comments to teaching assistants.
              </h4></Slide>

            <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1340 320">
              <path fill="#fcbe03" fill-opacity="1" d="M0,32L48,53.3C96,75,192,117,288,144C384,
              171,480,181,576,176C672,171,768,149,864,133.3C960,
              117,1056,107,1152,128C1248,149,1344,203,1392,229.3L1440,256L1440,
              320L1392,320C1344,320,1248,320,1152,320C1056,320,
              960,320,864,320C768,320,672,320,576,
            320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>


          </Col>



          <Col className='about-image'>

            <Image src={about} />


          </Col>


          <div id='scroll-container'><div id='scroll-text'><b><h2 style={{color:'blue'}}>Available For You</h2></b></div></div>

          
          <Row className='mt-4'>

            <Col sm={12} md={6} lg={2} className='me-4' > <div class="Aboutcard"><div><Image className='coverimg' src={C} /></div>
            <p class="card__title">
        C is an imperative procedural language supporting structured programming...

    <a  href="https://www.javatpoint.com/c-programming-language-tutorial">overview</a>
  </p>
           
    </div>
            </Col>
            <Col sm={12} md={6} lg={2} className='me-4'><div class="Aboutcard"><div><Image className='coverimg' src={Cpp} /></div>
         
    <p class="card__title">
      C++ is a cross platform language that can be used to create high performance applications...
     <a href="https://www.javatpoint.com/cpp-tutorial">overview</a>
  </p></div></Col>

            <Col sm={12} md={6} lg={2} className='me-4'> <div class="Aboutcard"><div><Image className='coverimg' src={Python} /></div>
           
    <p class="card__title">
      Python is programming language often used to build websites and software, conduct data analysis...
    <a href='https://www.javatpoint.com/python-tutorial'>overview</a>
  </p></div></Col>


            <Col sm={12} md={6} lg={2} className='me-4'> <div class="Aboutcard"><div><Image className='coverimg' style={{ height: 220 }} src={Java} /></div>
           
    <p class="card__title">
      Java is object oriented programming language that produces software for multiple platforms...
      <a href='https://www.javatpoint.com/java-tutorial'>overview</a>
  </p></div></Col>

            <Col sm={12} md={6} lg={2} className='me-4' > <div class="Aboutcard"><div><Image className='coverimg ' style={{ height: 220 }} src={Javascript} /></div>
            
    <p class="card__title">
      Javascript is lightweight , interpreted , in time compiled programming language with first class functions...
      <a href='https://www.javatpoint.com/javascript-tutorial' target='_blank'>overview</a>
  </p></div> </Col>

          </Row>
          
        </Row>
      </div>
      <div className='extra'><h3 className='check mt-5'>check some interesting facts about our website</h3> 
      <Row className='column'>
       <Col  sm={12} md={6} lg={2}><div><TfiWrite className='checkicon'/><div className='mt-3'>{blogCount}</div></div>Blogs</Col>
    
      <Col  sm={12} md={6} lg={2} ><div><GiPapers className='checkicon'/><div className='mt-3'>{exercisecount}</div></div>Exercise</Col>
      <Col  sm={12} md={6} lg={2}><div><BsFillQuestionSquareFill className='checkicon'/><div className='mt-3'>{problemcount}</div></div>Problems</Col>
      <Col  sm={12} md={6} lg={2}><div><BsBookHalf className='checkicon'/><div className='mt-3'>{studymcount}</div></div>StudyMaterial</Col>
      </Row>
</div>
    
    </div>
  )
}

export default About
