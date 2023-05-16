import React from 'react';
import Home from "./Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

function App(){
  return (
    <>
      <NavBar/>
      
        <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Home/>}/>
          </Routes>
          </BrowserRouter>
      
      <Footer/>
    </>
  );
}

export default App;