import React, { useState, useEffect } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'
import axios from 'axios'


function BasicExample() {


  const [products, setProducts] = useState([])
  const GetProducts = () => {
    // console.log('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7be89bf099a7469d946290f8beba9091')

    axios.get('https://fakestoreapi.com/products')
      .then(function (response) {
        setProducts(response.data)
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })


  }
  useEffect(() => {
    GetProducts()
  }, [])

  // console.log(products)

  return (
    // <Card style={{ width: '18rem' }} className="mt-5 card-container">
    //   <Card.Img variant="top" src="https://i.gadgets360cdn.com/products/large/redmi-note-12-5g-pro-plus-db-gadgets360-800x600-1673019783.jpg" />
    //   <Card.Body>
    //     <Card.Title>Redmi Note 10 pro</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Button variant="primary" className='btn btn-space'>Buy</Button>

    //     <Button variant="danger" className='btn btn-space'>Add to cart</Button>
    //   </Card.Body>
    // </Card>
    <>
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
                      <Card.Title>{value.title}</Card.Title>
                      <Card.Text>
                        {value.description}
                      </Card.Text>
                      <Card.Text>
                        ${value.price}
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
  );
}

export default BasicExample;