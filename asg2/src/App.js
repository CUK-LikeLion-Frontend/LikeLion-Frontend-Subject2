import React from 'react';
import Home from "./Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Albums from './Albums'; 
import Detail from './Detail';

function App(){
  return (
    <React.Fragment>
      <NavBar/>
      <>
        <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Home/>}/>
          <Route path="/Albums" exact={true} element={<Albums/>}/>
          <Route path="/Albums/:albumId" element={<Detail />} />
          </Routes>
          </BrowserRouter>
      </>
      <Footer/>
      </React.Fragment>
  );
}

export default App;