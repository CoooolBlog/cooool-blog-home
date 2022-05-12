/*
 *  Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 *  Use of this source code is governed by a MIT style
 *  license that can be found in the LICENSE file.
 */
import React from "react";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const PaperMain = ({ children, className }: Props) => {
  return <div className={className}>{children}</div>;
};

export default styled(PaperMain)`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;
