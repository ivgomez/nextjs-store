import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import StorefrontIcon from "@material-ui/icons/Storefront";
import HistoryIcon from "@material-ui/icons/History";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import { useStyles } from "./landing.styles";
import Link from "next/link";

const Landing = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Store App
          </Typography>
          <div className={classes.grow} />
          <div>
            <Link href="/">
              <IconButton color="inherit">
                <Badge color="secondary">
                  <StorefrontIcon />
                </Badge>
              </IconButton>
            </Link>
            <Link href="/history">
              <IconButton color="inherit">
                <Badge color="secondary">
                  <HistoryIcon />
                </Badge>
              </IconButton>
            </Link>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent="1k" color="secondary">
                <AddCircleIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent="5k" color="secondary">
                <AddCircleIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
};

export default Landing;
