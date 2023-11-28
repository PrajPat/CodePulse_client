import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav,Navbar,Container } from 'react-bootstrap';

import { Link } from 'react-scroll';

import {GiGraduateCap} from 'react-icons/gi'

import Btnlog from './Btnlog';
// import Logo from '../Assets/Image/Code_Pulse_logo.png'

export default function App() {



  
return (
	
  <div>
  
     <Navbar collapseOnSelect className='Main_nav_container mt-3 p-3 ms-5 me-5' variant='white' bg="white"  expand="lg" fixed='top' id='navbar' >
       <Container>
           <Navbar.Brand>
          <GiGraduateCap className='logo'/><b className='w-5'>CODE PULSE</b>

           </Navbar.Brand>
           <Navbar.Toggle aria-controls='responsive-nav-bar'/>
           <Navbar.Collapse id-controls='responsive-nav-bar'>
           <Nav className='ms-auto '>
               <Nav.Link>
                 <Link to="home" className='main_nav_item'>Home</Link>
               </Nav.Link>

               <Nav.Link >
                 <Link to="about" offset={-100} className='main_nav_item'>About</Link>
               </Nav.Link>

               <Nav.Link>
                  <Link to="contact" offset={-100} className='main_nav_item'>Contact</Link>
               </Nav.Link>
               <Nav.Link>
                <Link to="/blogdetails"></Link>
               </Nav.Link>

               <Nav.Link>
                   <Btnlog/>
               </Nav.Link>
              
               
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
    
   

    
  </div>
 
 
);
}
