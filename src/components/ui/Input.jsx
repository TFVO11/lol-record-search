import React from "react";

function Input(props) {
  return (
    <div>
      <input
        ref={props.ref}
        onChange={props.onChange}
        {...props.input}
        name={props.name}
      />
    </div>
  );
}

export default Input;
