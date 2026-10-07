import React from 'react'
import Orders from '../Orders/Orders'
import { Routes, Route,Link } from "react-router-dom";

import Navbar from '../../Components/Navbar/Navbar'
const data =JSON.parse(localStorage.getItem('user'))
console.log(data)
const Profile = () => {

  return (
    <div>
    <Navbar/>
      <h1>{data.name}</h1>
      <p>Go to orders <Link to="/orders">About</Link></p>
    </div>
  )
}

export default Profile