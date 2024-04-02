import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "../../ui/Input";

import {
  blue_type,
  pink_type,
  green_type,
  black_type,
} from "../../../type/color";

export const StyledHeader = styled.form`
  color: ${blue_type.txt_};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledHeaderUl = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: center;
`;

export const StyledHeaderLi = styled.li`
  margin: 2%;

  display: flex;
  flex-direction: row;

  justify-content: center;
`;

export const StyledHeaderLink = styled(Link)`
  text-decoration-line: none;
  background-color: ${blue_type.link};
  padding: 16px 96px 16px 96px;
  border-radius: 12px;
  box-shadow: 1px 1px 1px 1px gray;

  &:hover {
    transition: 0.5s;
    box-shadow: none;
  }

  color: ${blue_type.txt_};
`;

export const StyledInputBox = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  justify-content: center;
`;
