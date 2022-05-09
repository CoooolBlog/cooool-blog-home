import React from "react";
import { Category, Tags } from "../types";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const Header = styled(Box)`
  padding: 20px;
`;

const ListWarp = styled(Box)`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

interface Props {
  list: Category | Tags;
  title: string;
  className?: string;
}

const FloatingPlate = ({ className, list, title }: Props) => {
  return (
    <Paper elevation={2} className={className}>
      <Header>
        <Typography variant="h6">{title}</Typography>
      </Header>
      <Divider />
      <ListWarp>
        {list.map((el) => (
          <Chip
            onClick={() => {
              console.log(el.label);
            }}
            label={el.label}
            key={el.id}
          ></Chip>
        ))}
      </ListWarp>
    </Paper>
  );
};

export default styled(FloatingPlate)`
  margin: 0 0 0 20px;
  max-width: 320px;
`;
