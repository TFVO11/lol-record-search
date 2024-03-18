import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Input from "../ui/Input";
import randomNum from "../../util/randomNum";

import { user_info } from "../../type/initState";

const searchObj = {
  id: user_info.id,
  nickname: user_info.nickname,
};

function Header() {
  const [user, setUser] = useState(searchObj);

  const navList = ["PROFILE", "RECORD", "CHART", "SUMMARY"];

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const changeHandler = (e) => {
    setUser((preState) => {
      return {
        ...preState,
        nickname: e.target.value,
      };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        name="search"
        onChange={changeHandler}
        input={{
          type: "text",
          placehold: "사용자 닉네임을 입력해주세요!",
          value: user,
        }}
      ></Input>
      <ul>
        {navList.map((element) => {
          return <li>{element}</li>;
        })}
      </ul>
    </form>
  );
}

export default Header;
