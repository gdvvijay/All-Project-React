import {createRoot} from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style.css'
import App from './src/components/App';
import Home from './src/components/Home';
import RecipeDetail from './src/components/RecipeDetail';
import Error from './src/components/Error';

const root=createRoot(document.querySelector('#root'));

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
                path:'/:recipe',
                element:<RecipeDetail/>
            }
        ]
    }
])

root.render(<RouterProvider router={router}/>)