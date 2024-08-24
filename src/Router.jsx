import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./config/firebase";
import { Outlet, RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import Signup from './views/Signup'
import Login from './views/Login'
import Detail from './views/Detail'
import Addproduct from './views/AddProduct'
import Dashboard from './views/Dashboard'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
      path: '/',
      element: <Dashboard/>
    },
    {
      path: 'login',
      element: <Login/>
    },
    {
      path: 'register',
      element: <Signup/>
    },
    {
      path: 'Detail/:productId',
      element: <Detail/>
    },
    {
      path : 'Addproduct',
      element: <Addproduct/>
    },]
  }
])

function Main (){

  const navigate = useNavigate()
  const [user, setUser] = useState()

  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          setUser(user)
        });
  }, [])

  useEffect(() => {
      const { pathname } = window.location
      if (user) {
       
          if (pathname === '/login'){
              navigate('/')
          }
      } else {
          if (pathname === '/Addproduct' ) {
              navigate('/login')
          } 
      }
  }, [window.location.pathname , user])
  
  return(
    <div>
      <Outlet/>
    </div>
  )
       
}


export default function Router(){
  return<RouterProvider router={router}/>
}

