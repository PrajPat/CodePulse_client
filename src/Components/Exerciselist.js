import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../Cardbihide.css'


import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';

function Exercise({ idx }) {

    // const navi= useNavigate();
    const [allexercise, setallexercise] = useState([])
    const [language, setlanguage] = useState([])

    // useEffect(() => {

    //     axios.get("http://localhost:5000/allexercise")
    //         .then((result) => {
    //             setallexercise(result.data)
    //         }).catch((err) => {
    //             console.log(err)
    //         });
    // }, [])


    const exersuzwTypes = ["Javascript", "C++", "Python", "Java", "C"]

    useEffect(() => {

        const lang = {
            language: exersuzwTypes[idx]
        }

        axios.post("http://localhost:5000/getexerbylang", lang)
            .then((result) => {
                setlanguage(result.data)
            }).catch((err) => {
                console.log(err)
            });
    }, [])


    return (
        <div className='background' >
            <h1 align="center"><b><u>Our<span style={{ color: '#fcbe03' }}>Exercise</span></u></b></h1>

            <Container>
                <Row>
                    {
                        language.map((exercise, Idx) => {
                            return (

                                <Card className='crdcss'>
                                    <Card.Body >
                                        <h4>{Idx + 1}:{exercise.ExerciseSnippet}</h4>
                                        <h5 className='mt-3 ms-lg-5'>{exercise.Language}</h5>
                                        <h5 className='mt-3 ms-lg-5'>a.{exercise.OptionA}</h5>
                                        <h5 className=' ms-lg-5'>b.{exercise.OptionB}</h5>
                                        <h5 className=' ms-lg-5'>c.{exercise.OptionC}</h5>
                                        <h5 className=' ms-lg-5'>d.{exercise.OptionD}</h5>
                                    </Card.Body>
                                    <Card.Footer>

                                        <Accordion defaultActiveKey="1">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header><h4>ShowAns</h4></Accordion.Header>
                                                <Accordion.Body>
                                                    <h5>Ans: {exercise.SnippetAns}</h5>
                                                    <h5>Note: {exercise.ExerciseNote}</h5>

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

export default Exercise
