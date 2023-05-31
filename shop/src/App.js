import "./App.css";
import Footer from "./Layout/footer";
import NavBar from "./NavBar";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<div className="main-bg" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
