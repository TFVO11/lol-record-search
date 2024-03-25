import React from "react";
import {
  StyledRowWrapper,
  StyledColumnWrapper,
  ProfileImg,
  StyledRestChamp,
  StyledContentsBox,
} from "./styled/mainpage.style";

function MainPageContents() {
  return (
    <StyledContentsBox>
      <StyledRowWrapper>
        <ProfileImg>이미지</ProfileImg>
        <StyledRowWrapper>
          <p>닉네임</p>
          <p>#KR1</p>
        </StyledRowWrapper>
        <StyledColumnWrapper>
          <StyledRestChamp>
            <p>플레이한 최근 챔피언</p>
            <ul>
              <li>질리언</li>
              <li>직스</li>
              <li>자크</li>
            </ul>
          </StyledRestChamp>

          <div>
            <p>K/D/A</p>
            <p>1.2/2/10</p>
          </div>
        </StyledColumnWrapper>
      </StyledRowWrapper>
    </StyledContentsBox>
  );
}

export default MainPageContents;
