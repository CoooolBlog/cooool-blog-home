/*
 *  Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 *  Use of this source code is governed by a MIT style
 *  license that can be found in the LICENSE file.
 */

import React, { useState } from "react";
import BaseWarp from "../../components/BaseWarp/BaseWarp";
import ArticleList from "../../components/List/List";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Plate from "../../components/Plate/Plate";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import { FlexColumnBox } from "../../assets/style/box";

const ColumnWarp = styled(FlexColumnBox)`
  align-items: flex-start;
  gap: 30px 0;
`;

const Header = styled(Box)`
  padding: 15px 20px;
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

  const handleClickCategory = (index: number) => {
    console.log(index);
  };

  return { category, handleClickCategory };
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
  const handleClickTag = (index: number) => {
    console.log(index);
  };

  return { tags, handleClickTag };
};

const Index = () => {
  const { articles } = useArticles();
  const { category, handleClickCategory } = useCategory();
  const { tags, handleClickTag } = useTags();

  return (
    <BaseWarp>
      <Paper sx={{ maxWidth: 800 }} elevation={2}>
        <Header>
          <Typography variant="h6">文章分类</Typography>
        </Header>
        <Divider />
        <ArticleList list={articles} />
      </Paper>
      <ColumnWarp>
        <Plate
          list={category}
          title="文章分类"
          handleClick={handleClickCategory}
        />
        <Plate list={tags} title="文章标签" handleClick={handleClickTag} />
      </ColumnWarp>
    </BaseWarp>
  );
};

export default Index;
