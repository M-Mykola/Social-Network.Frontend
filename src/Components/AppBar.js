import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

function ButtonAppBar() {
  function cleer() {
    localStorage.removeItem("TOKEN");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={cleer}>
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default ButtonAppBar;
