import React from "react";
// import headerImg from "./compImages/Hname.jpeg"
import headerImg2 from "./compImages/Hname2.png"
// import headerImg3 from "./compImages/logo2.jpeg"
// import headerImg4 from "./compImages/logo2.1.png" // may be
// import headerImg5 from "./compImages/logo3.jpeg"
// import headerImg6 from "./compImages/logo3.1.png"
// import headerImg7 from "./compImages/logo4.jpeg"
// import headerImg8 from "./compImages/logo4.1.png"





import "./Headers.css";

function Headers(params) {
    return (
        <header className="headerWithImg">
            <div className="imgWrapper">
                <img src={headerImg2} alt="headerimage" className="headerImg"></img>
            </div>
            <div className="navBar"></div>
        </header>
    )
}

export default Headers;