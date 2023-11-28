import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { BsBookHalf } from 'react-icons/bs';
import { BsFillQuestionSquareFill } from 'react-icons/bs';
import { TfiWrite } from 'react-icons/tfi';
import { GiPapers } from 'react-icons/gi';
import 'animate.css';
import home1 from '../Assets/Image/image1.jpg';
import home2 from '../Assets/Image/image8.jpg';
import home3 from '../Assets/Image/image12.jpg';
import MyNavbar from '../Pages/MyNavbar'
import '../Code.css'
import { useNavigate } from 'react-router-dom';


function Home() {
  const navi = useNavigate()

  return (


    <div className='component'>

      <MyNavbar />

      <Carousel className='cara'>
        <Carousel.Item interval={1500}>

          <Image className='caraimg' src={home1} />

          <Carousel.Caption className='animate__animated animate__zoomIn'>
            <h1 className='caratext'>Get Your <span className='texttt'>Knowledge</span></h1>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1500} >

          <Image className='caraimg' src={home2} />

          <Carousel.Caption className='animate__animated animate__zoomIn'>
            <h1 className='caratext'>Learn The <span className='texttt'>Fun</span> Way</h1>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item interval={1500} >
          <Image className='caraimg' src={home3} />
          <Carousel.Caption className='animate__animated animate__zoomIn'>
            <h1 className='caratext'>Increase Your <span className='texttt'>Skills</span> In No Time</h1>

          </Carousel.Caption>


        </Carousel.Item>

      </Carousel>



      <div className='d-flex justify-content-center remove'>
        <Row>
          <Col>
            <Card className='card' onClick={()=> navi("/allblogs")}>
              <Card.Body className='cardbody'>
                <Card.Title className='cardtitle'><TfiWrite className='icon' /></Card.Title>
                <Card.Title className='cardtitle'>Blogs</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='card ' onClick={()=> navi("/allexercise")}>
              <Card.Body className='cardbody'>
                <Card.Title className='cardtitle'><GiPapers className='icon' /></Card.Title>
                <Card.Title className='cardtitle'>Exercise</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='card' onClick={()=> navi("/allproblems")}>
              <Card.Body className='cardbody'>
                <Card.Title className='cardtitle'><BsFillQuestionSquareFill className='icon' /></Card.Title>
                <Card.Title className='cardtitle'>Problems</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='card'  onClick={()=> navi("/allstudymaterial")}>
              <Card.Body className='cardbody'>
                <Card.Title className='cardtitle'><BsBookHalf className='icon' /></Card.Title>
                <Card.Title className='cardtitle'>Study Material</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>







    </div>


  )
}

export default Home
