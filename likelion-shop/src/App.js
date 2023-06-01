import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Albums from "./components/Albums";
import AlbumDetailPage from "./components/AlbumDetailPage";

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <div className="contentWrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/albums" element={<Albums />}></Route>
            <Route path="/detail/:title" element={<AlbumDetailPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
