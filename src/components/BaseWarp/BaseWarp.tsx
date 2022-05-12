/*
 * Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 * Use of this source code is governed by a MIT style
 * license that can be found in the LICENSE file.
 */

import React from "react";
import styled from "@emotion/styled";
import {Container} from "@mui/material";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Main = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const BaseWarp = ({ children, className }: Props) => {
  return (
    <Container>
      <Main className={className}>{children}</Main>
    </Container>
  );
};

export default BaseWarp;
