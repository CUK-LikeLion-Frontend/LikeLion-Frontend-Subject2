import  NavBar  from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import React from 'react';
import {BrowserRouter as  Router,Routes, Route } from "react-router-dom";
import Home from './components/home';
import Album from './components/album';
import PurchaseAlbum from './components/purchaseAlbum';

function App(){
  return (
    <React.Fragment>
      <NavBar/>
          <React.Fragment>
            <Router>
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/Albums" element={<Album/>}/>
              <Route exact path="/detail/:albumName" element={<PurchaseAlbum/>}/>
            </Routes>
            </Router>
          </React.Fragment>
      <Footer/>
    </React.Fragment>
  );
}

export default App;