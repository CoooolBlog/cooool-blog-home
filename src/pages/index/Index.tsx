/*
 * Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 * Use of this source code is governed by a MIT style
 * license that can be found in the LICENSE file.
 */

import {Container} from "@mui/material";
import Box from "@mui/material/Box";
import React, {useState} from "react";
import styled from "@emotion/styled";
import {Articles, Category as CategoryType, Tags} from "./types";
import TopArticles from "./components/TopArticles";
import FloatingPlate from "./components/FloatingPlate";

const RowWarp = styled(Box)`
  margin: 30px 0;
  display: flex;
  align-items: flex-start;
`;

const ColumnWarp = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px 0;
`;

const useArticles = () => {
  const [articles, setArticles] = useState<Articles>([
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
  const [category, setCategory] = useState<CategoryType>([
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
  const [tags, setTags] = useState<Tags>([
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

  return (
    <Container>
      <RowWarp>
        <TopArticles articles={articles} />
        <ColumnWarp sx={{ display: { xs: "none", sm: "flex" } }}>
          <FloatingPlate list={category} title={"推荐分类"} />
          <FloatingPlate list={tags} title={"推荐标签"} />
        </ColumnWarp>
      </RowWarp>
    </Container>
  );
};

export default Index;
