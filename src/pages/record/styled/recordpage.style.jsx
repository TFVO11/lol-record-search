import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  border: 1px solid;

  margin: 12px;
  height: 30vh;
  padding: 12px;
`;

export const StyledContents = styled.div`
  display: flex;
  flex: column;

  justify-content: center;

  width: 80%;
  height: 60vh;

  box-shadow: 2px 2px 2px 2px gray;

  overflow-y: scroll;
`;

export const StryledUl = styled.ul`
  list-style-type: none;

  width: 100%;
`;

export const StyledLi = styled.li`
  list-style-type: none;
`;
