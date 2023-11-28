import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import requestInstance from '../Utils/axios_instance'
import { AddComment } from '../Utils'
// import blogdetailsimg from '../Assets/Image/blogdetails.png'


const BlogDetails = () => {

    const { blogId } = useParams()

    const [blogdetails, setblogdetails] = useState({
        PostComment: [],
        PostCoverImage:"",

    })

    const [blogcomment, setblogcomment] = useState("")

    function addcomment() {
        const comment = {
            _id: blogId,
            Comment: {
                Comment: blogcomment
            }
        }
        console.log(comment)
        axios.post("http://localhost:5000/addcomm", comment)
            .then((result) => {
                console.log(result.data)
                setblogcomment(result.data)
                alert("comment added")
            }).catch((err) => {
                console.log(err)
                alert("ERR")
            });
            window.location.reload(false);
            
    }

    useEffect(() => {
        const data = {
            id: blogId
        }
        axios.post("http://localhost:5000/getpostbyid", data)
            .then((result) => {
                console.log(result.data)
                setblogdetails(result.data)
            }).catch((err) => {
                console.log(err)
            });
    },
        {})


    return (
        <div>

            <h1 align="center" style={{ color: '#fcbe03' }}><u>BlogDetails</u></h1>

            <div> <Image className='blogImage' src={`http://localhost:5000${blogdetails.PostCoverImage}`} /></div>
            <div className=''>
                
                
                <h2 align="center" className='mt-5' style={{color:'blue'}}><u>{blogdetails.PostTitle} Blog</u></h2>

                <h3 className='mt-5 p-5 blogdetailsdes frm'>{blogdetails.PostDescription}</h3>

            </div> 
            <div className='blogcomm'>
                {
                    blogdetails.PostComment.map((comment) => {
                        return (
                            <h3><u><span style={{color:'blue'}}>Comment:</span></u> {comment.Comment}</h3>
                        )
                    })
                }
            </div>


            <div>
                <h2 align="center"><b><u>Add <span style={{ color: '#fcbe03' }}>Comment</span></u></b></h2>

                <Form className='commentfrm' >

                    <Form.Group>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control type='text' placeholder='Add comment' onChange={(e) => setblogcomment(e.target.value)} />
                    </Form.Group>
                    <Button onClick={() => addcomment()} className='commbtn'>Add Comment</Button>
                </Form>
                </div>
            </div>

        
    )
}

export default BlogDetails
