import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './components/pages/home'
import Layout from './components/pages/layout'
import ContectUs from './components/pages/contact'
import Resources from "./components/pages/resources";
import About from "./components/pages/aboutUs";
import Services from "./components/pages/services";



// eslint-disable-next-line import/no-anonymous-default-export
export default function (){
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="aboutUs" element={<About/>}/>
            <Route path='services' element={<Services/>}/>
            <Route path='resources' element={<Resources/>}/>
            <Route path='contact' element={<ContectUs/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}
