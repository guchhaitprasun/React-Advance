import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  TextField,
  Box,
  Stack,
} from "@mui/material";

const TestComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      {/* AppBar Component for Navigation */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Material UI Demo
          </Typography>
          <Button color="inherit" onClick={toggleDrawer}>
            Menu
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer for Side Menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content: A Simple Form */}
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Simple Form
        </Typography>

        {/* Using the new Stack system */}
        <Stack spacing={2} direction="column">
          <TextField fullWidth label="First Name" variant="outlined" />
          <TextField fullWidth label="Last Name" variant="outlined" />
          <TextField fullWidth label="Email" variant="outlined" />
          <Button variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default TestComponent;
