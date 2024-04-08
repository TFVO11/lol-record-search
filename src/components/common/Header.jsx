import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { router_type } from "../../type/routerType";
import { getUserNickName } from "../../reducers/actions/userSearchAction";

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
  const [search, setSearch] = useState("");
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

  const handleChange = (e) => {
    const userInfo = e.target.value;
    setSearch(userInfo);
    console.log("search", search);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (userRef.current) {
      const nickName = userRef.current.value;

      dispatch(getUserNickName(nickName));
      console.log("dispatch");
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
          onChange={handleChange}
          ref={userRef}
          name="search"
          input={{
            type: "text",
            placeholder: "Name #tag",
            value: search,
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
