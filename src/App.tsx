/*
 * Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 * Use of this source code is governed by a MIT style
 * license that can be found in the LICENSE file.
 */

import React, {Suspense} from "react";
import {BrowserRouter} from "react-router-dom";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
