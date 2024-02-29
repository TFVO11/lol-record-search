import React, { Fragment, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../components/common/Header";
import Footer from "../components/common/footer";
import { ROUTER_ARR } from "./Router";

function RouterComp() {
  return (
    <Fragment>
      <Header />
      <Routes>
        {ROUTER_ARR.map((el) => (
          <Route key={el.link} path={el.path} element={el.element} />
        ))}
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default RouterComp;
