import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Row, Col, Image } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import '../Cardbihide.css'
import prob from '../Assets/Image/problem.png';


function Problems() {
    const [allproblems, setallproblems] = useState([])
    useEffect(()=>
    {
        axios.get("http://localhost:5000/allproblem")
        .then((result)=>{
            setallproblems(result.data)
        }).catch((err)=>{
            console.log(err)
        });
    },[])
  return (
    <div className='background'>
      <div>
        <Image className='learning' src={prob}></Image>
      </div>
   <h1 align="center"><b><u>All<span style={{color:'#fcbe03'}}>Problems</span></u></b></h1>
      <Container>
        <Row>
            {
                allproblems.map((Problems,Idx)=>{
                    return(
                        
                            
                            <Card className='crdcss'>
                                <Card.Body>
                                <h4>{Idx+1}.<spam className=' ms-lg-4'>Title:{Problems. ProblemTitle}</spam></h4>
                                <h5 className=' ms-lg-5'>Category:{Problems. ProblemsCategory}</h5>
                                   
                                <h5 className=' ms-lg-5'>Input:{Problems. ProblemsSampleInput}</h5>
                                </Card.Body>
                                <Card.Footer>
                                
                                    <Accordion defaultActiveKey="1">
                                    <Accordion.Item eventKey="0">
                                         <Accordion.Header><h4>ShowAns</h4></Accordion.Header>
                                            <Accordion.Body>
                                                <h5>Output: {Problems.ProblemsSampleOutput}</h5>
                                                <h5>Description: {Problems.ProblemsDescription}</h5>
                                                <h5>Explanation: {Problems.ProblemsExplanation}</h5>
                                                <h5>Code: {Problems.ProblemCode}</h5>
                                                
                                        
                                              </Accordion.Body>
                                                </Accordion.Item>
      
                                                      </Accordion>
                                                      
                                </Card.Footer>
                            </Card>
                           
                    ) 
                })
            }
        </Row>
      </Container>
    </div>
  )
}

export default Problems
