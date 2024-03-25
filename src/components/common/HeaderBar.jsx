import React from "react";
import { StyledWrapper, StyledImg } from "./styled/headerBar.styled";
import logo from "../../public_assets/logo_lol.png";

function HeaderBar() {
  return (
    <StyledWrapper>
      <StyledImg src={logo} />
    </StyledWrapper>
  );
}

export default HeaderBar;
