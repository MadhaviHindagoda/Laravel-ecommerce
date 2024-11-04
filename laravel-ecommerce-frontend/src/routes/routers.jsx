import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "../views/Dashboard.jsx";
import Login from "../views/Login.jsx";
import Signup from "../views/Signup.jsx";
import Product from "../views/Products.jsx";
import GuestLayout from "../components/GuestLayout.jsx";
import DefaultLayout from "../components/DefaultLayout.jsx";
import ProductView from "../views/ProductView.jsx";
import Cart from "../views/Cart.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
                path: "/dashboard",
                element: <Navigate to = "/"/>
            },
            {
                path: "/",
                element: <Dashboard/>
            },
            {
                path: "product",
                element: <Product/>
            },
            {
                path:"/product/:id" ,
                element:<ProductView/> 
            },
            {
                path: "cart",
                element: <Cart/>
            },
       
        ]
    },

    {
        path: "/guest",
        element: <GuestLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "signup",
                element: <Signup />
            },

        ]
    }

])

export default router