import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Album from './components/Album';
import data from './components/Detail_data';
import Detail from './components/Detail';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/albums" element={<Album/>} />
        <Route path="/albums/:id" element={<Detail data ={data} />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;