/*
 *  Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 *  Use of this source code is governed by a MIT style
 *  license that can be found in the LICENSE file.
 */

import { Route } from "../types";
import { lazy } from "react";

const About: Route[] = [
  {
    path: "/about",
    meta: {
      name: "About",
      index: true,
    },
    element: lazy(() => import("../../pages/about")),
  },
];

export default About;
