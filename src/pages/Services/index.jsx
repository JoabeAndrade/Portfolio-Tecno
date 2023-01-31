import React from "react";
import CardServices from "../../components/card-services";
import "./styles.css";

function Services() {
  return (
    <div className="services">
      <div className="line"></div>
      <h1 className="title">Services.</h1>
      <p>WE WORK WITH YOU, NOT FOR YOU</p>

      <div className="container2">
        <CardServices />
        <CardServices />
        <CardServices />
      </div>

      <div className="container2">
        <CardServices />
        <CardServices />
        <CardServices />
      </div>

      <div className="container2">
        <CardServices />
        <CardServices />
        <CardServices />
      </div>

      <div className="line2">
        <div className="line-2"></div>
      </div>
    </div>
  );
}

export default Services;
