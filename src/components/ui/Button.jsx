import React from "react";
import styled from "styled-components";
import { blue_type } from "../../type/color";

function Button(props) {
  return (
    <div>
      <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
    </div>
  );
}

export default Button;

const StyledButton = styled.button`
  width: 100%;
  height: 55px;

  margin-left: 12px;

  background-color: ${blue_type.submit};
  border: none;
  border-radius: 7px;
  cursor: pointer;

  &: hover {
    background: ${blue_type.hoverButton};
    transition: 0.5s;
  }
`;
