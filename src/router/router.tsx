/*
 *  Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 *  Use of this source code is governed by a MIT style
 *  license that can be found in the LICENSE file.
 */

import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./routes";
import Article from "./routes/article";
import Error from "./routes/error";
import About from "./routes/about";

// The Error Routes must be at the end.
const routes = [...Index, ...Article, ...About, ...Error];

const Router = () => {
  return (
    <Routes>
      {routes.map((r) => {
        return (
          <Route
            path={r.path}
            index={!!r.meta.index}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <r.element />
              </Suspense>
            }
            key={r.path}
          />
        );
      })}
    </Routes>
  );
};

export default Router;
