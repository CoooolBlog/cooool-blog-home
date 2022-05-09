import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Article as ArticleItem } from "../types";
import styled from "@emotion/styled";

const IconStyles = {
  margin: "0 5px 0 0",
};

const ViewIcon = styled(RemoveRedEyeIcon)`
  ${IconStyles}
`;

const TimeIcon = styled(AccessTimeIcon)`
  ${IconStyles}
`;

interface Props extends ArticleItem {
  className?: string;
}

const Article = ({ className, id, label, views, createdTime }: Props) => {
  return (
    <Card className={className}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {label}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box sx={{ display: "flex" }} alignItems="center" alignContent="center">
          <TimeIcon />
          <Typography>{createdTime}</Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex" }} alignItems="center" alignContent="center">
          <ViewIcon />
          <Typography>{views}</Typography>
        </Box>
      </CardActions>
    </Card>
  );
};

export default styled(Article)``;
