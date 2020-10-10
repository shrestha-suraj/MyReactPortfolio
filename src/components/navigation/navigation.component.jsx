import React from "react";
import "./navigation.styles.scss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'

const theme=createMuiTheme({
})

export default function Navigation() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="secondary">
        <Toolbar>
            <ButtonGroup variant="contained" color="secondary" style={{marginLeft:'auto'}}>
                <Button>Intro</Button>
                <Button>Intro</Button>
                <Button>Intro</Button>
                <Button>Intro</Button>
                <Button>Intro</Button>
            </ButtonGroup>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
