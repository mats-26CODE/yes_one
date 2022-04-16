import React from "react";
import "./Button.css";

const Button = ({ text, onClick, inTouch }) => {
  return (
    <div
      className={inTouch ? "button_intouch" : "button_box"}
      data-testid={"button-test1"}
    >
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default Button;
