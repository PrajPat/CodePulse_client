import React from 'react'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Btnlog = () => {
  return (
    <div>
        <Link to="Login">
        <Button variant='warning'style={{fontFamily:'times new roman'}}>Log in</Button>
        </Link>
    </div>
  )
}

export default Btnlog
