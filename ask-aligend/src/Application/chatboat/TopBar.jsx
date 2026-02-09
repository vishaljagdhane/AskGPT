import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function TopBar() {
  return (
    <AppBar position="static" elevation={1}>
      <Toolbar>
        <Typography variant="h6">
          AskGpt
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
