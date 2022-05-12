/*
 *  Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 *  Use of this source code is governed by a MIT style
 *  license that can be found in the LICENSE file.
 */

import { useEffect, useState } from "react";
import { ArticleCategory, ArticleTag } from "@/types/article";

export const useArticles = (
  page: number,
  categoryID?: number,
  tagID?: number
) => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      label: "Golang",
      createdTime: "2022-02-01",
      views: 10,
      detail: ` Lizards are a widespread group of squamate reptiles, with over
      6,000 species, ranging across all continents except Antarctica`,
    },
    {
      id: 2,
      label: "Java",
      createdTime: "2022-02-01",
      views: 20,
      detail: ` Lizards are a widespread group of squamate reptiles, with over
      6,000 species, ranging across all continents except Antarctica`,
    },
  ]);
  useEffect(() => {
    console.log(page);
  }, [page, categoryID, tagID]);

  const handleClickPage = (page: number) => {
    console.log(page);
  };

  return { articles, handleClickPage };
};

export const useArticleCategory = () => {
  const [category, setCategory] = useState<ArticleTag[]>([
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
  const handleClickCategory = (item: ArticleCategory) => {
    console.log(item);
  };

  return { category, handleClickCategory };
};

export const useArticleTags = () => {
  const [tags, setTags] = useState<ArticleTag[]>([
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
  const handleClickTag = (item: ArticleTag) => {
    console.log(item);
  };

  return { tags, handleClickTag };
};

export const useArticleCategoryItem = (id: number) => {
  console.log(id);
};
