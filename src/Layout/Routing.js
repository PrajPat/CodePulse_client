import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Main from '../Pages/Main'
import Registration from '../Pages/Registration'

import AllBlogs from '../Components/AllBlogs'
import Exercise from '../Components/Exercise'
import Problems from '../Components/Problems'
import StudyMaterial from '../Components/StudyMaterial'
import ProtectedRoute from './ProtectedRoute'
import { useSelector } from 'react-redux'
import BlogDetails from '../Components/BlogDetails'
const Routing = () => {
  const { isLogedin } = useSelector((state) => state)
  return (
    <div>

      <Router>

        <Routes>

          <Route path="/" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/allblogs" element={<ProtectedRoute isSignin={isLogedin}> <AllBlogs /> </ProtectedRoute>} />
          <Route path="/allexercise" element={<ProtectedRoute isSignin={isLogedin}><Exercise /></ProtectedRoute>} />
          <Route path="/allproblems" element={<ProtectedRoute isSignin={isLogedin}><Problems /></ProtectedRoute>} />
          <Route path="/allstudymaterial" element={<ProtectedRoute isSignin={isLogedin}><StudyMaterial /></ProtectedRoute>} />
 <Route path="/blogdetails/:blogId" element={<BlogDetails/>}/> 
        </Routes>

      </Router>


    </div>
  )
}

export default Routing
