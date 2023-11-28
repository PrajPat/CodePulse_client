import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Button ,Row,Card, Container,Image, Col } from 'react-bootstrap';
import { Slide } from 'react-awesome-reveal';
import learning from '../Assets/Image/e-learning.jpg'

import '../Cardbihide.css'



function StudyMaterial() {

    const [allstudymaterial, setallstudymaterial] = useState([])
    useEffect(()=>
    {
        axios.get("http://localhost:5000/allstudymaterial")
        .then((result)=>{
            setallstudymaterial(result.data)
        }).catch((err)=>{
            console.log(err)
        });
    },[])
  return (
    <div className='background'>
     <div>
        <Image className='learning' src={learning}></Image>
      </div>
       <h1 align="center"><b><u>All<span style={{color:'#fcbe03'}}>StudyMaterial</span></u></b></h1>
       
      <Container id='guide' className='Guid_Container'>
        <Row>
            {
                allstudymaterial.map((Material,Idx)=>{
                    return(
                        
                            <Col sm={12} md={3} lg={4}>
                          
                      <div className="Gride_Card">
                        <Image src={`http://localhost:5000${Material.StudyMaterialCoverImage}`} className='Guide_Image' />
                        <div className="card_content">
                          <span className="card_title">Category:{Material.StudyMaterialCategory}</span>
                          <span className="card_title">Title:{Material.StudyMaterialTitle}</span>
                          <span className="card_subtitle"><a href={`http://localhost:5000${Material.StudyMaterialFilePath}`} target='_blank'> View</a></span>
                          
                        </div>
                      </div>
                 

                 
                        </Col>
                            
                      
                    )
                })
            }
        </Row>
      </Container>
    </div>
  )
}

export default StudyMaterial
