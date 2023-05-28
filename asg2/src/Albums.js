import React from 'react';
import { Link } from 'react-router-dom';
import LovePoem from "../src/img/LovePoem.jpg"
import Lilac from "../src/img/Lilac.jpg"
import Palette from "../src/img/Palette.jpg"

function Albums() {
  return (
    <div className='m-5'>
      <h2> </h2>
      <div className="album">
        <Link to="/Albums/love-poem">
          <img src={LovePoem} alt="Album 1" />
        </Link>
        <h2>Love poem</h2>
        <p>The 5th Mini Album</p>
      </div>

      <div className="album">
        <Link to="/Albums/lilac">
          <img src={Lilac} alt="Album 2" />
        </Link>
        <h2>LILAC</h2>
        <p>The 5th Album</p>
      </div>

      <div className="album">
        <Link to="/Albums/palette">
          <img src={Palette} alt="Album 3" />
        </Link>
        <h2>Palette</h2>
        <p>The 4th Album</p>
      </div>
    </div>
  );
}

export default Albums;
