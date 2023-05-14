import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import banner from './images/banner.jpg';

import Albums from './Albums';


function App(){
  return(
    <BrowserRouter>
     <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/Home" element={<div className="main-bg" style={{backgroundImage :'url('+ banner +')'}}></div>}/>
        <Route path="/Albums" element={<Albums/>}/>
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;