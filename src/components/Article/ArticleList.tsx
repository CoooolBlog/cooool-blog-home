/*
 *  Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 *  Use of this source code is governed by a MIT style
 *  license that can be found in the LICENSE file.
 */

import React from "react";
import Paper from "@mui/material/Paper";
import { Article as ArticleItem, Articles } from "./types";
import Article from "./ArticleItem";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const Header = styled(Box)`
  padding: 15px 20px;
`;

const Container = styled(Stack)`
  padding: 20px;
`;

interface Props {
  articles: Articles;
  title: string;
  className?: string;
}

const TopArticles = ({ className, articles, title }: Props) => {
  return (
    <Paper className={className} elevation={2}>
      <Header>
        <Typography variant="h6">{title}</Typography>
      </Header>
      <Divider />
      <Container spacing={2}>
        {articles.map((el: ArticleItem) => (
          <Article {...el} key={el.id} />
        ))}
      </Container>
    </Paper>
  );
};

export default styled(TopArticles)`
  max-width: 800px;
`;
