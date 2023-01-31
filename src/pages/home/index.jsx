import React from "react";
import Button from "../../components/button";
import Card from "../../components/card";
import "./styles.css";
import imagem from "../../assets/img/fundo.png";

function Home() {
  return (
    <div className="back-ground">
      <div className="background-content">
        <h1>We're a digital</h1>
        <h2>Agency</h2>

        <Button></Button>
      </div>

      <div className="container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
