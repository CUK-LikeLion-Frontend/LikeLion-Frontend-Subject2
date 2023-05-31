import Footer from "../components/Layout/Footer";
import MainPage from "../components/Main";
import Navbar from "../components/Layout/Navbar";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <Footer />
    </div>
  );
}

export default Home;
