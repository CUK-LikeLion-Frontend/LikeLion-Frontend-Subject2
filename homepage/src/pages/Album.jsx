import Albums from "../components/Album/Albums";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";

function AlbumsPage() {
  return (
    <div className="App">
      <Navbar />
      <Albums />
      <Footer />
    </div>
  );
}

export default AlbumsPage;
