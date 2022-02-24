import { useEffect, useState } from "react";
import './register.scss'
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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
const Register = () => {

  const [userAdminClass, setUserAdminClass]= useState()
  const [update, setUpdate] = useState(false);
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

  // EDIT
  const handleEditContact = (index) => {
    
  };



  //DELETE
  const handleDeleteContact = (index) => {
    let temp = [...users];
    if (index !== -1) {
      temp.splice(index, 1);
    }
    setUsers(temp);

    setUpdate(!update);
  };

  useEffect(() => {
    const updateData = async () => {
      await axios.post("/contacts/delete", users);
    };
    if (update) updateData();

    console.log("-------------useEffect is running----------------");
  }, [update]);

  // END DELETE

  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  return (
    <div className="register">
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
      <button onClick={(e) => setUserAdminClass(!userAdminClass)} className="btn btn-primary">ADMIN</button>
      <div className={(userAdminClass)? "show" : "hide"}>
        <h1 className="bg-danger ">REGISTERED USERS</h1>

        <Row className="m-2 bg-warning ">
             <Col>Name</Col>
             <Col className="">Mail</Col>
             <Col>Phone</Col>
             <Col>Location</Col>
             <Col>Message</Col>
             <Col>Edit</Col>
             </Row>
        {users?.map((item, index) => {
          return (
            <Row key={index} className="m-2 shadow-2 d-flex align-items-center">
              <Col className=" ">{item.name}</Col>
              <Col className="">{item.mail}</Col>
              <Col className=" ">{item.phone}</Col>
              <Col className=" ">{item.location}</Col>
              <Col className="">{item.message}</Col>
              
              <Col>
                <OverlayTrigger
                  overlay={<Tooltip id={`tooltip-top`}>Edit</Tooltip>}
                >
                  <button
                    onClick={() => handleEditContact(index)}
                    className="btn text-warning btn-act"
                    data-toggle="modal"
                  >
                    <EditIcon />
                  </button>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={<Tooltip id={`tooltip-top`}>Delete</Tooltip>}
                >
                  <button
                    onClick={() => handleDeleteContact(index)}
                    className="btn text-danger btn-act"
                    data-toggle="modal"
                  >
                    <DeleteIcon />{" "}
                  </button>
                </OverlayTrigger>
              </Col>
            </Row>
            
          );
        })}
      </div>
    </div>
  );
};

export default Register;
