import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  AppBar,
  Toolbar,
  Slide,
  IconButton,
  Menu,
  Container,
  Button,
  MenuItem,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return <Slide in={!trigger}>{children}</Slide>;
}

const Header = ({ navToSt, navToAb, navToPr, ...props }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar className="header">
          <Typography
            variant="h5"
            component="div"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", sm: "flex" },
              fontWeight: 500,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Yegor Malakhov
          </Typography>

          <Box
            className="headerMenu"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "none" },
              align: "right",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              align="right"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={() => {
                  navToAb();
                  handleCloseNavMenu();
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{ minWidth: 100, cursor: "pointer" }}
                >
                  About
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navToSt();
                  handleCloseNavMenu();
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{ minWidth: 100, cursor: "pointer" }}
                >
                  Stack
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navToPr();
                  handleCloseNavMenu();
                }}
              >
                <Typography
                  textAlign="center"
                  sx={{ minWidth: 100, cursor: "pointer" }}
                >
                  Projects
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                }}
              >
                <Typography textAlign="center" sx={{ minWidth: 100 }}>
                  Contacts
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box
            align="right"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
          >
            <Typography
              onClick={() => {
                handleCloseNavMenu();
              }}
              textAlign="center"
              sx={{ minWidth: 90 }}
            >
              Contacts
            </Typography>

            <Typography
              onClick={() => {
                navToPr();
                handleCloseNavMenu();
              }}
              textAlign="center"
              sx={{ minWidth: 90, cursor: "pointer" }}
            >
              Projects
            </Typography>
            <Typography
              onClick={() => {
                navToSt();
                handleCloseNavMenu();
              }}
              textAlign="center"
              sx={{ minWidth: 90, cursor: "pointer" }}
            >
              Stack
            </Typography>
            <Typography
              onClick={() => {
                navToAb();
                handleCloseNavMenu();
              }}
              textAlign="center"
              sx={{ minWidth: 90, cursor: "pointer" }}
            >
              About
            </Typography>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", sm: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Yegor Malakhov
          </Typography>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
