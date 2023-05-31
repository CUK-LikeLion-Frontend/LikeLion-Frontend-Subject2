import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/home";
import Album from "./pages/album";
import AlbumDetail from "./pages/albumDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />

        <Route path="/albums" exact={true} element={<Album />} />
        <Route
          path="/albums/:id"
          exact={true}
          element={<AlbumDetail />}
          className={AlbumDetail}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
