import "./App.css";
import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import banner from './images/banner.jpg';

function App(){
  return(
    <div className="App">
      <NavBar/>
      <div className="main-bg" style={{backgroundImage :'url('+ banner +')'}}></div>
      <Footer/>
    </div>
  );
}

export default App;