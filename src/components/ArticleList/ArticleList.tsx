/*
 *  Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 *  Use of this source code is governed by a MIT style
 *  license that can be found in the LICENSE file.
 */

import React from "react";
import styled from "@emotion/styled";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";
import { FlexColumnBox, FlexRowBox } from "@/assets/style/box";
import { Article } from "@/types/article";

const Item = styled(FlexRowBox)`
  justify-content: center;
  align-items: stretch;
  margin: 10px 0;
  padding: 10px 20px;
  height: 180px;
  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  flex: 30%;
  width: 100%;
  height: 100%;
`;

const ItemTextWarp = styled(FlexColumnBox)`
  justify-content: space-between;
  align-items: stretch;
  flex: 70%;
  font-size: 20px;
  margin: 0 0 0 20px;
`;

const Sub = styled.div`
  font-size: 14px;
  color: #797c80;
  overflow: hidden;
  line-height: 20px;
`;

const Actions = styled(Sub)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  color: #797c80;
  overflow: hidden;
  line-height: 20px;
`;

const IconStyles = {
  margin: "0 5px 0 0",
};

const ViewIcon = styled(RemoveRedEyeIcon)`
  ${IconStyles}
`;

const TimeIcon = styled(AccessTimeIcon)`
  ${IconStyles}
`;

const useNav = () => {
  const nav = useNavigate();
  const handleRedirect = (id: number) => {
    nav(`/article/${id}`);
  };

  return {
    handleRedirect,
  };
};

interface Props {
  list: Article[];
}

const ArticleList = ({ list }: Props) => {
  const { handleRedirect } = useNav();

  return (
    <>
      {list.map((el) => (
        <div onClick={() => handleRedirect(el.id)} key={el.id}>
          <Item>
            <Img src="https://mui.com/static/images/cards/contemplative-reptile.jpg" />

            <ItemTextWarp>
              <div>{el.label}</div>
              <Sub>{el.detail}</Sub>
              <Actions>
                <Box
                  sx={{ display: "flex" }}
                  alignItems="center"
                  alignContent="center"
                >
                  <TimeIcon />
                  <div>{el.createdTime}</div>
                </Box>
                <Box />
                <Box
                  sx={{ display: "flex" }}
                  alignItems="center"
                  alignContent="center"
                >
                  <ViewIcon />
                  <div>{el.views}</div>
                </Box>
              </Actions>
            </ItemTextWarp>
          </Item>
          <Divider />
        </div>
      ))}
    </>
  );
};

export default ArticleList;
