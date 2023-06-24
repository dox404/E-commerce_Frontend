import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddProduct.css'
import { useFormik } from 'formik'
// import axios from '../../Config/Axios'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ImagePreview from '../../../Components/ImagePreview/ImagePreview';
import Navbar from '../../Admin/Navbar/Navbar'


const AddProducts = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  const onSubmit = async (values) => {
    // const formData = new FormData()
    // formData.append("file", values.image);
    
    const payload = {
      name: values.name,
      description: values.description,
      price: values.price,
      image: formData
    }

    try {
      setLoading(true)
      const { data } = await axios.post('http://localhost:5050/api/v1/products/new', payload)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }





  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      image: null
    },
    validateOnBlur: true,
    onSubmit,
    // validationSchema: LoginSchema

  })
  const payload = formik.values
  // console.log(payload)

  console.log(formik)
  // console.log(formik.values.file)
  console.log(formik.values.image)
  return (<>
  <Navbar/>

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
        <Form.Control type="file" id="image" placeholder="URL"  onChange={(event) => {
          formik.setFieldValue("image", event.currentTarget.files[0]);
        }} />
        {formik.values.image && <ImagePreview file={formik.values.image} />}
      </Form.Group>

      {loading ? <Button className="btn btn-primary btn-lg" disabled>
        Creating ...
      </Button> :
        <Button className="btn btn-primary btn-lg" type="submit" >
          Add Product
        </Button>
      }
    </Form>
  </>
  )
}

export default AddProducts
