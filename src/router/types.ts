/*
 *  Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 *  Use of this source code is governed by a MIT style
 *  license that can be found in the LICENSE file.
 */

import React from "react";

export interface Route {
  path: string;
  meta: {
    name: string;
    index?: boolean;
  };
  // element: () => JSX.Element;
  element: React.LazyExoticComponent<React.ComponentType<any>>;
}
