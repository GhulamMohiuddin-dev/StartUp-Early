import React, { useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu, Event } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import home from "../assets/cottage.svg";

const drawerWidth = 231;

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          <img src={logo} alt="Logos" className="h-12" />
        </Typography>
      </Toolbar>
      <Divider sx={{ my: 2 }} />

      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <ListItem
          button
          component={Link}
          to="/home"
          sx={{
            "&:hover": {
              backgroundColor: "#3D37F11F",
              borderRadius: "17px",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: "38px" }}>
            <img src={home} alt="Home" />
          </ListItemIcon>
          <ListItemText
            primary="Home"
            primaryTypographyProps={{
              sx: { fontSize: "14px", lineHeight: "18px", fontWeight: 400 },
            }}
          />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/events"
          sx={{
            "&:hover": {
              backgroundColor: "#3D37F11F",
              borderRadius: "17px",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: "38px" }}>
            <Event />
          </ListItemIcon>
          <ListItemText
            primary="Events"
            primaryTypographyProps={{
              sx: { fontSize: "14px", lineHeight: "18px", fontWeight: 400 },
            }}
          />
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          display: { md: "none" },
          position: "absolute",
          top: 16,
          left: 16,
        }}
      >
        <Menu />
      </IconButton>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            height: "calc(100vh - 32px)",
            padding: "16px",
            margin: "16px",
            borderRadius: "17px",
            boxShadow: 2,
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Box
        component="main"
        sx={{
          p: 3,
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Sidebar;
