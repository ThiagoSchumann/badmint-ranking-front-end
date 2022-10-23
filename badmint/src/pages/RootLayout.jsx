import * as React from "react";

import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;

export default function RootLayout() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          // sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
          style={{
            backgroundColor: "#3EB489",
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Badmint
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
          }}
          // variant="permanent" <- this is currently hiding the drawer
          variant="persistent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>
            <ListItem key={"import-championship"} disablePadding>
              <ListItemButton>
                <ListItemText primary={"Importar campeonato"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"import-athlete"} disablePadding>
              <ListItemButton>
                <ListItemText primary={"Importar atletas"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
      <Outlet />
    </div>
  );
}
