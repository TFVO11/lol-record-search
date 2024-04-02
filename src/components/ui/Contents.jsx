import React from "react";
import styled from "styled-components";

function Contents(props) {
  return (
    <Styleddiv>
      <StyledWrapper>{props.children}</StyledWrapper>
    </Styleddiv>
  );
}

const Styleddiv = styled.div`
  height: 80vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  

`;

const StyledWrapper = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

`;

export default Contents;
