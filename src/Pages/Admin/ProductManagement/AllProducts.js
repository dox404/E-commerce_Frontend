import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import axios from '../../../Config/Axios'
import Pagination from '../../../Components/Pagination/Pagination';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';;
// import Navbar from '../../Admin/Navbar/Navbar'




const Getuser = () => {
  // const [searchParams] = useSearchParams();
  // //pagination 
  // const [meta, setMeta] = useState({
  //   has_next: false,
  //   current_page: 1, 
  //   total: 0
  // })
  // const [filters, setFilters] = useState({
  //   page: 1,
  //   keyword: ''
  // })




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
    axios.get('products'
      // params:filters
    ).then((response) => {
      setProducts(response.data.Products)
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    // console.log(searchParams.get('keyword'))
    // const __tempFilter = {
    //   keyword: searchParams.get('keyword') || null,
    //   page: searchParams.get('page') || null
    // }
    // setFilters(__tempFilter)
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
