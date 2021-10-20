import React from 'react'
import './App.css';
import Menubar from './components/Navbar';
import Body from './components/Body';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  
  return(
    <div>
      <Menubar/>
      <Body/>
      <Courses/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App;
