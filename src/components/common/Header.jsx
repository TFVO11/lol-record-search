import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { router_type } from "../../router/routerType";

import Input from "../ui/Input";
import randomNum from "../../util/randomNum";

import { user_info } from "../../type/initState";

const searchObj = {
  id: user_info.id,
  nickname: user_info.nickname,
};

function Header() {
  const userRef = useRef(null);

  const navList = [
    {
      name: "PROFILE",
      path: router_type.main.path,
    },
    {
      name: "RECORD",
      path: router_type.record.path,
    },
    {
      name: "chart",
      path: router_type.chart.path,
    },
    {
      name: "SUMMARY",
      path: router_type.summary.path,
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    const userInfo = userRef.current.value;
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={userRef}
        name="search"
        input={{
          type: "text",
          placeholder: "Name #tag",
        }}
      ></Input>
      <ul>
        {navList.map((element) => {
          return (
            <li>
              <Link to={element.path}>{element.name}</Link>
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export default Header;
