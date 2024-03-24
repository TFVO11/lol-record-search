import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { router_type } from "../../type/routerType";

import {
  StyledHeader,
  StyledHeaderUl,
  StyledHeaderLi,
  StyledHeaderLink,
  StyledHeaderInput,
} from "./styled/header.style";

import Input from "../ui/Input";

function Header() {
  const userRef = useRef(null);

  const navList = [
    {
      name: router_type.main.name,
      path: router_type.main.path,
    },
    {
      name: router_type.record.name,
      path: router_type.record.path,
    },
    {
      name: router_type.chart.name,
      path: router_type.chart.path,
    },
    {
      name: router_type.summary.name,
      path: router_type.summary.path,
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    const userInfo = userRef.current.value;
  };

  return (
    <StyledHeader onSubmit={submitHandler}>
      <div>
        headerBar
      </div>
      <div>
        img feild
      </div>
        <Input
          ref={userRef}
          name="search"
          input={{
            type: "text",
            placeholder: "Name #tag",
          }}
        >
        </Input>
      <StyledHeaderUl>
        {navList.map((element) => {
          return (
            <StyledHeaderLi>
              <StyledHeaderLink to={element.path}>
                {element.name}
              </StyledHeaderLink>
            </StyledHeaderLi>
          );
        })}
      </StyledHeaderUl>
    </StyledHeader>
  );
}

export default Header;
