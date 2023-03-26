import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";
import AlbumDetail from "../components/AlbumsDetail";

function AlbumsDetailPage() {
  return (
    <div className="App">
      <Navbar />
      <AlbumDetail />
      <Footer />
    </div>
  );
}

export default AlbumsDetailPage;
