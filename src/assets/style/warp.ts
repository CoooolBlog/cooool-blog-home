/*
 *  Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 *  Use of this source code is governed by a MIT style
 *  license that can be found in the LICENSE file.
 */

import { css } from "@emotion/react";

const flex = css({
  display: "flex",
});

export const flexRowCenter = css({
  ...flex,
  justifyContent: "center",
});

export const flexColumn = css({
  ...flex,
  flexDirection: "column",
});
