import React from "react";
import "./style/Hero.css";
import { Link } from "react-router-dom";

const Hero = (props) => {
  return (
    <React.Fragment>
      <div className="Hero">
        <div className="Hero__color_filter" style={{ height: props.h }}>
          <div className="Hero__img" style={{ height: props.h }}>
            <img
              src="https://web.archive.org/web/20091018221013/http://www.geocities.com/chathannoorstgeorge/background4.gif"
              alt="background"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
