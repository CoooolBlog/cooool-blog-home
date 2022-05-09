/*
 * Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 * Use of this source code is governed by a MIT style
 * license that can be found in the LICENSE file.
 */

import {lazy} from "react";
import {Route} from "../types";

const Article: Route[] = [
  {
    path: "/article",
    meta: {
      name: "Article",
    },
    element: lazy(() => import("../../pages/article/Index")),
  },
];

export default Article;
