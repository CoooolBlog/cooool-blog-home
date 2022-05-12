/*
 *  Copyright 2022 Kristian Huang <krishuang007@gmail.com>. All rights reserved.
 *  Use of this source code is governed by a MIT style
 *  license that can be found in the LICENSE file.
 */

import React, { useMemo, useState } from "react";
import BasePagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";

const usePage = (
  total: number,
  pageSize: number,
  onChange: (pgae: number) => void
) => {
  const [counter, setCounter] = useState(0);
  const [page, setPage] = useState(1);
  const handleChangePage = (nowPage: number) => {
    if (page == nowPage) {
      return;
    }
    setPage(nowPage);
    onChange(nowPage);
  };
  useMemo(() => {
    setCounter(Math.ceil(total / pageSize));
  }, [total]);

  return {
    counter,
    handleChangePage,
  };
};

interface Props {
  total: number;
  pageSize?: number;
  className?: string;
  onChange: (page: number) => void;
}

const Pagination = ({ total, onChange, className, pageSize = 20 }: Props) => {
  const { counter, handleChangePage } = usePage(total, pageSize, onChange);

  return (
    <Box
      className={className}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <BasePagination
        onChange={(ev, page) => handleChangePage(page)}
        count={counter}
      />
    </Box>
  );
};

export default Pagination;
