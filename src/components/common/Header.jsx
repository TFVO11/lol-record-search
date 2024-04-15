import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { router_type } from "../../type/routerType";
import { getUserNickName } from "../../reducers/actions/userSearchAction";
import { PUUIDgetter, UserInfoGetter } from "../../api/getter/PUUIDgetter";

import {
  StyledHeader,
  StyledHeaderUl,
  StyledHeaderLi,
  StyledHeaderLink,
  StyledHeaderInput,
  StyledInputBox,
} from "./styled/header.style";

import Input from "../ui/Input";
import Button from "../ui/Button";
import ImageFeild from "../Imagefeild/ImageFeild";
import HeaderBar from "./HeaderBar";

function Header() {
  const userRef = useRef();
  const dispatch = useDispatch();

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

    if (userRef.current) {
      const nickName = userRef.current.value;

      dispatch(getUserNickName(nickName));
      console.log("dispatch");

      const PUUIDinfo = new PUUIDgetter(nickName);

      console.log("new", PUUIDinfo)

      PUUIDinfo.getAccount()
        .then((res) => console.log("classTest", res))
        .catch((error) => console.error("classTest", error));
    } else {
      console.error("Null");
    }
  };

  return (
    <StyledHeader onSubmit={submitHandler}>
      <HeaderBar />
      <ImageFeild />
      <StyledInputBox>
        <Input
          ref={userRef}
          name="search"
          input={{
            type: "text",
            placeholder: "Name #tag",
          }}
        ></Input>
        <Button>검색</Button>
      </StyledInputBox>
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
