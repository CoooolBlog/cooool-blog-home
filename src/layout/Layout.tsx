/*
 * Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 * Use of this source code is governed by a MIT style
 * license that can be found in the LICENSE file.
 */

import React, {lazy, useState} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {Navs} from "./types";
import Route from "../router/router";
import {useNavigate} from "react-router-dom";

const Header = lazy(() => import("./components/Header"));

const useNavs = () => {
  const [navs] = useState<Navs>([
    {
      label: "首页",
      path: "/",
    },
    {
      label: "文章",
      path: "/article",
    },
    {
      label: "关于",
      path: "/about",
    },
  ]);
  const [navIndex, setNavIndex] = useState(0);
  const navigate = useNavigate();
  const handleChangeNav = (index: number) => {
    setNavIndex(index);
    navigate(navs[index].path);
  };

  return {
    navs,
    navIndex,
    handleChangeNav,
  };
};

const Layout = (): JSX.Element => {
  const { navs, navIndex, handleChangeNav } = useNavs();

  return (
    <>
      <CssBaseline />
      <Header
        navs={navs}
        navIndex={navIndex}
        handleChangeNav={handleChangeNav}
      />
      <Route />
    </>
  );
};

export default Layout;
