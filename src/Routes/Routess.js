import { Routes, Route } from "react-router-dom";
import Profile from '../Pages/Profile/Profile'
import Cart from '../Pages/Cart/Cart'
import Orders from '../Pages/Orders/Orders'
import Home from '../Pages/Home/Home'
import Products from '../Pages/Products'
import ErrorPage from '../Components/Page404/Page404'
import AdminAddProduct from '../Pages/Admin/AddProducts'


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
                <Route path='admin/add-products' element={<AdminAddProduct />}></Route>


            </Routes>



        </>

    )
}

export default Pages