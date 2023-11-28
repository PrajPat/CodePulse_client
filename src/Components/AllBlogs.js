import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import '../Cardbihide.css';


import { Slide } from 'react-awesome-reveal';

import blog from '../Assets/Image/blogs.jpg'
import { useNavigate } from 'react-router-dom';

function AllBlogs() {
  const navi = useNavigate();

  const [allblogs, setallblogs] = useState([])
  useEffect(() => {
    axios.get("http://localhost:5000/allpost")
      .then((result) => {
        setallblogs(result.data)
      }).catch((err) => {
        console.log(err)
      });
  }, [])

  return (
    <div className='background'>
      <div>
        <Image className='learning' src={blog}></Image>
      </div>
      <h1 align="center"><b><u>All<span style={{ color: '#fcbe03' }}>Blogs</span></u></b></h1>
      <Container id='guide' className='Guid_Container'>

        <Row>
          {
            allblogs.map((blogs) => {
              return (


                <Slide direction='right' triggerOnce={true}>
                  <div className="blogcard frm">
                    <Row>
                      <Col className='w-10'> <Image className='blogImage' src={`http://localhost:5000${blogs.PostCoverImage}`} /></Col>
                      <Col > <div className="blog_content">
                        <h3 className="blog_title">Title:{blogs.PostTitle}</h3>

                        <h6 className="blog_subtitle">Description:{blogs.PostDescription}</h6>
                        <Button variant='outline-primary' onClick={() => navi(`/blogdetails/${blogs._id}`)}>ReadMore..</Button>
                      </div></Col>
                    </Row>
                  </div>
                </Slide>



              )
            })

          }
        </Row>
      </Container>
    </div>
  )
}

export default AllBlogs
