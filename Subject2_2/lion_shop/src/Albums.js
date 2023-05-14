import album1 from './images/album1.jpg';
import album2 from './images/album2.jpg';
import album3 from './images/album3.jpg';
import data from './data.js';
import React, {  useState } from "react";


function Albums(props) {
    const [album,setData] = useState(data);
    return (
        <div class="container" className="albums">
            <div class="row">
             <div class="col-3 m-2">
             <img src={album1} width = '300px'/>
                <p>{album[0].title}</p>
                <h5>{album[0].content}</h5>
            </div>
            <div class="col-3 m-2">
                <img src={album2} width = '300px'/>
                <p>{album[1].title}</p>
                <h5>{album[1].content}</h5>
            </div>
            <div class="col-3 m-2">
                <img src={album3} width = '300px'/>
                <p>{album[2].title}</p>
                <h5>{album[2].content}</h5>
            </div>
        </div>   
    </div>   
    );
}

export default Albums;