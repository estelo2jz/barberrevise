import React from 'react';

import Imageone from "../icons/pic/clipsone.jpg";
import Imagetwo from "../icons/pic/cliptwo.jpg";

import "../styles/main.scss";

function Backgound() {
  return (
    <div className="background-container">
      <div className="background-inner">
        <div className="pic-bg-one">
          <img src={Imageone} alt="imageone" />
        </div>
        <div className="pic-bg-two">
          <img src={Imagetwo} alt="imagetwo" />
        </div>
      </div>
    </div>
  )
}

export default Backgound;
