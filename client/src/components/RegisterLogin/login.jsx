import React from "react";
import login from "./login.scss";
import { Avatar, Grid, Paper } from "@material-ui/core";

const LogIn = () => {
  /* custom styling functions */
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: "50%",
    margin: "40px auto ",
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
          
        <Avatar></Avatar>
        <h5>Sign in </h5>
      </Paper>
    </Grid>
  );
};
export default LogIn;
