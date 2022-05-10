/*
 *  Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 *  Use of this source code is governed by a MIT style
 *  license that can be found in the LICENSE file.
 */

import React, { useState, lazy } from "react";
import styled from "@emotion/styled";
import BaseWarp from "../../components/BaseWarp/BaseWarp";
import Box from "@mui/material/Box";
import Plate from "../../components/Plate/Plate";
import ArticleList from "../../components/Article/ArticleList";

const ColumnWarp = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px 0;
`;

const useArticles = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      label: "Golang",
      createdTime: "2022-02-01",
      views: 10,
    },
    {
      id: 2,
      label: "Java",
      createdTime: "2022-02-01",
      views: 20,
    },
  ]);

  return { articles };
};

const useCategory = () => {
  const [category, setCategory] = useState([
    {
      id: 1,
      label: "Java",
    },
    {
      id: 2,
      label: "Golang",
    },

    {
      id: 3,
      label: "Golang",
    },
    {
      id: 4,
      label: "JavaScript",
    },
    {
      id: 5,
      label: "Golang",
    },
    {
      id: 6,
      label: "Golang",
    },

    {
      id: 7,
      label: "Golang",
    },
    {
      id: 8,
      label: "JavaScript",
    },
    {
      id: 9,
      label: "Golang",
    },
    {
      id: 10,
      label: "Golang",
    },
  ]);

  return { category };
};

const useTags = () => {
  const [tags, setTags] = useState([
    {
      id: 1,
      label: "Java",
    },
    {
      id: 2,
      label: "Golang",
    },

    {
      id: 3,
      label: "Golang",
    },
    {
      id: 4,
      label: "JavaScript",
    },
    {
      id: 5,
      label: "Golang",
    },
    {
      id: 6,
      label: "Golang",
    },

    {
      id: 7,
      label: "Golang",
    },
    {
      id: 8,
      label: "JavaScript",
    },
    {
      id: 9,
      label: "Golang",
    },
    {
      id: 10,
      label: "Golang",
    },
  ]);

  return { tags };
};

const Index = () => {
  const { articles } = useArticles();
  const { category } = useCategory();
  const { tags } = useTags();
  const sx = {
    display: {
      xs: "none",
      sm: "flex",
    },
  };

  return (
    <BaseWarp>
      <ArticleList articles={articles} />
      <ColumnWarp sx={sx}>
        <Plate list={category} title={"推荐分类"} />
        <Plate list={tags} title={"推荐标签"} />
      </ColumnWarp>
    </BaseWarp>
  );
};

export default Index;
