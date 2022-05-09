/*
 * Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 * Use of this source code is governed by a MIT style
 * license that can be found in the LICENSE file.
 */

import React from "react";
import {Route, Routes} from "react-router-dom";

import Index from "./routes";
import Article from "./routes/article";
import Error from "./routes/error";

const routes = [...Index, ...Article, ...Error];

const Router = () => {
  return (
    <Routes>
      {routes.map((r) => {
        return (
          <Route
            path={r.path}
            index={!!r.meta.index}
            element={<r.element />}
            key={r.path}
          />
        );
      })}
    </Routes>
  );
};

export default Router;
