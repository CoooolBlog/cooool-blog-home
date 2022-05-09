/*
 * Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 * Use of this source code is governed by a MIT style
 * license that can be found in the LICENSE file.
 */

import {lazy} from "react";
import {Route} from "../types";

const Index: Route[] = [
  {
    path: "/",
    meta: {
      name: "Index",
      index: true,
    },
    element: lazy(() => import("../../pages/index/Index")),
  },
];

export default Index;