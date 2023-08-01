import React, { useState} from 'react'
import './Signup.css'
import { useFormik } from 'formik'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ImagePreview from '../../Components/ImagePreview/ImagePreview';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Signup() {
    const navigate=useNavigate()
    const [loading, setLoading] = useState(false)



    const onSubmit = async (values) => {
        console.log(values.image)
        console.log(values.name)
        const formData = new FormData()
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("password", values.password);
        formData.append("address", values.address);
        formData.append("image", values.image);

        try {
            setLoading(true)
            const { data } = await axios.post('http://localhost:5050/user/signup', formData)
            navigate('/login')
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            address: "",
            image: null
        },
        validateOnBlur: true,
        onSubmit,
        // validationSchema: LoginSchema

    })

    return (
        <>
            <Form className="mx-auto my-5 w-50" method="POST" onSubmit={formik.handleSubmit}>
                <h1>Signup</h1>


                <Form.Group className="mb-3">
                    {formik.values.image && <ImagePreview className="d-flex justify-content-center mb-4" file={formik.values.image} />}
                    <Form.Control type="file" id="image" placeholder="URL" onChange={(event) => {
                        formik.setFieldValue("image", event.currentTarget.files[0]);
                    }} />

                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Full Name" id="name" value={formik.values.name} onChange={formik.handleChange} />


                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" id="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} />

                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" id="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} />

                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" id="address" placeholder="Address" value={formik.values.address} onChange={formik.handleChange} />

                </Form.Group>
                {/* <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" id="image" placeholder="URL" onChange={(event) => {
                        formik.setFieldValue("image", event.currentTarget.files[0]);
                    }} />
                    {formik.values.image && <ImagePreview file={formik.values.image} />}
                </Form.Group> */}

                {loading ? <Button className="btn btn-primary btn-lg" disabled>
                    Creating ...
                </Button> :
                    <Button className="btn btn-primary btn-lg" type="submit" >
                        Register
                    </Button>
                }
            </Form>
        </>
    )
}

export default Signup
