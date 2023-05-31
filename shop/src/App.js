import "./App.css";
import Footer from "./Layout/footer";
import NavBar from "./NavBar";
import { Routes, Route, Link } from "react-router-dom";
import Albums from "./Album";
import Detail from "./Detail";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<div className="main-bg" />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/detail/:name" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
