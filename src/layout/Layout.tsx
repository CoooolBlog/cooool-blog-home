import React, { lazy } from "react";

const Header = lazy(() => import("./components/Header"));

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
    </>
  );
};

export default Layout;
