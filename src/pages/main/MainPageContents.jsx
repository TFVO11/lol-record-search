import React from "react";
import {
  StyledRowWrapper,
  StyledColumnWrapper,
  ProfileImg,
  StyledRestChamp,
  StyledContentsBox,
  StyledName,
  StyledTag,
  StyledLi,
  StyledOl,
} from "./styled/mainpage.style";

function MainPageContents() {


  return (
    <StyledContentsBox>
      <StyledRowWrapper>
        <ProfileImg>이미지</ProfileImg>
        <StyledRowWrapper>
          <StyledName>닉네임</StyledName>
          <StyledTag>#KR1</StyledTag>
        </StyledRowWrapper>
        <div>
          <p>K/D/A</p>
          <p>1.2/2/10</p>
        </div>
        <StyledColumnWrapper>
          <StyledRestChamp>
            <p>플레이한 최근 챔피언</p>
            <StyledOl>
              <StyledLi>질리언</StyledLi>
              <StyledLi>직스</StyledLi>
              <StyledLi>자크</StyledLi>
            </StyledOl>
          </StyledRestChamp>
        </StyledColumnWrapper>
      </StyledRowWrapper>
    </StyledContentsBox>
  );
}

export default MainPageContents;
