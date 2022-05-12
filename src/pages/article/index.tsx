/*
 * Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 * Use of this source code is governed by a MIT style
 * license that can be found in the LICENSE file.
 */

import React from "react";
import BaseWarp from "@/components/BaseWarp/BaseWarp";
import styled from "@emotion/styled";
import {FlexColumnBox, FlexRowBox} from "@/assets/style/box";
import PaginationBase from "@/components/Pagination/Pagination";
import Chip from "@/components/Chip/Chip";
import {Article, ArticleCategory, ArticleTag} from "@/types/article";
import PaperMain from "@/components/Paper/PaperMain";
import BasePaper from "@/components/Paper/Paper";
import List from "@/components/ArticleList/ArticleList";
import {useArticleCategory, useArticles, useArticleTags,} from "@/utils/hooks/useArticle";
import {mq} from "@/assets/style/breakpoints";

const ColumnWarp = styled(FlexColumnBox)`
  align-items: flex-start;
  gap: 30px 0;
  margin: 0 0 0 20px;
  flex: 30%;
  order: 2;
  ${mq["sm"]} {
    flex: 100%;
    margin: 30px 0;
  }
`;

const Warp = styled(BaseWarp)`
  ${mq["sm"]} {
    flex-direction: column;
  }
`;

const Pagination = styled(PaginationBase)`
  padding: 20px;
`;

const ArticlesMain = styled(FlexRowBox)`
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

interface ListProps {
  articles: Article[];
  handleClickPage(page: number): void;
  className?: string;
}

const ArticleList = ({ articles, handleClickPage, className }: ListProps) => {
  return (
    <BasePaper label="文章列表" className={className}>
      <ArticlesMain>
        <List list={articles} />
        <Pagination onChange={handleClickPage} total={2} />
      </ArticlesMain>
    </BasePaper>
  );
};

const ArticleListWarp = styled(ArticleList)`
  flex: 70%;
  ${mq["sm"]} {
    flex: 100%;
  }
`;

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

  return (
    <Warp>
      <ArticleListWarp articles={articles} handleClickPage={handleClickPage} />
      <ColumnWarp>
        <NavPlate
          label="推荐分类"
          list={category}
          handleClick={handleClickCategory}
        />
        <NavPlate label="推荐标签" list={tags} handleClick={handleClickTag} />
      </ColumnWarp>
    </Warp>
  );
};

export default Index;
