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
`;

export const StyledHeaderLink = styled(Link)`
  text-decoration-line: none;
  background-color: ${blue_type.main};
  padding: 16px 96px 16px 96px;
  border-radius: 12px;

  color: ${blue_type.txt_};
`;
