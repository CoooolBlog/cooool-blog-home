import React, { lazy, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Navs } from "./types";
import Index from "../pages/index/Index";

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
    {
      label: "关于",
      path: "/about",
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
      {" "}
      <CssBaseline />
      <Header navs={navs} navIndex={navIndex} setNavIndex={setNavIndex} />
      <Index />
      {/*<Error status={404} href="/" msg="This page could not be found." />*/}
    </>
  );
};

export default Layout;
