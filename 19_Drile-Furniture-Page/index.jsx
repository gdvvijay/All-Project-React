import {createRoot} from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root=createRoot(document.querySelector('#root'));

const router=createBrowserRouter([{
    path:'/',
    element:<App/>,
    
}])
root.render(<RouterProvider router={router}/>)