import React from "react";
import styled from "styled-components";
import { blue_type } from "../../type/color";

const StyledInput = styled.div`
  width: 50%;
  height: 50px;

  display: flex;
  justify-content: center;

  & > .input-tag {
    background-color: ${blue_type.main};
    width: 100%;
    height: 100%;
  }
`;

function Input(props) {
  return (
    <StyledInput>
      <input
        className="input-tag"
        ref={props.ref}
        onChange={props.onChange}
        {...props.input}
        name={props.name}
      />
    </StyledInput>
  );
}

export default Input;
