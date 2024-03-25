import React from "react";
import styled from "styled-components";

function Contents(props) {
  return (
    <Styleddiv>
      <div>{props.children}</div>
    </Styleddiv>
  );
}


const Styleddiv = styled.div`
  height: 80vh;
  width: 100%;
`;


export default Contents;
