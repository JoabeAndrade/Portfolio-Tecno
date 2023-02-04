import React from "react";
import "./styles.css";

import image1 from "../../assets/img/about/foto1.jpg";
import image2 from "../../assets/img/about/foto2.jpg";
import image3 from "../../assets/img/about/foto3.jpg";

function About() {
  return (
    <div className="about">
      <div className="line"></div>
      <div className="about-title">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          quis soluta, animi nobis earum asperiores.
        </p>
      </div>
      <p className="about-definition">WE'EW MORE THAN A DIGITAL AGENCY</p>
      <div className="images">
        <div className="image-main">
          <img src={image1} alt="imagem" />
        </div>
        <div className="image-secondary">
          <img src={image2} alt="imagem" />
          <img src={image3} alt="imagem" />
        </div>
      </div>
    </div>
  );
}

export default About;
