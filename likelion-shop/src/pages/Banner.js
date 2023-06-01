import React from "react";
import "../App.css";

function Banner() {
    return (
    <div className="main-bg">
        <img src={`${process.env.PUBLIC_URL}/img/banner.jpg`} alt="Banner"  />
    </div>
    );
}

export default Banner;
