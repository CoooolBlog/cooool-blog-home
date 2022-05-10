/*
 *  Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 *  Use of this source code is governed by a MIT style
 *  license that can be found in the LICENSE file.
 */

import React from "react";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { Container } from "@mui/material";

const RowWarp = styled(Box)`
  margin: 30px 0;
  display: flex;
  align-items: flex-start;
`;

interface Props {
  children: React.ReactNode;
}

const BaseWarp = ({ children }: Props) => {
  return (
    <Container>
      <RowWarp>{children}</RowWarp>
    </Container>
  );
};

export default BaseWarp;
