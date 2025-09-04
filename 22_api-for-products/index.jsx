import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './src/components/App'
import './style.css'
import {createRoot} from 'react-dom/client'
import Home from './src/components/Home'
import Error from './src/components/Error'
import ProductDetail from './src/components/ProductDetail'

const root=createRoot(document.querySelector('#root'))

const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/:product',
                element:<ProductDetail/>
            }
        ]
    }
])
root.render(<RouterProvider router={router}/>)