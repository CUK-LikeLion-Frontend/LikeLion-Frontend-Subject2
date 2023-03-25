import Albums from "../components/Albums";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
