import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AlbumsPage from "./pages/Album";
import AlbumsDetailPage from "./pages/AlbumDetail";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/albums/" exact={true} element={<AlbumsPage />} />
        <Route
          path="/albums/:title"
          exact={true}
          element={<AlbumsDetailPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
