import React from "react";

function Input(props) {
  return (
    <div>
      <input onChange={props.onChange} {...props.input} name={props.name}/>
    </div>
  );
}

export default Input;
