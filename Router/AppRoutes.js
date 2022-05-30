import React from 'react'
import { BrowserRouter, Routes,Route,Redirect,Switch} from "react-router-dom";
import Navbar from "./Navbar"
import About from './About'
import Contact from './Contact'
import Home from './Home'
import IDComponent from './IDComponent'
import NotFound from './NotFound';

const AppRoutes = () => {
    return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact path="/" element ={<Home/>}/>
            <Route  path="/Contact" element ={<Contact/>}/>
            <Route  path="/About" element ={<About/>}/>
            <Route  path="/Home/:id" element ={<IDComponent/>}/>
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes
