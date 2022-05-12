/*
 *  Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 *  Use of this source code is governed by a MIT style
 *  license that can be found in the LICENSE file.
 */

import React from "react";
import BasePaper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

const Header = styled(Box)`
  padding: 15px 20px;
`;

interface Props {
  label: string;
  children: React.ReactNode;
  className?: string;
  elevation?: number;
}

function Paper({ label, children, className, elevation = 2 }: Props) {
  return (
    <BasePaper elevation={elevation} className={className}>
      <Header>
        <Typography variant="h6">{label}</Typography>
      </Header>
      <Divider />
      {children}
    </BasePaper>
  );
}

export default Paper;
