import React from "react";
import react from "react";
import "./style/Hero.css";
import HeroImage from "../images/hero_image.jpg";

const Hero = (props) => {
  return (
    <React.Fragment>
      <div className="Hero">
        <div className="Hero__color_filter" style={{ height: props.h }}></div>
        <div className="Hero__img" style={{ height: props.h }}>
          <img
            src="https://images.pexels.com/photos/6004828/pexels-photo-6004828.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="background"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
