import React, { useEffect, useState } from 'react'
import axios from '../../../Config/Axios'
import Pagination from '../../../Components/Pagination/Pagination';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';;
// import Navbar from '../../Admin/Navbar/Navbar'



const Getuser = () => {
  const [products, setProducts] = useState([])
  const [showPerPage, setshowPerPage] = useState(10)
  const [pagination,setPagination] = useState({
    start:0,
    end:showPerPage
  })


 const onPaginationChange=(start,end)=>{
  setPagination({start:start,
    end:end})
 }

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
  // console.log(products)
  return (
    <>
      {/* <Navbar /> */}
      <center><h1>All Products</h1> </center>
      {
        products.slice(pagination.start,pagination.end).map((value) => {
          return (<ListGroup>
            <ListGroup.Item> <img width="200px" height="200px" variant="top" src={value.image
                    } />{value.name} ₹ {value.price} <Button className='btn btn-primary'>Edit</Button> <Button className='btn btn-danger'>Delete</Button></ListGroup.Item>
           
          </ListGroup>
          )
      })}
      
    <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={products.length}/>

    </>
  )
}

export default Getuser
