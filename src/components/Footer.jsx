import React from "react";
import "./style/Footer.css";

const Footer = (props) => {
  return (
    <React.Fragment>
      <div className="Footer" style={props.s}>
        <p>Example very epic ☺</p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
