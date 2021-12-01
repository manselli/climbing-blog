import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Signup from './components/pages/auth/Signup';
import Login from './components/pages/auth/Login';
import { UserContext } from './components/user/UserContext';
import UserPage from './components/user/UserPage';
import firebase from 'firebase/compat/app';

export interface IUser{
  email:string|null;
}
export interface IContextProps {
  state: firebase.User|null;
  setState: React.Dispatch<React.SetStateAction<firebase.User|null>>;
}

function App() {
  const [currentUser, setCurrentUser] = useState<firebase.User|null>(null);
  const value:IContextProps={ state:currentUser, setState:setCurrentUser };

  return (
    <>
    <UserContext.Provider value={value}>
    <Navigation />
    <Routes>
      <Route path="/climbing-blog/" element={<Home />} />
      <Route path="/climbing-blog/about" element={<About />} />
      <Route path="/climbing-blog/contact" element={<Contact />} />
      <Route path="/climbing-blog/login" element={<Login />} />
      <Route path="/climbing-blog/signup" element={<Signup />} />
      <Route path="/climbing-blog/user" element={<UserPage />} />
    </Routes>
    </UserContext.Provider>
    <Footer />
    </>
  );
}

export default App;


