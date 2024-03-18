import React, { Fragment, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { ROUTER_ARR } from "./Router";

function RouterComp() {
  return (
    <Fragment>
      <Routes>
        {ROUTER_ARR.map((el) => (
          <Route key={el.link} path={el.path} element={el.element} />
        ))}
      </Routes>
    </Fragment>
  );
}

export default RouterComp;
