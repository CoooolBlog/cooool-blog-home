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

const styles = {
  padding: "20px",
};

const Header = styled(Box)`
  padding: 15px 20px;
`;

const Container = styled(Stack)`
  padding: 20px;
`;

interface Props {
  className?: string;
  articles: Articles;
}

const TopArticles = ({ className, articles }: Props) => {
  return (
    <Paper className={className} elevation={2}>
      <Header>
        <Typography variant="h6">推荐文章</Typography>
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
