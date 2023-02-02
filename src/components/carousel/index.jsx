import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

import image1 from "../../assets/img/slider/foto1.jpg";
import image2 from "../../assets/img/slider/foto2.jpg";
import image3 from "../../assets/img/slider/foto3.jpg";
import image4 from "../../assets/img/slider/foto4.jpg";

const images = [image1, image2, image3, image4];

function Slider() {
  return (
    <div className="slider">
      <motion.div className="carousel" whileTap={{ cursor: "grabbing" }}>
        <motion.div className="inner-carousel" drag="x">
          {images.map((image) => (
            <motion.div className="item" key={image}>
              <img src={image} alt="Imagem"/>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Slider;
