import { Routes, Route } from "react-router-dom";
import Profile from '../Pages/Profile/Profile'
import Cart from '../Pages/Cart/Cart'
import Orders from '../Pages/Orders/Orders'
import Home from '../Pages/Home/Home'
import ErrorPage from '../Components/Page404/Page404'


const Pages = () => {
    return (
        <>



            <Routes>

                <Route path='/' element={<Home />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/orders' element={<Orders />}></Route>
                <Route path='/*' element={<ErrorPage />}></Route>


            </Routes>



        </>

    )
}

export default Pages