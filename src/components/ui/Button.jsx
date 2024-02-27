import React from "react";

function Button(props) {
  const clickType = props.btn.clickType;
  const colorType = props.btn.colorType;
  const buttonType = props.btn.buttonType;

  return (
    <div>
      <button
        onClick={onClick}
        type={buttonType}
        styled={{ color_type: colorType, click_type: clickType }}
      >
        {props.text}
      </button>
    </div>
  );
}

export default Button;
