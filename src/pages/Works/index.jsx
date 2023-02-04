import React from "react";
import Button from "../../components/button";
import Slider from "../../components/carousel";
import "./styles.css";

function Works() {
  return (
    <div className="works-back">
      <div className="line"></div>
      <div className="works-button">
        <h1 className="works-titlle">Works.</h1>
        <Button />
      </div>
      <Slider />
    </div>
  );
}

export default Works;
