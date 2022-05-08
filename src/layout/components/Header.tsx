import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styled from "@emotion/styled";
import { Navs } from "../types";

interface Props {
  className?: string;
  navs: Navs;
  navIndex: number;
  setNavIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Header = ({ className, navs, navIndex, setNavIndex }: Props) => {
  const handleChange = (
    ev: React.SyntheticEvent<Element, Event>,
    val: number
  ) => {
    setNavIndex(val);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="default" position="static">
        <Toolbar>
          <Tabs
            className={className}
            value={navIndex}
            onChange={handleChange}
            centered
          >
            {navs.map((el, index) => (
              <Tab key={index} value={index} label={el.label} />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default styled(Header)`
  width: 100%;
`;
