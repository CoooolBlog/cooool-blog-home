import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styled from "@emotion/styled";
import { Navs } from "../types";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

interface Props {
  navs: Navs;
  navIndex: number;
  setNavIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Nav = styled(Button)`
  margin: 0 5px;
`;

const NavBar = styled(AppBar)`
  background-color: #000;
`;

const PCAppBar = ({ navs, navIndex, setNavIndex }: Props) => {
  const handleChange = (val: number) => {
    setNavIndex(val);
  };
  const display = {
    xs: "none",
    sm: "flex",
  };

  return (
    <Box sx={{ display }}>
      <NavBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            {navs.map((el, index) => (
              <Nav
                key={index}
                size={navIndex == index ? "large" : "medium"}
                sx={{ color: "#fff" }}
                onClick={() => handleChange(index)}
              >
                {el.label}
              </Nav>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
        </Toolbar>
      </NavBar>
    </Box>
  );
};

const MobileAppBar = ({ navs, setNavIndex }: Props) => {
  const handleChange = (val: number) => {
    setNavIndex(val);
  };

  const [menu, setMenu] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (ev: React.MouseEvent<HTMLElement>) => {
    setMenu(ev.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenu(null);
  };

  const handleClickNav = (index: number) => {
    handleChange(index);
    handleCloseMenu();
  };

  const display = {
    xs: "flex",
    sm: "none",
  };

  return (
    <Box sx={{ display }}>
      <NavBar position="static">
        <Toolbar>
          <Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 400,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {"KrisHuang's Bolg"}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleOpenMenu}
              sx={{ p: 0 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={menu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(menu)}
              onClose={handleCloseMenu}
            >
              {navs.map((el, index) => (
                <MenuItem key={index} onClick={() => handleClickNav(index)}>
                  <Typography textAlign="center">{el.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </NavBar>
    </Box>
  );
};

const Header = (props: Props) => {
  return (
    <>
      <PCAppBar {...props} />
      <MobileAppBar {...props} />
    </>
  );
};

export default Header;
