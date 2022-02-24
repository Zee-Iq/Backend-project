import { MDBIcon } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import "./Contact.scss";
import axios from "axios";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const Contact = () => {
  const [cd, setCd] = useState([]);
  const [allContact, setAllContact] = useState([]);
  const [flag, setFlag] = useState();
  const [update, setUpdate] = useState(false);

  // GET DATA
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/contacts/list");
      setCd([...response.data]);
    };
    getData();
  }, [flag]);

  console.log("cd", cd);

  // CREATE AN EMPTY OBJECT
  const [contact, setContact] = useState({
    name: "",
    mail: "",
    phone: "",
    location: "",
    message: "",
  });

  // GET INFO FROM USER SEND TO THE OBJECT
  const onInputChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  // SEND CONTACT OBJECT TO THE SERVER SIDE
  const handleAddContact = async () => {
    await axios.post("/contacts/add", contact);
    setFlag(!flag);
  };

  // EDIT
  const handleEditContact = (index) => {
    
  };



  //DELETE
  const handleDeleteContact = (index) => {
    let temp = [...cd];
    if (index !== -1) {
      temp.splice(index, 1);
    }
    setCd(temp);

    setUpdate(!update);
  };

  useEffect(() => {
    const updateData = async () => {
      await axios.post("/contacts/delete", cd);
    };
    if (update) updateData();

    console.log("-------------useEffect is running----------------");
  }, [update]);

  // END DELETE

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAllContact([...allContact, contact]);
    setFlag(!flag);
    handleAddContact();
  };

  const [adminClass, setAdminClass]= useState()
  console.log("contact is: ", contact);
  console.log("ALL CONTACTS ARE: ", allContact);
  return (
    <div className="contacts m-5">
      <div
        className="contact2"
        style={{
          backgroundImage: `url('https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/map.jpg')`,
        }}
        id="contact"
      >
        <div className="container">
          <div className="row contact-container">
            <div className="col-lg-12">
              <div className="card card-shadow border-0 mb-4">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="contact-box p-4">
                      <h4 className="title">Contact Us</h4>
                      <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input
                                name="name"
                                onChange={(e) => onInputChange(e)}
                                className="form-control"
                                type="text"
                                placeholder="name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input
                                name="mail"
                                onChange={(e) => onInputChange(e)}
                                className="form-control"
                                type="text"
                                placeholder="email"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input
                                name="phone"
                                onChange={(e) => onInputChange(e)}
                                className="form-control"
                                type="text"
                                placeholder="phone"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group mt-3">
                              <input
                                name="location"
                                onChange={(e) => onInputChange(e)}
                                className="form-control"
                                type="text"
                                placeholder="location"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mt-3">
                              <textarea
                                name="message"
                                onChange={(e) => onInputChange(e)}
                                className="form-control"
                                type="text"
                                placeholder="message"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <button
                              type="submit"
                              className="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3"
                            >
                              <span>
                                SUBMIT NOW <i className="ti-arrow-right"></i>
                              </span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 bg-image"
                    style={{
                      backgroundImage: `url('https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/1.jpg')`,
                    }}
                  >
                    <div className="detail-box p-4">
                      <h5 className="text-white font-weight-light mb-3">
                        ADDRESS
                      </h5>
                      <p className="text-white op-7">
                        601 Sherwood Ave.
                        <br /> San Bernandino
                      </p>
                      <h5 className="text-white font-weight-light mb-3 mt-4">
                        CALL US
                      </h5>
                      <p className="text-white op-7">
                        251 546 9442
                        <br /> 630 446 8851
                      </p>
                      <div className="round-social light">
                        <a
                          className="btn btn-primary btn-floating m-1"
                          style={{ backgroundColor: "#3b5998" }}
                          href="#!"
                          role="button"
                        >
                          <MDBIcon fab icon="facebook-f" />
                        </a>

                        <a
                          className="btn btn-primary btn-floating m-1"
                          style={{ backgroundColor: "#55acee" }}
                          href="#!"
                          role="button"
                        >
                          <MDBIcon fab icon="twitter" />
                        </a>

                        <a
                          className="btn btn-primary btn-floating m-1"
                          style={{ backgroundColor: "#dd4b39" }}
                          href="#!"
                          role="button"
                        >
                          <MDBIcon fab icon="google" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={(e) => setAdminClass(!adminClass)} className="btn btn-primary">ADMIN</button>
      <div className={(adminClass)? "show" : "hide"}>
        <h1>TEST</h1>

        <Row className="m-2 bg-info ">
             <Col>Name</Col>
             <Col className="">Mail</Col>
             <Col>Phone</Col>
             <Col>Location</Col>
             <Col>Message</Col>
             <Col>Edit</Col>
             </Row>
        {cd?.map((item, index) => {
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
