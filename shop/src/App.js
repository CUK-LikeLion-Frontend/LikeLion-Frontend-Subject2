import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Main';
import NotFound from './NotFound';
import Footer from './Components/Footer';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Albums from './albums';
import Detail from './DetailPage';
import Data from './Data.js';

const App = () => {
  return (
    <>


       <Header /> 

      <Routes>
        <Route path="" element={<Main />}></Route>
        <Route path="/product/" element={<Albums />}>
        </Route>
        <Route path="/product/:id" element={<Detail Data={Data}/>}>

        </Route>
        {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>


      <Footer />
    </>


  );
};



export default App;