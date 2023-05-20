import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/LoginForm/LoginForm';
import RegForm from './components/RegForm/RegForm';
import Gallery from './components/Gallery/Gallery';
import ItemDetails from './components/ItemDetails/ItemDetails';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Banner from './components/Banner/Banner';
import CustomerReview from './components/CustomerReview/CustomerReview';
import ShopByAge from './components/ShopByAge/ShopByAge';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LoginForm></LoginForm>
            },
            {
                path: '/regform',
                element: <RegForm></RegForm>
            },
            {
                path: '/gallery',
                element: <Gallery></Gallery>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/itemdetails',
                element: <ItemDetails></ItemDetails>
            },
            {
                path: '/banner',
                element: <Banner></Banner>
            },
            {
                path: '/customerreview',
                element: <CustomerReview></CustomerReview>
            },
            {
                path: '/shopbyage',
                element: <ShopByAge></ShopByAge>
            }
        ]

    },
    

])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
