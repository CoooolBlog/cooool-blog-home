/*
 *  Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 *  Use of this source code is governed by a MIT style
 *  license that can be found in the LICENSE file.
 */

import styled from "@emotion/styled";

export const FlexBox = styled.div`
  display: flex;
`;

export const FlexRowBox = styled(FlexBox)`
  flex-direction: row;
`;

export const FlexColumnBox = styled(FlexBox)`
  flex-direction: column;
`;
