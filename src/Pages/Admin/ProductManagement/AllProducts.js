import React, { useEffect, useState } from 'react'
import axios from '../../../Config/Axios'

import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from 'react-bootstrap/ListGroup';;
import Navbar from '../../Admin/Navbar/Navbar'

const Getuser = () => {
  const [products, setProducts] = useState([])


  const getData = async () => {
    axios.get('products').then((response) => {
      setProducts(response.data.Products)
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {

    getData()
  }, [])
  console.log(products)
  return (
    <>
      <Navbar />
      <center><h1>All Products</h1> </center>
      <ListGroup>
      <ListGroup.Item>1st Item in List</ListGroup.Item>
        <ListGroup.Item>2nd Item in List</ListGroup.Item>
        <ListGroup.Item>3rd Item in List</ListGroup.Item>
        <ListGroup.Item>4th Item in List</ListGroup.Item>
      </ListGroup>;

    </>
  )
}

export default Getuser
