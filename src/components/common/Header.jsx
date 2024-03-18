import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { router_type } from "../../type/routerType";

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
