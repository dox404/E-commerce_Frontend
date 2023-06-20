import React from 'react'
import Orders from '../Orders/Orders'
import { Routes, Route,Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>This is profile page</h1>
      <p>Go to orders <Link to="/orders">About</Link></p>
    </div>
  )
}

export default Profile