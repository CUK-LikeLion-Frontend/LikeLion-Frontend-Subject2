import "./App.css";
import Footer from "./Layout/footer";
import NavBar from "./NavBar";
import { Routes, Route, Link } from "react-router-dom";
import Albums from "./Album";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<div className="main-bg" />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
