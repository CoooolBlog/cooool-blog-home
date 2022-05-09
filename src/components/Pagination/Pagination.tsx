import React, { useMemo, useState } from "react";
import BasePagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

const usePage = (total: number) => {
  const [counter, setCounter] = useState(0);
  useMemo(() => {
    setCounter(Math.ceil(total));
  }, [total]);

  return {
    counter,
  };
};

interface Props {
  total: number;
  className?: string;
  onChange: (page: number) => void;
}

const DarkPagination = styled(BasePagination)`
  background-color: #000;
  color: #fff;
`;

const Pagination = ({ total, className, onChange }: Props) => {
  const { counter } = usePage(total);

  return (
    <Box
      className={className}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <BasePagination onChange={(ev, page) => onChange(page)} count={counter} />
    </Box>
  );
};

export default Pagination;
