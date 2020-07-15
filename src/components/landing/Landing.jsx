import React, { useState, useEffect } from "react";
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
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { connect } from "react-redux";
import {
  getUserDataAction,
  productPointsAction,
  productPointsPlusAction,
  resetStateAction,
} from "../../redux/product.action";
import { useStyles } from "./landing.styles";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import { Tooltip } from "@material-ui/core";

const Landing = (props) => {
  const {
    userData,
    userPoints,
    pointsPlus,
    getUserDataAction,
    productPointsAction,
    productPointsPlusAction,
    resetStateAction,
  } = props;
  const { name, points } = userData;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  useEffect(() => {
    getUserDataAction();
  }, [getUserDataAction]);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const addPoints = (amount) => {
    amount === 5000 ? productPointsPlusAction(amount) : productPointsAction(amount);
    toast.success(`+${amount} points added!`);
  };

  const resetState = () => {
    resetStateAction();
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
      <MenuItem onClick={handleMenuClose}>{name}</MenuItem>
      <MenuItem onClick={handleMenuClose}>{points} points</MenuItem>
    </Menu>
  );

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
              <Tooltip title="Store" aria-label="Store">
                <IconButton color="inherit">
                  <Badge color="secondary">
                    <StorefrontIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
            </Link>
            <Link href="/history">
              <Tooltip title="History" aria-label="History">
                <IconButton color="inherit">
                  <Badge color="secondary">
                    <HistoryIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
            </Link>
            <Tooltip title="Clear" aria-label="clear">
              <IconButton color="inherit" onClick={() => resetState()}>
                <Badge color="secondary">
                  <HighlightOffIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Add 1000" aria-label="Add 1000">
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={() => addPoints(1000)}
              >
                <Badge badgeContent={`${userPoints / 1000}`} color="secondary">
                  <AddCircleIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Add 5000" aria-label="Add 5000">
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={() => addPoints(5000)}
              >
                <Badge badgeContent={`${pointsPlus / 1000}`} color="secondary">
                  <AddCircleIcon />
                </Badge>
              </IconButton>
            </Tooltip>

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
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AppBar>
      {renderMenu}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.products.userData,
    userPoints: state.products.userPoints,
    pointsPlus: state.products.pointsPlus,
    isLoading: state.products.isLoading,
  };
};

const mapDispatchToProps = {
  getUserDataAction,
  productPointsAction,
  productPointsPlusAction,
  resetStateAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
