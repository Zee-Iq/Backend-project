import { useState } from "react";
import axios from "axios";

import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";

const Register = () => {
  /* catching data */
  const [user, setUser] = useState({
    name: "",
    mail: "",
    password: "",
  });

  /*  Info from  User input*/
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user);

  // SEND CONTACT OBJECT TO THE SERVER SIDE
  const handleAddUsers = async () => {
    const response = await axios.post("/users/add", user);
    //setflag(!flag);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    handleAddUsers();
  };

  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Register</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form
          onSubmit={(e) => {
            handleRegister(e);
          }}
        >
          <TextField
            fullWidth
            label="Name"
            placeholder="Enter your name"
            name="name"
            onChange={(e) => onInputChange(e)}
          />
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your email"
            name="mail"
            onChange={(e) => onInputChange(e)}
          />
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            fullWidth
            label="Phone Number"
            placeholder="Enter your phone number"
          />
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
            name="password"
            onChange={(e) => onInputChange(e)}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            placeholder="Confirm your password"
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          />
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Register;
