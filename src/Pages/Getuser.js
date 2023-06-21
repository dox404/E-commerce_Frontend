import React, { useEffect, useState } from 'react'
// import axious from '../utils/Request'
import axios from 'axios'
// import { useNavigate,useState,useEffect } from 'react-router-dom'

const Getuser = () => {
    const [user, setUser] = useState([])
    

  const getData = async () => {
    axios.get('http://localhost:5050/api/v1/products').then((response) => {
        setUser(response.data.Products)
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {

    getData()
  },[])
  console.log(user)
    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}

export default Getuser
