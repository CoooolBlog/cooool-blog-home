/*
 *  Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 *  Use of this source code is governed by a MIT style
 *  license that can be found in the LICENSE file.
 */

import React from "react";
import styled from "@emotion/styled";
import BaseWarp from "../../components/BaseWarp/BaseWarp";
import Chip from "@/components/Chip/Chip";
import { Article, ArticleCategory, ArticleTag } from "@/types/article";
import BasePaper from "@/components/Paper/Paper";
import PaginationBase from "@/components/Pagination/Pagination";
import List from "@/components/ArticleList/ArticleList";
import { FlexColumnBox, FlexRowBox } from "@/assets/style/box";
import PaperMain from "@/components/Paper/PaperMain";
import {
  useArticleCategory,
  useArticles,
  useArticleTags,
} from "@/utils/hooks/useArticle";

const Pagination = styled(PaginationBase)`
  padding: 20px;
`;

const ArticlesMain = styled(FlexRowBox)`
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 800px;
`;

const ColumnWarp = styled(FlexColumnBox)`
  align-items: flex-start;
  gap: 30px 0;
  margin: 0 0 0 20px;
  max-width: 320px;
`;

interface ListProps {
  articles: Article[];
  handleClickPage(page: number): void;
}

const ArticleList = ({ articles, handleClickPage }: ListProps) => {
  return (
    <BasePaper label="推荐文章">
      <ArticlesMain>
        <List list={articles} />
        <Pagination onChange={handleClickPage} total={2} />
      </ArticlesMain>
    </BasePaper>
  );
};

interface NavPlateProps {
  list: (ArticleCategory | ArticleTag)[];
  handleClick: (item: ArticleCategory | ArticleTag) => void;
  label: string;
}

const NavPlate = ({ list, handleClick, label }: NavPlateProps) => {
  return (
    <BasePaper label={label}>
      <PaperMain>
        {list.map((el) => (
          <Chip key={el.id} item={el} handleClick={handleClick} />
        ))}
      </PaperMain>
    </BasePaper>
  );
};

const Index = () => {
  const { articles, handleClickPage } = useArticles(1);
  const { category, handleClickCategory } = useArticleCategory();
  const { tags, handleClickTag } = useArticleTags();
  const sx = {
    display: {
      xs: "none",
      sm: "flex",
    },
  };

  return (
    <BaseWarp>
      <ArticleList articles={articles} handleClickPage={handleClickPage} />
      <ColumnWarp>
        <NavPlate
          label="推荐分类"
          list={category}
          handleClick={handleClickCategory}
        />
        <NavPlate label="推荐标签" list={tags} handleClick={handleClickTag} />
      </ColumnWarp>
    </BaseWarp>
  );
};

export default Index;
