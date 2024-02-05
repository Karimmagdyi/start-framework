import logo from './logo.svg';
import './App.css';

import React from 'react'
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';
import Copyrights from './component/Copyrights/Copyrights';
import About from './component/About/About';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact/Contact';
import{RouterProvider,createBrowserRouter} from 'react-router-dom'
import Userlayout from './layout/Userlayout';

export default function App() {
 let routes=  createBrowserRouter([
  {path:'/',element: <Userlayout/>,children:[
    {path:'home',element:<Home/>},
    {path:'about',element: <About/>},
    {path:'/portfolio',element: <Portfolio/>},
    {path:'contact',element: <Contact/>}

  ]}
   
  
  ])
  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

