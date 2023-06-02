import LovePoem from "./img/LovePoem.jpg";
import Lilac from "./img/Lilac.jpg";
import Palette from "./img/Palette.jpg";
import "./App.css";
import { useNavigate } from "react-router-dom";
function Albums() {
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <div className="container p-5">
        <div className="row p-5">
          <div
            className="col-md-4"
            onClick={() => navigate("/detail/LovePoem")}
          >
            <img src={LovePoem} width="80%"></img>
            <h4>Love poem</h4>
            <p>The 5th Mini Album</p>
          </div>
          <div className="col-md-4" onClick={() => navigate("/detail/Lilac")}>
            <img src={Lilac} width="80%"></img>
            <h4>LILAC</h4>
            <p>The 5th Album</p>
          </div>
          <div className="col-md-4" onClick={() => navigate("/detail/Palette")}>
            <img src={Palette} width="80%"></img>
            <h4>Palette</h4>
            <p>The 4th Album</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Albums;
