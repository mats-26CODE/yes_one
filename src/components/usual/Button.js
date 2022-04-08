import React from "react";
import "./Button.css";

const Button = ({ text, onClick, inTouch }) => {
  return (
    <div className={inTouch ? "button_intouch" : "button_box"}>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default Button;
