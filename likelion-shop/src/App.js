import React from 'react';
import NavBar from './components/NavBar';
import Banner from './pages/Banner';
import Footer from './components/Footer';
import Albums from './pages/Albums';
import Detail from './pages/Detail';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Banner />}></Route>
              <Route path="/albums" element={<Albums />}></Route>
              <Route path="/detail/:title" element={<Detail />} />
            </Routes>
            <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
