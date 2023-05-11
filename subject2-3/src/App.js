import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from "./component/Navbar"
import Footer from "./component/Footer";
import Home from "./pages/Home";
import AlbumPage  from './pages/Album';
import Detail from './pages/Detail';

function App() {

  return (<>
    <NavBar />
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/album' element = {<AlbumPage/>}/>
      <Route path='/detail/:item_id' element = {<Detail/>} />
      
    </Routes>
    <Footer />
    </>
  );
}

export default App;
