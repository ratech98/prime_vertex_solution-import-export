import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './components/pages/home'
import Layout from './components/pages/layout'
import AboutUs from './components/pages/aboutUs'
import ContectUs from './components/pages/contact'


// eslint-disable-next-line import/no-anonymous-default-export
export default function (){
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="aboutUs" element={<AboutUs/>}/>
            <Route path='services' element={<ContectUs/>}/>
            <Route path='resources' element={<ContectUs/>}/>
            <Route path='contact' element={<ContectUs/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}
