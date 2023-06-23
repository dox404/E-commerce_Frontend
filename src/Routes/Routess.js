import { Routes, Route } from "react-router-dom";
import Profile from '../Pages/Profile/Profile'
import Cart from '../Pages/Cart/Cart'
import Orders from '../Pages/Orders/Orders'
import Home from '../Pages/Home/Home'
import Products from '../Pages/Products'
import ErrorPage from '../Components/Page404/Page404'

//admin
import ProductManagement from '../Pages/Admin/AdminHome'
import AddProduct from '../../src/Pages/Admin/ProductManagement/AddProduct'
import DeleteProduct from '../../src/Pages/Admin/ProductManagement/DeleteProduct'
import AllProduct from '../../src/Pages/Admin/ProductManagement/AllProducts'


const Pages = () => {
    return (
        <>



            <Routes>

                <Route path='/' element={<Home />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/orders' element={<Orders />}></Route>
                <Route path='/*' element={<ErrorPage />}></Route>
                <Route path='/products' element={<Products />}></Route>
                <Route path='admin/product-management' element={<ProductManagement />}></Route>
                <Route path='admin/add-Product' element={<AddProduct />}></Route>
                <Route path='admin/delete-product' element={<DeleteProduct />}></Route>
                <Route path='admin/all-products' element={<AllProduct />}></Route>


            </Routes>



        </>

    )
}

export default Pages