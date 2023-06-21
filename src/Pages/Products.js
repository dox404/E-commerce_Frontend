import React, { useEffect, useState } from 'react'
import axios from '../Config/Axios'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from '../Components/Navbar/Navbar'

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
  },[])
  console.log(products)
    return (
        <>
        <Navbar/>
        <center><h1>All Products</h1> </center>
          <div className="container">
        <div className="row">
          {/* <h1 className="text-center">The News App</h1> */}


          {
            products.map((value) => {
              return (
                <div className="col-md-4 my-5 ">
                  <Card key={value.id}>
                    <Card.Img variant="top" src={value.image
                    } />
                    <Card.Body>
                      <Card.Title>{value.name}</Card.Title>
                      <Card.Text>
                        {value.description}
                      </Card.Text>
                      <Card.Text>
                      ₹ {value.price}
                      </Card.Text>
                      <Button className='btn btn-primary' href={value.url} target="_blank">Buy</Button>
                      <Button className='btn btn-danger' href={value.url} target="_blank">Add to cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              )
            })}


        </div>
      </div>
        </>
    )
}

export default Getuser
