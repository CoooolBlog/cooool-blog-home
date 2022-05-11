/*
 *  Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 *  Use of this source code is governed by a MIT style
 *  license that can be found in the LICENSE file.
 */

/* @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const demo = css`
  background-color: red;
  width: 500px;
  height: 500px;
`;

const Index = () => {
  return <div css={demo}>hello</div>;
};

export default Index;
