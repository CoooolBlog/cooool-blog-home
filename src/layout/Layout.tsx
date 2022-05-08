import React, { lazy, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Navs } from "./types";

const Header = lazy(() => import("./components/Header"));

const useNavs = () => {
  const [navs] = useState<Navs>([
    {
      label: "首页",
      path: "/",
    },
    {
      label: "文章",
      path: "/articles",
    },
  ]);
  const [navIndex, setNavIndex] = useState(0);

  return {
    navs,
    navIndex,
    setNavIndex,
  };
};

const Layout = (): JSX.Element => {
  const { navs, navIndex, setNavIndex } = useNavs();

  return (
    <>
      <CssBaseline />
      <Header navs={navs} navIndex={navIndex} setNavIndex={setNavIndex} />
    </>
  );
};

export default Layout;
