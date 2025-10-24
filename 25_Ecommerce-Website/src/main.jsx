import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {MainContent} from "./components/MainContent";
import SignUp from './components/SignUp.jsx'
import LogIn from './components/LogIn.jsx'
import WishList from './components/WishList.jsx'
import Cart from './components/Cart.jsx'
import Checkout from './components/Checkout.jsx'
import Account from './components/Account.jsx'
import MyProfile from './components/MyProfile.jsx'
import AddressBook from './components/AddressBook.jsx'
import PaymentOptions from './components/PaymentOptions.jsx'
import MyCollection from './components/MyCollection.jsx'
import MyReturn from './components/MyReturn.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import AllProducts from './components/AllProducts.jsx'
import SearchByCategory from './components/SearchByCategory.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import TermOfUse from './components/TermOfUse.jsx'
import FAQ from './components/FAQ.jsx'
import MyOrders from './components/MyOrders.jsx'
import MyCancellations from './components/MyCancellations.jsx'
import MyReviews from './components/MyReviews.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<MainContent/>
      },
      {
        path:'/signup',
        element:<SignUp/>
      },
      {
        path:'/login',
        element:<LogIn/>
      },
      {
        path:'/wishlist',
        element:<WishList/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/checkout',
        element:<Checkout/>
      },
      {
        path:'/account',
        element:<Account/>,
        children:[
          {
            path:'/account/myprofile',
            element:<MyProfile/>
          },
          {
            path:'/account/addressbook',
            element:<AddressBook/>
          },
          {
            path:'/account/paymentoption',
            element:<PaymentOptions/>
          },
          {
            path:'/account/mycollection',
            element:<MyCollection/>
          },
          {
            path:'/account/myreturn',
            element:<MyReturn/>
          }
        ]
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/productdetails',
        element:<ProductDetails/>
      },
      {
        path:'/allitems',
        element:<AllProducts/>
      },
      {
        path:'/searchbycategory/:category',
        element:<SearchByCategory/>
      },
      {
        path:'/privacypolicy',
        element:<PrivacyPolicy/>
      },
      {
        path:'/termofuse',
        element:<TermOfUse/>
      },
      {
        path:'/faq',
        element:<FAQ/>
      },
      {
        path:'/myorder',
        element:<MyOrders/>
      },
      {
        path:'/mycancellations',
        element:<MyCancellations/>
      },
      {
        path:'/myreviews',
        element:<MyReviews/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
