import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddProduct.css'
import { useFormik } from 'formik'
import axios from '../../Config/Axios'


const AddProducts = () => {

    const onSubmit=(value)=>{
        axios.post('products/new',payload).then((response) => {
            // setProducts(response.data.Products)
            console.log(response)
          }).catch((error) => {
            console.log(error);
          })
    }





    const formik = useFormik({
        initialValues: {
            name: "",
            description:"",
            price: "",
            image:""
        },
        validateOnBlur: true,
        onSubmit,
        // validationSchema: LoginSchema
    
      })
      const payload=formik.values
      console.log(payload)
  return (<>
   

<Form className="mx-auto my-5 w-50" method="POST" onSubmit={formik.handleSubmit}>
<h1>Add Product</h1>
<Form.Group className="mb-3">
  <Form.Label>Product Name</Form.Label>
  <Form.Control type="text" placeholder="Enter Product Name" id="name" value={formik.values.name} onChange={formik.handleChange} />
 

</Form.Group>

<Form.Group className="mb-3">
  <Form.Label>Pricce</Form.Label>
  <Form.Control type="text" id="price" placeholder="Price" value={formik.values.price} onChange={formik.handleChange} />
  
</Form.Group>
<Form.Group className="mb-3">
  <Form.Label>Description</Form.Label>
  <Form.Control type="text" id="description" placeholder="Description" value={formik.values.description} onChange={formik.handleChange} />
  
</Form.Group>
<Form.Group className="mb-3">
  <Form.Label>Image</Form.Label>
  <Form.Control type="text" id="image" placeholder="URL" value={formik.values.image} onChange={formik.handleChange} />
 
</Form.Group>


<Button className="btn btn-primary btn-lg" type="submit">
  Add Product
</Button>

</Form>
</>
  )
}

export default AddProducts
