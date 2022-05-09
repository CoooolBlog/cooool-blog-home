import React from "react";
import Paper from "@mui/material/Paper";
import { Article as ArticleItem, Articles } from "../types";
import Article from "./Article";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import BasePagination from "../../../components/Pagination/Pagination";

const styles = {
  padding: "20px",
};

const Header = styled(Box)`
  ${styles}
`;

const Container = styled(Stack)`
  ${styles}
`;

const Pagination = styled(BasePagination)`
  padding: 20px 0;
`;

interface Props {
  className?: string;
  articles: Articles;
}

const TopArticles = ({ className, articles }: Props) => {
  const onChange = (page: number) => {
    console.log(page);
  };

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

      <Pagination onChange={onChange} total={10} />
    </Paper>
  );
};

export default styled(TopArticles)`
  max-width: 800px;
`;
