import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Signup from './components/pages/auth/Signup';

function App() {
  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/climbing-blog/" element={<Home />} />
      <Route path="/climbing-blog/about" element={<About />} />
      <Route path="/climbing-blog/contact" element={<Contact />} />
      <Route path="/climbing-blog/signup" element={<Signup />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
