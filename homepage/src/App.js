import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AlbumsPage from "./pages/Album";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/albums" exact={true} element={<AlbumsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
