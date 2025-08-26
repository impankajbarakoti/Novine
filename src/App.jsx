import React from 'react'
import MainHome from './components/MainHome'
import { Routes, Route } from 'react-router-dom'
import AboutUs from './components/Pages/AboutUs'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ContactUs from './components/Pages/ContactUs'
import Blogs from './components/Blogs'
import BlogDetails from './components/Pages/BlogsDetails'
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs/>} /> 
         <Route path="/blog" element={<Blogs/>} />
        <Route path="/blog/:id" element={<BlogDetails/>}/>  
      </Routes>
      <Footer />
    </div>
  );
}

export default App
