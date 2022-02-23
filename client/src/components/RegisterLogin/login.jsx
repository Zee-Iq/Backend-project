import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
const Login = () => {
  const [users, setUsers] = useState([]);
  const [flag, setFlag] = useState();
  

  // GET DATA
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/users/list");
      setUsers([...response.data]);
    };
    getData();
  }, [flag]);

  // CREATE AN EMPTY OBJECT
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log("user:", user);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('HELLO FROM SIGN IN');
  };

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
    <Grid>
      <Paper   elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          name="username"
          onChange={(e) => onInputChange(e)}
          /* label="Username" */
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          name="password"
          onChange={(e) => onInputChange(e)}
          /* label="Password" */
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <NavLink to="/">
        <Button
         
         type="submit"
         color="primary"
         variant="contained"
         style={btnstyle}
         fullWidth
       >
         Sign in
       </Button>
        </NavLink>
        
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?<Link href="/register">Register here</Link>
        </Typography>
      </Paper>
    </Grid>
    </form>
  );
};

export default Login;
